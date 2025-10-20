/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {
  UserIcon,
  EnvelopeIcon,
  CalendarIcon,
  IdentificationIcon,
  BriefcaseIcon,
  GiftIcon
} from '@heroicons/react/24/solid';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { parsePhoneNumberWithError } from 'libphonenumber-js';


export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    dob: '', maritalStatus: '', passport: '', package: '',
    message: '', consent1: false, consent2: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email address';

    try {
      const phone = parsePhoneNumberWithError('+' + formData.phone);
      if (!phone.isValid()) {
        newErrors.phone = 'Invalid phone number';
      }
    } catch (error) {
      newErrors.phone = 'Invalid phone number format';
    }

    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.maritalStatus) newErrors.maritalStatus = 'Select marital status';
    if (!formData.passport) newErrors.passport = 'Select passport status';
    if (!formData.package) newErrors.package = 'Select a package';

    return newErrors;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    try {
      const res = await fetch('http://localhost/cruise-landing-page/backend/sendMail.php', {
        method: 'POST',
        body: data,
      });
      const result = await res.json();
      alert(result.success ? 'Submitted successfully!' : 'Submission failed.');
    } catch (error) {
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <section id="enquiry" className="pt-0 pb-16 px-4 bg-transparent">
      <form
        onSubmit={handleSubmit}
        className="bg-white/40 backdrop-blur-md text-black p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto border border-white/30"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="First Name *"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            icon={<UserIcon className="h-5 w-5 text-gray-300" />}
            error={errors.firstName}
          />

          <InputField
            label="Last Name *"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            icon={<UserIcon className="h-5 w-5 text-gray-300" />}
            error={errors.lastName}
          />

          <InputField
            label="Your Email *"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            icon={<EnvelopeIcon className="h-5 w-5 text-gray-300" />}
            error={errors.email}
          />

          <div>
            <label className="block text-sm mb-1 text-white">Phone Number *</label>
            <div className={`rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-300'} bg-white`}>
              <PhoneInput
                country={'in'}
                value={formData.phone}
                onChange={value => setFormData(prev => ({ ...prev, phone: value }))}
                inputProps={{ name: 'phone', required: true }}
                containerClass="w-full"
                inputClass="!bg-transparent !text-black !border-none !w-full !pl-14 !py-2 focus:!outline-none"
                buttonClass="!bg-transparent !border-none"
                dropdownClass="!bg-white !text-black"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <InputField
            label="Date of Birth *"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            icon={<CalendarIcon className="h-5 w-5 text-gray-300" />}
            error={errors.dob}
          />

          <SelectField
            label="Marital Status *"
            name="maritalStatus"
            options={['Single', 'Married']}
            value={formData.maritalStatus}
            onChange={handleChange}
            error={errors.maritalStatus}
            icon={<IdentificationIcon className="h-5 w-5 text-gray-300" />}
          />

          <SelectField
            label="Do you have a passport? *"
            name="passport"
            options={['Yes', 'No']}
            value={formData.passport}
            onChange={handleChange}
            error={errors.passport}
            icon={<BriefcaseIcon className="h-5 w-5 text-gray-300" />}
          />

          <SelectField
            label="Package Option *"
            name="package"
            options={['4 Nights', '7 Nights']}
            value={formData.package}
            onChange={handleChange}
            error={errors.package}
            icon={<GiftIcon className="h-5 w-5 text-gray-300" />}
          />

        </div>

        <div className="col-span-1 md:col-span-2 mt-4">
          <label className="block text-sm mb-1 text-white">Message / Note</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Optional message..."
            className="bg-white text-black border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-yellow-300 border-gray-300"
          />
        </div>

        <div className="mt-4 space-y-2">
          {[
            {
              name: 'consent1',
              text: 'I am aware Karma Experience/Karma Group trained brands to provide a unique experience onboard Karma Majestic during and post the cruise journey and I am happy to be contacted.'
            },
            {
              name: 'consent2',
              text: 'Should you require a designated DND subscriber, Karma Group will be happy to assist to connect you with a cruise specialist.'
            }
          ].map(({ name, text }) => (
            <label key={name} className="flex items-start text-sm text-white">
              <input
                type="checkbox"
                name={name}
                checked={formData[name]}
                onChange={handleChange}
                className="mr-2 mt-1 accent-yellow-500"
              />
              <span>{text}</span>
            </label>
          ))}
        </div>

        <div className="mt-6 text-left">
          <button
            type="submit"
            className="bg-[#543417] hover:bg-yellow-300 hover:text-gray-800 text-white px-6 py-2 rounded font-semibold transition duration-200"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </section>
  );
}

const InputField = ({ label, name, type, value, onChange, icon, error }) => (
  <div>
    <label className="block text-sm mb-1 text-white">{label}</label>
    <div className="relative">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">{icon}</div>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`pl-10 bg-white text-black border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-yellow-300 ${error ? 'border-red-500' : 'border-gray-300'
          }`}
      />
    </div>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const SelectField = ({ label, name, options, value, onChange, error, icon }) => (
  <div>
    <label className="block text-sm mb-1 text-white">{label}</label>
    <div className="relative">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        {icon}
      </div>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`pl-10 bg-white text-black border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-yellow-300 ${error ? 'border-red-500' : 'border-gray-300'
          }`}
      >
        <option value="">Select</option>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);
