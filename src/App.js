import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecords([...records, formData]);
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="App">
      <h1>Dummy React Frontend</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Add Record</button>
      </form>
      <h2>Records:</h2>
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            {record.name} - {record.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
