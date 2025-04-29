// src/components/Dashboard.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import ReactWordcloud from 'react-wordcloud';

const Dashboard = ({ responses }) => {
  // Example placeholder data
  const barData = [
    { name: 'Option A', count: 5 },
    { name: 'Option B', count: 3 },
    { name: 'Option C', count: 8 },
  ];

  const wordData = [
    { text: 'Happy', value: 20 },
    { text: 'Good', value: 10 },
    { text: 'Excellent', value: 5 },
    { text: 'Fun', value: 8 },
  ];

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
      <h2 style={{ marginBottom: '30px', color: '#61dafb' }}>📊 Results Dashboard</h2>

      <div style={{ marginBottom: '50px' }}>
        <h3>Bar Chart (Categorical Field Summary)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3>Word Cloud (Text Field Summary)</h3>
        <div style={{ height: 300 }}>
          <ReactWordcloud words={wordData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
