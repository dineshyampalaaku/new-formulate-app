import React, { useState, useEffect } from 'react';

function ViewForm() {
  const [formFields, setFormFields] = useState([]);
  const [responses, setResponses] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedForm = localStorage.getItem('publishedForm');
    if (storedForm) {
      setFormFields(JSON.parse(storedForm));
    }
  }, []);

  const handleChange = (e, label, type) => {
    const value = type === 'checkbox' ? e.target.checked : e.target.value;
    setResponses({
      ...responses,
      [label]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (document.cookie.includes('submitted=true')) {
      alert('⚠️ You have already submitted!');
      return;
    }

    const existingResponses = JSON.parse(localStorage.getItem('responses')) || [];
    existingResponses.push(responses);
    localStorage.setItem('responses', JSON.stringify(existingResponses));
    document.cookie = `submitted=true; max-age=86400`; // 1 day block

    alert('✅ Response submitted successfully!');
    setResponses({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          backgroundColor: 'black',
          color: 'white',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h2>🎉 Thank you for your submission!</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: 'black',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {formFields.length === 0 ? (
        <h2 style={{ color: '#f97316' }}>🚫 No form published yet</h2>
      ) : (
        <>
          <h2 style={{ color: '#10b981' }}>📌 Your form is published successfully!</h2>
          <p style={{ marginBottom: '20px', fontStyle: 'italic' }}>Please fill and submit your response below.</p>
          <form onSubmit={handleSubmit} style={{ maxWidth: '600px', width: '100%' }}>
            {formFields.map((field, idx) => (
              <div key={idx} style={{ marginBottom: '15px' }}>
                <label style={{ fontWeight: 'bold' }}>
                  {field.label}
                  {field.required && ' *'}
                </label>
                <br />
                {field.type === 'text' && (
                  <input
                    type="text"
                    required={field.required}
                    value={responses[field.label] || ''}
                    onChange={(e) => handleChange(e, field.label)}
                    style={{ width: '100%', padding: '8px' }}
                  />
                )}
                {field.type === 'email' && (
                  <input
                    type="email"
                    required={field.required}
                    value={responses[field.label] || ''}
                    onChange={(e) => handleChange(e, field.label)}
                    style={{ width: '100%', padding: '8px' }}
                  />
                )}
                {field.type === 'number' && (
                  <input
                    type="number"
                    required={field.required}
                    value={responses[field.label] || ''}
                    onChange={(e) => handleChange(e, field.label)}
                    style={{ width: '100%', padding: '8px' }}
                  />
                )}
                {field.type === 'dropdown' && (
                  <select
                    required={field.required}
                    value={responses[field.label] || ''}
                    onChange={(e) => handleChange(e, field.label)}
                    style={{ width: '100%', padding: '8px' }}
                  >
                    <option value="">Select an option</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                )}
                {field.type === 'checkbox' && (
                  <input
                    type="checkbox"
                    checked={responses[field.label] || false}
                    onChange={(e) => handleChange(e, field.label, 'checkbox')}
                  />
                )}
                {field.type === 'rating' && (
                  <input
                    type="number"
                    min="1"
                    max="5"
                    required={field.required}
                    value={responses[field.label] || ''}
                    onChange={(e) => handleChange(e, field.label)}
                    style={{ width: '100%', padding: '8px' }}
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#10b981',
                color: 'white',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '5px',
                marginTop: '10px',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default ViewForm;
