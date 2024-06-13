import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    profile: {
      name: '',
      age: '',
      email: '',
    },
    company: {
      name: '',
      address: '',
      phone: '',
    },
    product: {
      name: '',
      price: '',
      description: '',
    },
  });

  const handleChange = (section, field, value) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Combined Information Form</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit} className="form">
          <h2>Profile Information</h2>
          <label>
            Name:
            <input
              type="text"
              name="profileName"
              value={formData.profile.name}
              onChange={(e) => handleChange('profile', 'name', e.target.value)}
              required
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="profileAge"
              value={formData.profile.age}
              onChange={(e) => handleChange('profile', 'age', e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="profileEmail"
              value={formData.profile.email}
              onChange={(e) => handleChange('profile', 'email', e.target.value)}
              required
            />
          </label>

          <h2>Company Information</h2>
          <label>
            Company Name:
            <input
              type="text"
              name="companyName"
              value={formData.company.name}
              onChange={(e) => handleChange('company', 'name', e.target.value)}
              required
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="companyAddress"
              value={formData.company.address}
              onChange={(e) => handleChange('company', 'address', e.target.value)}
              required
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="companyPhone"
              value={formData.company.phone}
              onChange={(e) => handleChange('company', 'phone', e.target.value)}
              required
            />
          </label>

          <h2>Product Information</h2>
          <label>
            Product Name:
            <input
              type="text"
              name="productName"
              value={formData.product.name}
              onChange={(e) => handleChange('product', 'name', e.target.value)}
              required
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="productPrice"
              value={formData.product.price}
              onChange={(e) => handleChange('product', 'price', e.target.value)}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              name="productDescription"
              value={formData.product.description}
              onChange={(e) => handleChange('product', 'description', e.target.value)}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default App;
