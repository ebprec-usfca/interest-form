import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { languages, referralSources, type Interest, InterestGrouping, interestText, referralSource } from './Constants';

import * as Yup from 'yup';

import { type FormPayload } from '../pages/api/form';
import { type WithResponseProps } from '../pages/index';
import Image from 'next/image';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  language: string;
  referralSource: referralSource | '';
  interests: Interest[];
  phone: string;
  zip: string;
  contactMethod: 'phone' | 'email';
  communityOwner: boolean;
  inRegion: boolean;
};

// schema for Yup validation on form submission
const validationSchema = Yup.object({
  firstName: Yup.string().required('Please enter your first name'),
  lastName: Yup.string().required('Please enter your last name'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  language: Yup.string().required('Language is required'),
  referralSource: Yup.string().required('Referral source is required'),
  interests: Yup.array().min(1, 'At least one interest is required'),
  phone: Yup.string().required('Phone number is required'),
  zip: Yup.string().required('Zip code is required'),
  contactMethod: Yup.string().required('Contact method is required'),
  communityOwner: Yup.boolean().required('Community ownership specification is required'),
  inRegion: Yup.boolean().required('Please specify if you are in the region'),
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
             firstName: '',
             lastName: '',
             email: '',
             language: '',
             referralSource: '',
             interests: [] as Interest[],
           } as FormData}
           validationSchema={validationSchema}
           onSubmit={handleSubmit}
         >
           {({ values, setFieldValue, errors, touched }) => {
             // handle checkbox change
             function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
               const checked = e.target.checked;
               const newInterest = e.target.id as Interest;
               console.log(checked, newInterest)

               let newInterests = checked
                 ? [...values.interests, newInterest]
                 : values.interests.filter((key) => key !== newInterest);
    
               setFieldValue('interests', newInterests);
             }
    
             const errorClass = 'text-red-500';
    
             return (
               <Form>
                 {/* Name */}
                 <div className="mb-4 flex flex-col gap-4 sm:flex-row">
                   <div className="w-1/2">
                     <label htmlFor="firstName" className="block mb-1 text-lg">First Name:</label>
                     <Field
                       type="text"
                       id="firstName"
                       name="firstName"
                       className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 ${
                         errors.firstName && touched.firstName ? errorClass : ''
                       }`}
                     />
                     <ErrorMessage name="firstName" component="div" className={errorClass} />
                   </div>
                   <div className='w-1/2'>
                     <label htmlFor="lastName" className="block mb-1 text-lg">Last Name:</label>
                     <Field
                       type="text"
                       id="lastName"
                       name="lastName"
                       className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 ${
                         errors.lastName && touched.lastName ? errorClass : ''
                       }`}
                     />
                     <ErrorMessage name="lastName" component="div" className={errorClass} />
                   </div>
                 </div>
    
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
    
                 {/* Phone */}
                 <div className="mb-4">
                   <label htmlFor="phone" className="block mb-1 text-lg">Phone Number:</label>
                   <Field
                     type="text"
                     id="phone"
                     name="phone"
                     className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 ${
                       errors.phone && touched.phone ? errorClass : ''
                     }`}
                   />
                   <ErrorMessage name="phone" component="div" className={errorClass} />
                 </div>
    
                 {/* Zip Code */}
                 <div className="mb-4">
                   <label htmlFor="zip" className="block mb-1 text-lg">Zip Code:</label>
                   <Field
                     type="text"
                     id="zip"
                     name="zip"
                     className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 ${
                       errors.zip && touched.zip ? errorClass : ''
                     }`}
                   />
                   <ErrorMessage name="zip" component="div" className={errorClass} />
                 </div>
    
                 {/* Contact Method */}
                 <div className="mb-4">
                   <label htmlFor="contactMethod" className="block mb-1 text-lg">What's the best way to reach you:</label>
                   <Field
                     as="select"
                     id="contactMethod"
                     name="contactMethod"
                     className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 ${
                       errors.contactMethod && touched.contactMethod ? errorClass : ''
                     }`}
                   >
                     <option value="">Select a method</option>
                     <option value="phone">Phone</option>
                     <option value="email">Email</option>
                   </Field>
                   <ErrorMessage name="contactMethod" component="div" className={errorClass} />
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
    
                 {/* Community Ownership */}
                 <div className="mb-4">
                   <label htmlFor="communityOwner" className="block mb-1 text-lg">Have you become a community owner with EB PREC?</label>
                   <Field
                     as="select"
                     id="communityOwner"
                     name="communityOwner"
                     className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 ${
                       errors.communityOwner && touched.communityOwner ? errorClass : ''
                     }`}
                   >
                     <option value="">Make your selection</option>
                     <option value="true">Yes</option>
                     <option value="false">No</option>
                   </Field>
                   <ErrorMessage name="communityOwner" component="div" className={errorClass} />
                 </div>
    
                 {/* Service Region */}
                 <div className="mb-4">
                   <label htmlFor="inRegion" className="block mt-1 text-lg">Do you live in the region pictured below?</label>
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
                     className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 ${
                       errors.inRegion && touched.inRegion ? errorClass : ''
                     }`}
                   >
                     <option value="">Make your selection</option>
                     <option value="true">Yes</option>
                     <option value="false">No</option>
                   </Field>
                   <ErrorMessage name="inRegion" component="div" className={errorClass} />
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
                   <p className="mb-1 text-lg">Do you need support with/are you interested in:</p>
                   <ErrorMessage name="interests" component="div" className={errorClass} />
                   {Object.entries(InterestGrouping).map(([key, arr]) => (
                     <>
                       <h3 key={key} className="text-lg font-bold">{key}</h3>
                       {arr.map((interest) => (
                         <label htmlFor={interest} className="flex items-center mb-2" key={interest}>
                           <Field
                             type="checkbox"
                             id={interest}
                             name="interests"
                             value={interest}
                             className="mr-2"
                             onChange={handleCheckboxChange}
                           />
                           {interestText[interest]}
                         </label>
                         ))}
                     </>
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
