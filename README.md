# Here2Stay Interest Form
<details>
  <summary>Table of Contents</summary>
  <ul>
    <li>
      <a href="#development">Development</a>
    </li>
    <li>
      <a href="#external-services">External Services</a>
    </li>
    <li>
      <a href="#code">Code</a>
    </li>
  </ul>
</details>

## Development
Install the necessary dependencies with
```bash
npm install
```
then start the development server with
```bash
npm run dev
```
You should see the port that this is hosted on in the terminal output.
> Note: your first time spinning up the development server will likely show errors parsing the environment
variables. See [.env](#.env) section
## External Services
## Gmail
username: vercelauth@gmail.com
password: aZfMAQ27ZSGIGPl
### Vercel
Sign in to Vercel through the `Continue with Email` option. Vercel provides a name and a server for the web-app.

#### Google Cloud Platform (GCP)

For content related to the Google Cloud Platform, access the project dashboard and sign in using the same email as above.
We are primarily using this to facilitate spreadsheet access through the `Google Sheets API` and sending emails.

#### GitHub

For accessing the code sign in on Github using sign in with google. all of our code history will be on Github and any new changes
will be on Github.

#### Openai

Openai has a sign in with Google option as well. once you are able to sign in select dashboard from the navbar and then from the left side 
navbar you can select Usage to monitor API Key usage per day/monthly/year.

#### Pinecone

Pinecone is our vector database that is used by the chatbot and is where all of our resources are. To login to pinecone select log in with google option.
once logged in select 'ebprec' index to view all the records(resources).


#### Service Account
**Google cloud platform -> APIs & Services -> Credentials**
Here you will find the credentials that allow the web app to access the JWT auth and therefore the Google Sheets API. The service 
account section is where you will find the account associated with our webapp.
### .env
First Create an .env file on your project home directory. so the env would be inside INTEREST-FORM folder. once you created the .env file 
you would need to populate it with environment variables. you can obtain these from Vercel -> select interest-form project -> go to setting
-> go to enviroment Variables and copy all of the variable and their values into the .env file.
For example your .env file would look like:
```sh
EMAIL_ADDR='email we send from'
EMAIL_PASS='password for this email'
SHEETS_CLIENT_EMAIL='google cloud service account'
EMAIL_PRIVATE_KEY='private key for this servicce account'
// rest of the keys with their actual values

```

## Code
> Here is a breakdown of the project.
### Tech:
This is built on [Next.js](https://nextjs.org/) with React and TypeScript. Using the following libraries:
* Tailwind (styling)
* Formik & Yup (form validation)
* Googleapis (sheets integration and authentication)
* Nodemailer (primary email service)

The source folder has the following main folders:
* **components** - React Components
* **constants** - Constant values from EBPREC
* **pages** - Next.js Pages (see [Next.js project structure](https://nextjs.org/docs/getting-started/project-structure))
* **server** - Code to execute server-side
* **styles** - Tailwind-essential styles
> To keep this doc brief, I'll ignore the more self-explanatory files: `ErrorComponent`, `ThankYou`, `globals.css`
### env.mjs
This file exports a helpful `env` object to allow for type-safe environment variable access. When the project is
transpiled, any environment variables that we need will be validated. If you've forgotten any environment variables
in your `.env` file, it will fail the build. 
It's better to disallow deployments that have incorrect environment variables than to encounter runtime errors 
in production.
### /pages/api/form.ts
When hitting `/api/form` off of the main site, this `handler` function is invoked in Vercel's serverless 
edge network.
> Note: all files in `/pages/api` will be treated as edge functions when deploying to vercel
This file has two important things to point out: 
1. the `FormPayload` type is exported here for use in the 
front end. This helps to ensure type-safety across the stack. 
1. the handler function will `sendEmails` and `updateSpreadsheet` based on the payload's body. These functions
live in the `/server/` folder.
### /server/
#### /server/spreadsheet.ts
> An important note: for changes to be allowed, the google sheet that you wish to allow this webapp to access
must have the correct permissions. In the sheet's `share` section, ensure that the `SHEETS_CLIENT_EMAIL` has
edit access. Otherwise, the changes will be rejected.
Using the `JWT` from `google-auth-library`, we authenticate for sheets access.
```javascript
const client = new JWT({
  email: env.SHEETS_CLIENT_EMAIL,
  key: env.EMAIL_PRIVATE_KEY.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
```
Then, we set up to append a new line to the spreadsheet. Here is a breakdown of the append input object:
```javascript
await sheets.spreadsheets.values.append({
  spreadsheetId: sheetIDs[payload.referralSource], // each referral appends to a specific spreadsheet range: 'A1:AL1', // we only touch the range A1:AL1
    // ^ note: sheetsIDs lives in the /constants/Constants.ts file. This object maps referralSource -> sheets ID.
  ...,
  requestBody: {
    values: [
      getRowData(payload), // here I've abstracted a function to handle the logic for cell data
    ],
  },
});
```
`getRowData` yields an array of cell data. It is documented thoroughly.
#### /server/email.ts
> See the `nodemailer` example [here](https://nodemailer.com/about/#example).
This `email` file creates a combined email to send out based on the selected interests.
Using the `/constants/Email.ts` file for email constants, the email body is created and curried to 
the `sendEmail` function. Using the `nodemailer` `transporter`, we send an email from `DAP@EBPREC` using the provided email credentials.
## /constants
Here is where all constant values live.
Including:
* email bodies
* interests
* etc. (other things used for questions in the web form)
* referral sources to spreadsheet mapping
A very important part of this file is the mapping between `referralSource` to sheet id. In the `/server/spreadsheets.ts` file,
we use this map to determine which spreadsheet to write to depending on the selected referral source. So,
when you need to change which spreadsheets we access, this is the place to change.
## /components/WebForm
Here the only important thing to mention is that I used Formik and Yup. Formik and Yup are two powerful libraries often used together to streamline form management and validation in React applications. Let's break down how they work and how they can be used effectively:
**Formik:**
Formik is a library that simplifies the process of building and managing forms in React. It helps you handle form state, form submission, and validation. Here's a high-level overview of how Formik works:
1. **Form State Management:** Formik centralizes the management of form state. It keeps track of form values, touched fields, errors, and other relevant data.
2. **Form Component:** You start by wrapping your form component using the `<Formik>` component. This provides your form component with various props and functions to interact with Formik's state and methods.
3. **Form Values:** Form values are typically stored in the Formik state. You can access and update these values using the `values` prop provided by Formik.
4. **Form Submission:** Formik provides the `handleSubmit` function, which you attach to your form's `onSubmit` event. This function takes care of form submission and error handling.
5. **Field Components:** Formik offers custom field components like `<Field>`, `<FastField>`, and `<ErrorMessage>`. These components help you manage individual form fields and display error messages.
6. **Form Validation:** This is where Yup comes in. Formik supports integration with Yup for form validation. You define your validation schema using Yup and associate it with Formik.
**Yup:**
Yup is a JavaScript validation library that allows you to define schema-based validations for your data. It's particularly useful for form validation. Here's how Yup works:
1. **Validation Schema:** You create a validation schema using the methods provided by Yup. This schema defines the expected structure of your data and the validation rules each field should follow.
2. **Field Validation:** For each field in your form, you define validation rules using Yup's methods. These rules specify conditions that the field's value must meet.
3. **Validation Functions:** Yup generates validation functions based on the schema you've defined. These functions can be used to validate individual values against the schema.
4. **Integration with Formik:** Formik provides a prop called `validationSchema` that you can use to associate your Yup validation schema with the Formik form. Formik will automatically run the Yup validation when the form is submitted or fields are touched.
**Working Together:**
When using Formik and Yup together, the typical workflow looks like this:
1. **Set Up Formik:** Wrap your form component with the `<Formik>` component. Configure initial form values, submission handling, and provide a Yup validation schema using the `validationSchema` prop.
2. **Define Yup Schema:** Create a Yup validation schema using Yup's methods. Define validation rules for each field in your form.
3. **Connect Form Fields:** Inside your form component, use Formik's `<Field>` or other related components to connect form fields with Formik's state.
4. **Validation and Feedback:** As users interact with the form, Formik will handle updating its state. Yup's validation schema will be applied automatically, and any validation errors will be displayed using Formik's `<ErrorMessage>` component.
5. **Handle Submission:** When the user submits the form, Formik will trigger the defined `handleSubmit` function. If validation passes, this function will be called. If validation fails, error messages will be displayed.
In summary, Formik simplifies form management and submission, while Yup provides a robust way to define and enforce validation rules.
