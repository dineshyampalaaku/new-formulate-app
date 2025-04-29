// src/components/Field.jsx
import React from 'react';

const Field = ({ field, onLabelChange, onRequiredChange }) => {
  const handleLabelInputChange = (e) => {
    onLabelChange(field.id, e.target.value);
  };

  const handleRequiredChange = (e) => {
    onRequiredChange(field.id, e.target.checked);
  };

  return (
    <div
      style={{
        marginBottom: '20px',
        padding: '15px',
        border: '1px solid #555',
        borderRadius: '8px',
        backgroundColor: '#222',
        color: 'white',
        width: '100%',
      }}
    >
      <div style={{ marginBottom: '10px' }}>
        <label>
          Label:{' '}
          <input
            type="text"
            value={field.label}
            onChange={handleLabelInputChange}
            placeholder="Enter field label"
            style={{
              padding: '5px',
              width: '60%',
              marginLeft: '10px',
              backgroundColor: '#333',
              color: 'white',
              border: '1px solid #666',
              borderRadius: '5px',
            }}
          />
        </label>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>
          Required:{' '}
          <input
            type="checkbox"
            checked={field.required}
            onChange={handleRequiredChange}
            style={{
              transform: 'scale(1.2)',
              marginLeft: '10px',
            }}
          />
        </label>
      </div>

      <div>
        {field.type === 'text' && <input type="text" disabled placeholder="Text Field Preview" style={inputStyle} />}
        {field.type === 'email' && <input type="email" disabled placeholder="Email Field Preview" style={inputStyle} />}
        {field.type === 'number' && <input type="number" disabled placeholder="Number Field Preview" style={inputStyle} />}
        {field.type === 'dropdown' && (
          <select disabled style={inputStyle}>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        )}
        {field.type === 'checkbox' && (
          <div>
            <label style={{ marginRight: '10px' }}>
              <input type="checkbox" disabled /> Option
            </label>
          </div>
        )}
        {field.type === 'rating' && (
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} style={{ fontSize: '20px', marginRight: '5px' }}>⭐</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const inputStyle = {
  padding: '8px',
  width: '100%',
  backgroundColor: '#333',
  color: 'white',
  border: '1px solid #666',
  borderRadius: '5px',
  marginTop: '5px',
};

export default Field;
