// src/components/FormBuilder.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormBuilder = ({ setFields }) => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState([]);

  const [newField, setNewField] = useState({
    label: '',
    type: 'text',
    required: false,
  });

  const containerStyle = {
    backgroundColor: 'black',
    color: 'white',
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
  };

  const inputStyle = {
    margin: '10px',
    padding: '10px',
    fontSize: '16px',
    width: '80%',
    maxWidth: '400px',
    borderRadius: '6px',
    border: '1px solid white',
    backgroundColor: '#222',
    color: 'white',
  };

  const buttonStyle = {
    margin: '10px',
    padding: '12px 24px',
    backgroundColor: '#2196f3',
    border: 'none',
    color: 'white',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
  };

  const handleAddField = () => {
    if (!newField.label) {
      alert('Please enter a label for the field!');
      return;
    }
    setFormFields([...formFields, newField]);
    setNewField({ label: '', type: 'text', required: false });
  };

  const handlePublish = () => {
    setFields(formFields);
    navigate('/publish');
  };

  return (
    <div style={containerStyle}>
      <h2>📝 Form Builder</h2>

      <input
        style={inputStyle}
        type="text"
        placeholder="Enter field label"
        value={newField.label}
        onChange={(e) => setNewField({ ...newField, label: e.target.value })}
      />

      <select
        style={inputStyle}
        value={newField.type}
        onChange={(e) => setNewField({ ...newField, type: e.target.value })}
      >
        <option value="text">Text</option>
        <option value="email">Email</option>
        <option value="number">Number</option>
        <option value="dropdown">Dropdown</option>
        <option value="checkbox">Checkbox</option>
        <option value="rating">Rating (1–5)</option>
      </select>

      <label style={{ color: 'white' }}>
        <input
          type="checkbox"
          checked={newField.required}
          onChange={(e) =>
            setNewField({ ...newField, required: e.target.checked })
          }
        />{' '}
        Required
      </label>

      <button onClick={handleAddField} style={buttonStyle}>➕ Add Field</button>

      {formFields.length > 0 && (
        <>
          <h3>📋 Current Form Fields</h3>
          <ul>
            {formFields.map((field, index) => (
              <li key={index}>{field.label} ({field.type}) {field.required ? '*' : ''}</li>
            ))}
          </ul>
          <button onClick={handlePublish} style={{ ...buttonStyle, backgroundColor: '#4caf50' }}>
            🚀 Publish Form
          </button>
        </>
      )}
    </div>
  );
};

export default FormBuilder;
