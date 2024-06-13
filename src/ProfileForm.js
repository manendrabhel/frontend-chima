import React, { useState } from 'react';

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Profile Submitted:', profile);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Profile Information</h2>
      <label>
        Name:
        <input type="text" name="name" value={profile.name} onChange={handleChange} required />
      </label>
      <label>
        Age:
        <input type="number" name="age" value={profile.age} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={profile.email} onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;
