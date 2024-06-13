import React from 'react';
import './App.css';
import ProfileForm from './ProfileForm';
import CompanyForm from './CompanyForm';
import ProductForm from './ProductForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Information Input Forms</h1>
      </header>
      <main>
        <div className="form-container">
          <ProfileForm />
          <CompanyForm />
          <ProductForm />
        </div>
      </main>
    </div>
  );
}

export default App;
