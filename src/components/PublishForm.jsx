// src/components/PublishForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PublishForm = ({ formFields }) => {
  const navigate = useNavigate();
  const [confirmPublish, setConfirmPublish] = useState(false);

  const handlePublishClick = () => {
    // Store the form data to localStorage
    localStorage.setItem('publishedForm', JSON.stringify(formFields));
    setConfirmPublish(true);
  };

  const handleConfirmPublish = () => {
    // Navigate to the ViewForm page after confirming publish
    navigate('/viewform');
  };

  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'white',
        minHeight: '100vh',
        padding: '40px',
        textAlign: 'center',
      }}
    >
      <h2>📢 Confirm Form Publish</h2>
      <button onClick={handlePublishClick}>Publish Form</button>

      {confirmPublish && (
        <div style={{ marginTop: '20px' }}>
          <p>Are you sure you want to publish the form?</p>
          <button onClick={handleConfirmPublish}>Confirm</button>
        </div>
      )}
    </div>
  );
};

export default PublishForm;
