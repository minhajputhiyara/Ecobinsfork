import React, { useState } from 'react';

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit data to backend
    setIsEditing(false);
  };

  return (
    <div className="user-profile-card">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          disabled={!isEditing}
          placeholder="Name"
        />
        <input
          type="tel"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          disabled={!isEditing}
          placeholder="Phone Number"
        />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          disabled={!isEditing}
          placeholder="Email"
        />
        <input
          type="text"
          name="address"
          value={userData.address}
          onChange={handleChange}
          disabled={!isEditing}
          placeholder="Address"
        />
        {isEditing ? (
          <button type="submit">Submit</button>
        ) : (
          <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
        )}
      </form>
    </div>
  );
}

export default UserProfile;