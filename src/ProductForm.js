import React, { useState } from 'react';

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Product Submitted:', product);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Product Information</h2>
      <label>
        Name:
        <input type="text" name="name" value={product.name} onChange={handleChange} required />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={product.price} onChange={handleChange} required />
      </label>
      <label>
        Description:
        <textarea name="description" value={product.description} onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
