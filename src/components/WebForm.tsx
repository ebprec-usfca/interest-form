import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { languages, referralSources, type Interest, InterestGrouping, interestText, referralSource, zipCodes } from '~/constants/Constants';

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
};

// schema for Yup validation on form submission
const validationSchema = Yup.object({
  firstName: Yup.string().required('Please enter your first name'),
  lastName: Yup.string(),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  language: Yup.string(),
  referralSource: Yup.string().required('Referral source is required'),
  interests: Yup.array().min(1, 'At least one interest is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits'),
  zip: Yup.string()
    .required('Zip code is required'),
  otherZip: Yup.string()
    .when('zip', {
      is: (zip: string) => zip === 'Other',
      then: (schema) => schema.matches(/^[0-9]+$/, "Must be only digits")
        .length(5, 'Must be exactly 5 digits'),
      otherwise: (schema) => schema.notRequired(),
    }),
  contactMethod: Yup.string(),
  communityOwner: Yup.string(),
  appointment: Yup.string(),
  inRegion: Yup.string(),
  urgent: Yup.string().min(1).required('Please specify if you have urgent needs'),
});

const WebForm: React.FC<WithResponseProps> = ({ setResponse }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [pageNo, setPageNo] = React.useState(1);

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
        <Image
          src="/logo.png"
          alt="Map showing service region of Downtown Oakland."
          width={200}
          height={100}
        />
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
              {/* TEST */}
              {pageNo === 1 ? (
                <>
                  <div className="mb-4 flex flex-col gap-4 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label htmlFor="firstName" className="mb-1 block text-lg">
                        First Name:
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
                        component="div"
                        className={errorClass}
                      />
                    </div>{" "}
                    <div className="w-full sm:w-1/2">
                      <label htmlFor="lastName" className="mb-1 block text-lg">
                        Last Name:
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
                    <label htmlFor="email" className="mb-1 block text-lg">
                      Email:
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
                    <label htmlFor="phone" className="mb-1 block text-lg">
                      Phone Number:
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
                      Zip Code:
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
                        <option value="">Select a Zip Code</option>
                        {zipCodes.map((zip) => (
                          <option key={zip} value={zip}>
                            {zip}
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
                      Are you at risk of losing your home or business in Deep
                      East Oakland?
                    </label>
                    <Field
                      as="select"
                      id="urgent"
                      name="urgent"
                      className={`w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none ${
                        errors.urgent && touched.urgent ? errorClass : ""
                      }`}
                    >
                      <option value="">Make your selection</option>
                      <option value="Yes">Yes</option>
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
                      Where did you hear about us?
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
                      <option value="">Select source</option>
                      {Object.keys(referralSources).map((key) => (
                        <option key={key} value={key}>
                          {referralSources[key as referralSource]}
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
                      What's the best way to reach you:
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
                      <option value="">Select a method</option>
                      <option value="phone">Phone</option>
                      <option value="email">Email</option>
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
                      Preferred Language:
                    </label>
                    <Field
                      as="select"
                      id="language"
                      name="language"
                      className={`w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none ${
                        errors.language && touched.language ? errorClass : ""
                      }`}
                    >
                      <option value="">Select language</option>
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
                      Have you become a community owner with EB PREC?
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
                      <option value="">Make your selection</option>
                      <option value="Yes">Yes</option>
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
                      Do you want to request an appointment?
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
                      <option value="">Make your selection</option>
                      <option value="Yes">Yes</option>
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
                      Do you live in the region pictured below?
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
                      <option value="">Make your selection</option>
                      <option value="Yes">Yes</option>
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
                      Do you need support with/are you interested in:
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
                          {key}
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
                            {interestText[interest]}
                          </label>
                        ))}
                      </>
                    ))}
                  </div>

                  {/* Google Calender */}
                  <div className="mb-4">
                    <p className="mb-1 block text-lg">
                      Check out our upcoming events!!!
                    </p>
                    <div className="relative" style={{ paddingBottom: "75%" }}>
                      <iframe
                        src="https://calendar.google.com/calendar/u/0/embed?src=7317b23222c5e09645c10db1b4d5eb3123f78b640bc135c1d8526a99a678b2b9@group.calendar.google.com&ctz=America/Los_Angeles"
                        className="absolute left-0 top-0 h-full w-full"
                        frameBorder="0"
                        scrolling="no"
                      ></iframe>
                    </div>
                  </div>

                  {/* Open Response Notes */}
                  <div className="mb-4">
                    <label htmlFor="notes" className="mb-1 block text-lg">
                      Anything else you'd like us to know?
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
                        Please fill out ALL fields on First Page..
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
                      Back
                    </button>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="ml-auto w-1/3 max-w-md rounded-lg bg-primary px-2 py-2 text-white focus:outline-none"
                    >
                      {isLoading ? (
                        <FaSpinner className="mx-auto animate-spin" />
                      ) : (
                        "Submit"
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
                    Back
                  </button>
                )}

                {pageNo !== 3 && (
                  <button
                    type="button"
                    className="ml-auto w-1/3 max-w-md rounded-lg bg-primary px-2 py-2 text-white focus:outline-none"
                    onClick={() => {
                      setPageNo(Math.min(pageNo + 1, 3));
                    }}
                  >
                    Next
                  </button>
                )}
              </div>

              {/* END OF TEST */}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default WebForm;
