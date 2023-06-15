import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { languages, interests, referralSources, interest, referralSource } from './Constants';

import * as Yup from 'yup';

import { type FormPayload } from '../pages/api/form';
import { type WithResponseProps } from '../pages/index';

type FormData = {
  name: string;
  email: string;
  language: string;
  referralSource: referralSource | '';
  interests: interest[];
};

// schema for Yup validation on form submission
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  language: Yup.string().required('Language is required'),
  referralSource: Yup.string().required('Referral source is required'),
  interests: Yup.array().min(1, 'At least one interest is required'),
});

const WebForm: React.FC<WithResponseProps> = ({ setResponse }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  // handle form submission. This is where we will make our POST request to the server
  const handleSubmit = async (values: FormData) => {
    const payload = JSON.stringify(values as FormPayload);

    // set loading 
    setIsLoading(true);
    let res = await fetch('/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload,
    })
    setIsLoading(false);
  
    // update response state (ok -> thank you, !ok -> error)
    setResponse(res.ok);
  };

  return (
     <div className="bg-white border border-gray-300 rounded shadow max-w-[800px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 min-h-screen sm:min-h-0">
       <h1 className="text-2xl font-bold mb-4">Displacement Resource Request Form</h1>
         <Formik
           initialValues={{
             name: '',
             email: '',
             language: '',
             referralSource: '',
             interests: [] as interest[],
           } as FormData}
           validationSchema={validationSchema}
           onSubmit={handleSubmit}
         >
           {({ values, setFieldValue, errors, touched }) => {
             // handle checkbox change
             function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
               const checked = e.target.checked;
               const newInterest = e.target.id as interest;

               let newInterests = checked
                 ? [...values.interests, newInterest]
                 : values.interests.filter((key) => key !== newInterest);
    
               setFieldValue('interests', newInterests);
             }
    
             const errorClass = 'text-red-500';
    
             return (
               <Form>
                 {/* Email */}
                 <div className="mb-4">
                   <label htmlFor="email" className="block mb-1 text-lg">Email:</label>
                   <Field
                     type="email"
                     id="email"
                     name="email"
                     className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 ${
                       errors.email && touched.email ? errorClass : ''
                     }`}
                   />
                   <ErrorMessage name="email" component="div" className={errorClass} />
                 </div>
    
                 {/* Name */}
                 <div className="mb-4">
                   <label htmlFor="name" className="block mb-1 text-lg">Name:</label>
                   <Field
                     type="text"
                     id="name"
                     name="name"
                     className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 ${
                       errors.name && touched.name ? errorClass : ''
                     }`}
                   />
                   <ErrorMessage name="name" component="div" className={errorClass} />
                 </div>
    
                 {/* Language */}
                 <div className="mb-4">
                   <label htmlFor="language" className="block mb-1 text-lg">Preferred Language:</label>
                   <Field
                     as="select"
                     id="language"
                     name="language"
                     className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 ${
                       errors.language && touched.language ? errorClass : ''
                     }`}
                   >
                     <option value="">Select language</option>
                     {languages.map((language) => (
                       <option key={language} value={language}>{language}</option>
                     ))}
                   </Field>
                   <ErrorMessage name="language" component="div" className={errorClass} />
                 </div>
    
                 {/* Referral Source */}
                 <div className="mb-4">
                   <label htmlFor="referralSource" className="block mb-1 text-lg">Where did you hear about us?</label>
                   <Field
                     as="select"
                     id="referralSource"
                     name="referralSource"
                     className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 ${
                       errors.referralSource && touched.referralSource ? errorClass : ''
                     }`}
                   >
                     <option value="">Select source</option>
                     {Object.keys(referralSources).map((key) => (
                       <option key={key} value={key}>{referralSources[key as referralSource]}</option>
                     ))}
                   </Field>
                   <ErrorMessage name="referralSource" component="div" className={errorClass} />
                 </div>
    
                 {/* Interests */}
                 <div className="mb-4">
                   <p className="mb-1 text-lg">How can we help?</p>
                   <ErrorMessage name="interests" component="div" className={errorClass} />
                   {Object.keys(interests).map((key) => (
                     <label htmlFor={key} className="flex items-center mb-2" key={key}>
                       <Field
                         type="checkbox"
                         id={key}
                         name="interests"
                         value={key}
                         className="mr-2"
                         onChange={handleCheckboxChange}
                       />
                       {interests[key as interest]}
                     </label>
                   ))}
                 </div>
    
                 {/* Submit */}
                 <div className="flex justify-center items-center">
                   <button
                     type="submit"
                     className="w-full max-w-md px-3 py-4 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
                   >
                     {isLoading ? (
                       <FaSpinner className="animate-spin mx-auto" />
                     ) : (
                       'Submit'
                     )}
                   </button>
                 </div>
               </Form>
             );
          }}
        </Formik>
    </div>
  );
};

export default WebForm;
