import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { languages, referralSources, type Interest, InterestGrouping, interestText, referralSource, zipCodes, referralSourcesInSpanish, interestTextInSpanish } from '~/constants/Constants';
import { useLanguage } from '~/context/LanguageContext';
import * as Yup from 'yup';


import { type FormPayload } from '~/pages/api/form';
import { type WithResponseProps } from '~/pages/index';
import Image from 'next/image';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  language: string;
  referralSource: referralSource | undefined;
  interests: Interest[];
  phone: string;
  zip: string;
  otherZip: string;
  urgent: 'Yes' | 'No' | undefined;
  contactMethod: 'phone' | 'email' | undefined;
  communityOwner: 'Yes' | 'No' | undefined;
  appointment: 'Yes' | 'No' | undefined;
  inRegion: 'Yes' | 'No' | undefined;
  notes: string;
  isSpanish: boolean;
};
function getTranslation(isSpanish: boolean, key: string): string {
  if (isSpanish) {
    switch (key) {
      case 'Permanently Affordable Homeownership':
        return 'Ser propietario de una vivienda asequible de forma permanente';
      case 'Housing':
        return 'Vivienda';
      case 'Better Neighborhoods, Same Neighbors':
        return 'Mejores barrios, mismos vecinos';
      case 'Organizing/Volunteering':
        return 'Organización de Movimiento Comunitario o Voluntariado';
      default:
        return key; // Fallback to the original key if no translation is found
    }
  } else {
    return key; // Return the original key if isSpanish is false
  }
}




// schema for Yup validation on form submission


const WebForm: React.FC<WithResponseProps> = ({ setResponse }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [pageNo, setPageNo] = React.useState(1);
  const {isSpanish, setIsSpanish} = useLanguage();
  

  const validationSchema = Yup.object({
    firstName: Yup.string().required(isSpanish ? 'Por favor, pon tu nombre':'Please enter your first name'),
    lastName: Yup.string(),
    email: Yup.string().email(isSpanish ? 'Dirección de Email no válida': 'Invalid email address').required(isSpanish? 'Debes poner un Email':'Email is required'),
    language: Yup.string(),
    referralSource: Yup.string().required(isSpanish ? 'Debes indicar cómo te enteraste sobre nosotros':'Referral source is required'),
    interests: Yup.array().min(1, isSpanish ? 'Debes poner al menos un interés':'At least one interest is required'),
    phone: Yup.string()
      .required(isSpanish ? 'Debes poner un número de teléfono':'Phone number is required')
      .matches(/^[0-9]+$/, isSpanish ? "Debes usar sólo números":"Must be only digits")
      .min(10, isSpanish ? 'Debe tener exactamente 10 dígitos':'Must be exactly 10 digits')
      .max(10, isSpanish ? 'Debe tener exactamente 10 dígitos':'Must be exactly 10 digits'),
    zip: Yup.string()
      .required(isSpanish ? 'Debes indicar un código postal':'Zip code is required'),
    otherZip: Yup.string()
      .when('zip', {
        is: (zip: string) => zip === 'Other',
        then: (schema) => schema.matches(/^[0-9]+$/, isSpanish ? "Debes usar sólo números":"Must be only digits")
          .length(5, isSpanish? 'Debe tener exactamente 5 dígitos':'Must be exactly 5 digits'),
        otherwise: (schema) => schema.notRequired(),
      }),
    contactMethod: Yup.string(),
    communityOwner: Yup.string(),
    appointment: Yup.string(),
    inRegion: Yup.string(),
    urgent: Yup.string().min(1).required(isSpanish ? 'Por favor, especifica si necesitas algo urgente':'Please specify if you have urgent needs'),
  });

  // handle form submission. This is where we will make our POST request to the server
  const handleSubmit = async (values: FormData) => {
    const payload: FormPayload = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      language: values.language,
      referralSource: values.referralSource!,
      interests:
        values.urgent === "Yes"
          ? ["evictions" as Interest].concat(values.interests)
          : values.interests,
      phone: values.phone,
      zip: values.zip === "Other" ? values.otherZip : values.zip,
      contactMethod: values.contactMethod!,
      communityOwner: values.communityOwner!,
      appointment: values.appointment!,
      inRegion: values.inRegion!,
      notes: values.notes,
      isSpanish: isSpanish,
    };
    const payloadJSON = JSON.stringify(payload);

    // set loading
    setIsLoading(true);
    let res = await fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payloadJSON,
    });
    setIsLoading(false);

    // update response state (ok -> thank you, !ok -> error)
    setResponse(res.ok);
  };

  return (
    <div className="min-h-screen max-w-[800px] rounded border border-gray-300 bg-white p-6 shadow sm:min-h-0 sm:p-8 md:p-10 lg:p-12 xl:p-14">
      <div className="flex flex-col items-center justify-end md:flex-row-reverse md:items-baseline md:justify-between md:gap-10">
        <div>
          <Image
            src="/logo.png"
            alt="Map showing service region of Downtown Oakland."
            width={200}
            height={100}
          />
          <div className='max-w-[200px] flex items-center justify-between'>
            <p className='font-bold text-primary'>English</p>
            <button className={`relative border-0 rounded-full cursor-pointer w-8 h-5 appearance-none ${isSpanish ? 'bg-green-500' : 'bg-red-500'}`} onClick={() => setIsSpanish(!isSpanish)}>
              <span className={`absolute bg-white rounded-full w-4 h-4 top-0.5 transition-all duration-500 ease-in-out ${isSpanish ? 'left-3.5'  : 'left-0.5'}`} />
            </button>
            <p className='font-bold text-primary'>Español</p>
          </div>

        </div>

      
        <h1 className="mb-4 text-center font-heading text-3xl text-primary md:text-4xl">
          East Oakland is #Here2Stay
        </h1>
        
        
      </div>
      {/* Name */}
      <Formik
        initialValues={
          {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            zip: "",
            contactMethod: undefined,
            communityOwner: undefined,
            appointment: undefined,
            inRegion: undefined,
            language: "",
            referralSource: undefined,
            interests: ["orientation"] as Interest[],
            urgent: undefined,
            notes: "",
            isSpanish: true,
          } as FormData
        }
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, errors, touched }) => {
          // handle checkbox change
          function handleCheckboxChange(
            e: React.ChangeEvent<HTMLInputElement>
          ) {
            const checked = e.target.checked;
            const newInterest = e.target.id as Interest;

            let newInterests = checked
              ? [...values.interests, newInterest]
              : values.interests.filter((key) => key !== newInterest);

            setFieldValue("interests", newInterests);
          }

          const errorClass = "text-red-500";

          return (
            <Form>
              {pageNo === 1 ? (
                <>
                  <div className="mb-4 flex flex-col gap-4 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label htmlFor="firstName" className="mb-1 block text-lg">
                        {isSpanish? "Nombre": "First Name"}:
                      </label>
                      <Field
                        type="text"
                        id="firstName"
                        name="firstName"
                        className={`w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none ${
                          errors.firstName && touched.firstName
                            ? errorClass
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        name="firstName"
                        render={message => (
                          <div className={errorClass}>
                            {isSpanish ? "Por favor, pon tu nombre" : message}
                          </div>
                        )}
                      />
                    </div>{" "}
                    <div className="w-full sm:w-1/2">
                      <label htmlFor="lastName" className="mb-1 block text-lg">
                        {isSpanish? "Apellido": "Last Name"}:
                      </label>
                      <Field
                        type="text"
                        id="lastName"
                        name="lastName"
                        className={`w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none ${
                          errors.lastName && touched.lastName ? errorClass : ""
                        }`}
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className={errorClass}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <h6 className="mb-4 text-primary">{isSpanish? <>Si no tienes email, usa: <span className='italic'>here2stay@ebprec.org</span> e indica el número de teléfono que más te convenga.</> : <>If you don't have an email please use <span className='italic'>here2stay@ebprec.org</span> & provide a phone number that is best to you.</>}</h6>
                    <label htmlFor="email" className="mb-1 block text-lg">
                      {isSpanish? "Email (Correo electrónico)": "Email"}:
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none ${
                        errors.email && touched.email ? errorClass : ""
                      }`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={errorClass}
                    />
                  </div>

                  {/* Phone */}
                  <div className="mb-4">
                    <h6></h6>
                    <label htmlFor="phone" className="mb-1 block text-lg">
                      {isSpanish? "Teléfono": "Phone Number"}:
                    </label>
                    <Field
                      type="text"
                      id="phone"
                      name="phone"
                      className={`w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none ${
                        errors.phone && touched.phone ? errorClass : ""
                      }`}
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className={errorClass}
                    />
                  </div>

                  {/* Zip Code */}
                  <div className="mb-4">
                    <label htmlFor="zip" className="mb-1 block text-lg">
                      {isSpanish? "Código postal": "Zip Code"}:
                    </label>
                    <div className="flex gap-4">
                      <Field
                        as="select"
                        id="zip"
                        name="zip"
                        className={`rounded border px-3 py-2 focus:border-blue-500 focus:outline-none ${
                          errors.zip && touched.zip ? errorClass : ""
                        }`}
                      >
                        <option value="">{isSpanish? "Selecciona un código postal" : "Select a Zip Code"}</option>
                        {zipCodes.map((zip) => (
                          <option key={zip} value={zip}>
                            {isSpanish && zip === "Other"? "Otro": zip}        
                          </option>
                        ))}
                      </Field>
                      {values.zip === "Other" && (
                        <Field
                          type="text"
                          id="otherZip"
                          name="otherZip"
                          className={`w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none ${
                            errors.zip && touched.zip ? errorClass : ""
                          }`}
                        />
                      )}
                    </div>
                    <ErrorMessage
                      name="zip"
                      component="div"
                      className={errorClass}
                    />
                    <ErrorMessage
                      name="otherZip"
                      component="div"
                      className={errorClass}
                    />
                  </div>

                  {/* Urgent Needs */}
                  <div className="mb-4">
                    <label htmlFor="urgent" className="mb-1 block text-lg">
                      {isSpanish? "¿Estás en riesgo de perder tu casa o negocio en Deep East Oakland?" :"Are you at risk of losing your home or business in Deep East Oakland?"}
                    </label>
                    <Field
                      as="select"
                      id="urgent"
                      name="urgent"
                      className={`w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none ${
                        errors.urgent && touched.urgent ? errorClass : ""
                      }`}
                    >
                      <option value="">{isSpanish?"Elige tu respuesta" :"Make your selection"}</option>
                      <option value="Yes">{isSpanish? "Sí" : "Yes"}</option>
                      <option value="No">No</option>
                    </Field>
                    <ErrorMessage
                      name="urgent"
                      component="div"
                      className={errorClass}
                    />
                  </div>

                  {/* Referral Source */}
                  <div className="mb-4">
                    <label
                      htmlFor="referralSource"
                      className="mb-1 block text-lg"
                    >
                      {isSpanish ? "¿Cómo te enteraste sobre nosotros?" : "Where did you hear about us?"}
                    </label>
                    <Field
                      as="select"
                      id="referralSource"
                      name="referralSource"
                      className={`w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none ${
                        errors.referralSource && touched.referralSource
                          ? errorClass
                          : ""
                      }`}
                    >
                      <option value="">{isSpanish ? "Seleccionar fuente":"Select source"}</option>
                      {Object.keys(referralSources).map((key) => (
                        <option key={key} value={key}>
                          {isSpanish ? referralSourcesInSpanish[key as referralSource]:referralSources[key as referralSource]}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="referralSource"
                      component="div"
                      className={errorClass}
                    />
                  </div>
                </>
              ) : pageNo === 2 ? (
                <>
                  {/* Contact Method */}
                  <div className="mb-4">
                    <label
                      htmlFor="contactMethod"
                      className="mb-1 block text-lg"
                    >
                      {isSpanish ? "¿Cuál es la mejor forma de contactarte?":"What's the best way to reach you"}:
                    </label>
                    <Field
                      as="select"
                      id="contactMethod"
                      name="contactMethod"
                      className={`w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none ${
                        errors.contactMethod && touched.contactMethod
                          ? errorClass
                          : ""
                      }`}
                    >
                      <option value="">{isSpanish ? "Selecciona un método":"Select a method"}</option>
                      <option value="phone">{isSpanish ? "Teléfono" :"Phone"}</option>
                      <option value="email">{isSpanish ? "Email (Correo electrónico)": "Email"}</option>
                    </Field>
                    <ErrorMessage
                      name="contactMethod"
                      component="div"
                      className={errorClass}
                    />
                  </div>

                  {/* Language */}
                  <div className="mb-4">
                    <label htmlFor="language" className="mb-1 block text-lg">
                      {isSpanish ? "Idioma preferido":"Preferred Language"}:
                    </label>
                    <Field
                      as="select"
                      id="language"
                      name="language"
                      className={`w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none ${
                        errors.language && touched.language ? errorClass : ""
                      }`}
                    >
                      <option value="">{isSpanish ? "Selecciona idioma":"Select language"}</option>
                      {languages.map((language) => (
                        <option key={language} value={language}>
                          {language}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="language"
                      component="div"
                      className={errorClass}
                    />
                  </div>

                  {/* Community Ownership */}
                  <div className="mb-4">
                    <label
                      htmlFor="communityOwner"
                      className="mb-1 block text-lg"
                    >
                      {isSpanish ? "¿Te has vuelto dueño comunitario con EB PREC?":"Have you become a community owner with EB PREC?"}
                    </label>
                    <Field
                      as="select"
                      id="communityOwner"
                      name="communityOwner"
                      className={`w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none ${
                        errors.communityOwner && touched.communityOwner
                          ? errorClass
                          : ""
                      }`}
                    >
                      <option value="">{isSpanish ? "Elige tu respuesta":"Make your selection"}</option>
                      <option value="Yes">{isSpanish ? "Sí":"Yes"}</option>
                      <option value="No">No</option>
                    </Field>
                    <ErrorMessage
                      name="communityOwner"
                      component="div"
                      className={errorClass}
                    />
                  </div>

                  {/* Appointment Request */}
                  <div className="mb-4">
                    <label htmlFor="appointment" className="mb-1 block text-lg">
                      {isSpanish ? "¿Quieres solicitar una cita?":"Do you want to request an appointment?"}
                    </label>
                    <Field
                      as="select"
                      id="appointment"
                      name="appointment"
                      className={`w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none ${
                        errors.appointment && touched.appointment
                          ? errorClass
                          : ""
                      }`}
                    >
                      <option value="">{isSpanish ? "Elige tu respuesta":"Make your selection"}</option>
                      <option value="Yes">{isSpanish ? "Sí":"Yes"}</option>
                      <option value="No">No</option>
                    </Field>
                    <ErrorMessage
                      name="appointment"
                      component="div"
                      className={errorClass}
                    />
                  </div>

                  {/* Service Region */}
                  <div className="mb-4">
                    <label htmlFor="inRegion" className="mt-1 block text-lg">
                      {isSpanish ? "¿Vives en la región que se muestra a continuación?":"Do you live in the region pictured below?"}
                    </label>
                    <div className="relative">
                      <Image
                        src="/service_region.png"
                        alt="Map showing service region of Downtown Oakland."
                        width={800}
                        height={600}
                      />
                    </div>
                    <Field
                      as="select"
                      id="inRegion"
                      name="inRegion"
                      className={`w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none ${
                        errors.inRegion && touched.inRegion ? errorClass : ""
                      }`}
                    >
                      <option value="">{isSpanish ? "Elige tu respuesta":"Make your selection"}</option>
                      <option value="Yes">{isSpanish ? "Sí":"Yes"}</option>
                      <option value="No">No</option>
                    </Field>
                    <ErrorMessage
                      name="inRegion"
                      component="div"
                      className={errorClass}
                    />
                  </div>
                </>
              ) : pageNo === 3 ? (
                <>
                  {/* Interests */}
                  <div className="mb-4">
                    <p className="mb-1 text-lg">
                      {isSpanish ? "¿Necesitas ayuda con / o estás interesado/a en:" : "Do you need support with/are you interested in:"}
                    </p>
                    <ErrorMessage
                      name="interests"
                      component="div"
                      className={errorClass}
                    />
                    {Object.entries(InterestGrouping).map(([key, arr]) => (
                      <>
                        <h3
                          key={key}
                          className="font-heading text-xl text-primary"
                        >
                          {getTranslation(isSpanish, key)}
                        </h3>
                        {arr.map((interest) => (
                          <label
                            htmlFor={interest}
                            className="mb-2 flex items-center"
                            key={interest}
                          >
                            <Field
                              type="checkbox"
                              id={interest}
                              name="interests"
                              value={interest}
                              className="mr-2 h-[13px] w-[13px]"
                              onChange={handleCheckboxChange}
                            />
                            {isSpanish ? interestTextInSpanish[interest]:interestText[interest]}
                          </label>
                        ))}
                      </>
                    ))}
                  </div>

                  {/* Google Calender */}
                  <div className="mb-4 flex">
                    <p className="mb-1 block text-lg">
                      {isSpanish ? "Mira nuestros próximos eventos":"Check out our upcoming events"} →
                    </p>
                    <button type="button"
                      className="float-right ml-auto w-1/3 max-w-md rounded-lg bg-primary px-2 py-2 text-white focus:outline-none"
                      onClick={() => {
                        window.open("https://calendar.google.com/calendar/u/0/embed?src=7317b23222c5e09645c10db1b4d5eb3123f78b640bc135c1d8526a99a678b2b9@group.calendar.google.com&ctz=America/Los_Angeles", '_blank');
                      }}>{isSpanish ? "Ver calendario":"View Calendar"}</button>
                  </div>
                  {/* Open Response Notes */}
                  <div className="mb-4">
                    <label htmlFor="notes" className="mb-1 block text-lg">
                      {isSpanish ? "¿Algo más que quieres compartir?":"Anything else you'd like us to know?"}
                    </label>
                    <Field
                      as="textarea"
                      id="notes"
                      name="notes"
                      className="w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </>
              ) : null}

              {pageNo === 3 && (
                <>
                  <div className="mx-auto mb-4 max-w-md text-center">
                    {/* Error Message */}
                    {((touched.firstName && errors.firstName) ||
                      (touched.email && errors.email) ||
                      (touched.phone && errors.phone) ||
                      (touched.referralSource && errors.referralSource) ||
                      (touched.urgent && errors.urgent)) && (
                      <p className={`${errorClass} mx-auto`}>
                        {isSpanish ? "Por favor, responde a todas las preguntas." : "Please fill out all the fields."}
                      </p>
                    )}
                  </div>
                  <div className="mb-4 flex justify-between">
                    {/* Buttons */}

                    {/* Back Button */}
                    <button
                      type="button"
                      className=" float-left w-1/3 max-w-md rounded-lg bg-primary px-2 py-2 text-white focus:outline-none"
                      onClick={() => {
                        setPageNo(Math.max(pageNo - 1, 1));
                      }}
                    >
                      {isSpanish ? "Volver" : "Back"}
                    </button>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="ml-auto w-1/3 max-w-md rounded-lg bg-primary px-2 py-2 text-white focus:outline-none"
                    >
                      {isLoading ? (
                        <FaSpinner className="mx-auto animate-spin" />
                      ) : (
                        isSpanish ? "Enviar":"Submit"
                      )}
                    </button>
                  </div>
                </>
              )}
              <div className="mb-4 flex justify-between">
                {pageNo === 2 && (
                  <button
                    type="button"
                    className=" float-left w-1/3 max-w-md rounded-lg bg-primary px-2 py-2 text-white focus:outline-none"
                    onClick={() => {
                      setPageNo(Math.max(pageNo - 1, 1));
                    }}
                  >
                    {isSpanish ? "Volver" : "Back"}
                  </button>
                )}

                {pageNo === 2 && (
                  <button
                    type="button"
                    className="ml-auto w-1/3 max-w-md rounded-lg bg-primary px-2 py-2 text-white focus:outline-none"
                    onClick={() => {
                      setPageNo(Math.min(pageNo + 1, 3));
                    }}
                  >
                    {isSpanish? "Siguiente" : "Next"}
                  </button>
                )}
              </div>
              {pageNo === 1 && (
                <>
                 <div className="mx-auto mb-4 max-w-md text-center">
                 {/* Error Message */}
                 {((!touched.firstName || errors.firstName
                   || !touched.email || errors.email
                   || !touched.phone || errors.phone
                   || !touched.zip || errors.zip
                   || !touched.referralSource || errors.referralSource
                   || !touched.urgent || errors.urgent) && (
                   <p className={`${errorClass} mx-auto`}>
                      {isSpanish ? "Por favor, responde a todas las preguntas." : "Please fill out all the fields."}
                   </p>
                 ))}
               </div>
                  <button
                    type="button"
                    className="float-right w-1/3 max-w-md rounded-lg bg-primary px-2 py-2 text-white focus:outline-none"
                    onClick={() => {
                      if(touched.firstName && !errors.firstName
                         && touched.email && !errors.email
                         && touched.phone && !errors.phone
                         && touched.zip && !errors.zip
                         && touched.referralSource && !errors.referralSource
                         && touched.urgent && !errors.urgent){
                        setPageNo(Math.min(pageNo + 1, 3));
                      }
                    }
                    }>
                     {isSpanish? "Siguiente" : "Next"}
                  </button>
                  </>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default WebForm;