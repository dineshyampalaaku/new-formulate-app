// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormBuilder from './components/FormBuilder';
import PublishForm from './components/PublishForm';
import ViewForm from './components/ViewForm';
import Dashboard from './components/Dashboard'; // New Dashboard for form history
import { useState } from 'react';

function App() {
  const [fields, setFields] = useState([]);

  const appStyle = {
    backgroundColor: 'black',
    color: 'white',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={appStyle}>
      <Router>
        <Routes>
          <Route path="/" element={<FormBuilder fields={fields} setFields={setFields} />} />
          <Route path="/publish" element={<PublishForm fields={fields} />} />
          <Route path="/view/:formId" element={<ViewForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
