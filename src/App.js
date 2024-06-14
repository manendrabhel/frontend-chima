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

  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (section, field, value) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const payload = {
        "test":false,
        "input" : [{
            "scriptText": "Hello, World! This is my first synthetic video, made with the Synthesia API!",
            "avatar": "anna_costume1_cameraA",
            "background": "green_screen",
        }],
      avatar: 'anna_costume1_cameraA', 
      background: 'green_screen',
      length: 15, // Maximum video length of 15 seconds
    };

    try {
      const response = await fetch('https://api.synthesia.io/v2/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `746ee48b3c0121d39170d3c01757066e` // Replace with your actual API key
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log(response);
      const data = await response.json();
      console.log('--------------------------------------------------------');
      console.log(data);
      const videoId = data.id; // Assuming the response contains the video ID
      pollVideoStatus(videoId); // Start polling for video status
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const pollVideoStatus = async (videoId) => {
    const intervalId = setInterval(async () => {
      try {
        const response = await fetch(`https://api.synthesia.io/v2/videos/${videoId}`, {
          method: 'GET',
          headers: {
            'Authorization': `746ee48b3c0121d39170d3c01757066e`, // Replace with your actual API key
            'Accept':'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        console.log('--------------------------------------------------------Retriece data---------------------');
        console.log(response);
        console.log('--------------------------------------------------------');
        console.log(data);

        const data = await response.json();

        console.log('--------------------------------------------------------');
        console.log(data);
        if (data.status === 'complete') {
          setVideoUrl(data.downloadUrl); // Assuming the response contains the download URL
          clearInterval(intervalId);
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        clearInterval(intervalId);
        setLoading(false);
      }
    }, 5000); // Poll every 5 seconds
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
          <button type="submit" disabled={loading}>
            {loading ? 'Generating Video...' : 'Submit'}
          </button>
        </form>
        {error && <div className="error">{error}</div>}
        {videoUrl && (
          <div className="video-container">
            <h2>Generated Video</h2>
            <video controls>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <a href={videoUrl} download="generated_video.mp4">
              Download Video
            </a>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
