// src/components/SettingsPage/SettingsPage.js
import React, { useState } from 'react';
import './SettingsPage.css';

const SettingsPage = () => {
  const [notifications, setNotifications] = useState(true);
  const [units, setUnits] = useState('kg');
  const [password, setPassword] = useState('');
  const [colorScheme, setColorScheme] = useState('light');

  const handleSave = () => {
    // Implement save functionality, e.g., API call to save settings
    alert('Settings saved successfully!');
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="settings-section">
        <h3>Notifications Preferences</h3>
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
          Enable Notifications
        </label>
      </div>
      <div className="settings-section">
        <h3>Units of Measurement</h3>
        <select value={units} onChange={(e) => setUnits(e.target.value)}>
          <option value="kg">Kilograms (kg)</option>
          <option value="lbs">Pounds (lbs)</option>
        </select>
      </div>
      <div className="settings-section">
        <h3>Password Change</h3>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="settings-section">
        <h3>Color Scheme</h3>
        <select value={colorScheme} onChange={(e) => setColorScheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div className="settings-section">
        <h3>Help and Support</h3>
        <p>For assistance, please contact our support team at support@example.com.</p>
      </div>
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
};

export default SettingsPage;
