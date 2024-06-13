import React, { useState } from 'react';

const CompanyForm = () => {
  const [company, setCompany] = useState({
    name: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany({ ...company, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Company Submitted:', company);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Company Information</h2>
      <label>
        Name:
        <input type="text" name="name" value={company.name} onChange={handleChange} required />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={company.address} onChange={handleChange} required />
      </label>
      <label>
        Phone:
        <input type="text" name="phone" value={company.phone} onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CompanyForm;
