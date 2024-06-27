// src/components/CarbonFootprintForm/CarbonFootprintForm.js
import React, { useState } from 'react';
import './CarbonFootprintForm.css';

const CarbonFootprintForm = () => {
  const [formData, setFormData] = useState({
    transportation: '',
    energyConsumption: '',
    waste: '',
    recycling: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="carbon-footprint-form-container">
      <h1>Carbon Footprint Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="transportation">Transportation (km per week):</label>
          <input
            type="number"
            id="transportation"
            name="transportation"
            value={formData.transportation}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="energyConsumption">Energy Consumption (kWh per month):</label>
          <input
            type="number"
            id="energyConsumption"
            name="energyConsumption"
            value={formData.energyConsumption}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="waste">Waste (kg per week):</label>
          <input
            type="number"
            id="waste"
            name="waste"
            value={formData.waste}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="recycling">Recycling (kg per week):</label>
          <input
            type="number"
            id="recycling"
            name="recycling"
            value={formData.recycling}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Calculate</button>
      </form>
    </div>
  );
};

export default CarbonFootprintForm;
