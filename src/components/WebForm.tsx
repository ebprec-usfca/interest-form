import React, { useState } from 'react';
import { type WithResponseProps } from '../pages/index';
import { type FormPayload } from '../pages/api/form';

type FormData = {
  name: string;
  email: string;
  language: string;
  referralSources: Set<string>;
};

const WebForm: React.FC<WithResponseProps> = ({ setResponse }) => {
  const [formData, setFormData] = useState<FormData>({ 
    name: '', 
    email: '',
    language: '',
    referralSources: new Set<string>(),
  });

  // handle a change to an input field in the form
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  // handle a change to the language select field in the form
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        language: value,
      };
    });
  };

  // handle a change to a checkbox in the form. ie. a user checking or unchecking a box
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setFormData((prevData) => {
      let set: Set<string> = new Set<string>([...prevData.referralSources]);
      if(checked) {
        set.add(name);
      } else {
        set.delete(name);
      }

      return {
        ...prevData,
        referralSources: set,
      };
    });
  };


  // handle form submission. This is where we will make our POST request to the server
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const preparedFormData: FormPayload = {
      ...formData,
      referralSources: [...formData.referralSources],
    };
    const payload = JSON.stringify(preparedFormData);

    let res = await fetch('/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload,
    })
  
    // update response state (ok -> thank you, !ok -> error)
    setResponse(res.ok);
  };

return (
  <div className="max-w-xl mx-auto">
    <div className="bg-white border border-gray-300 rounded shadow p-6">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="language" className="block mb-1">Preferred Language:</label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleLanguageChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          >
            <option value="">Select language</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-4">
          <p className="mb-1">Where did you hear about us:</p>
          <label htmlFor="source1" className="flex items-center mb-2">
            <input
              type="checkbox"
              id="source1"
              name="source1"
              checked={formData.referralSources.has("source1")}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Source 1
          </label>
          <label htmlFor="source2" className="flex items-center mb-2">
            <input
              type="checkbox"
              id="source2"
              name="source2"
              checked={formData.referralSources.has("source2")}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Source 2
          </label>
          {/* Add more checkbox options as needed */}
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  </div>
  );
};

export default WebForm;
