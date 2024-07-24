import React, { useState, useEffect } from 'react';
import { getFirestore, doc, setDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth, signOut } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './ProfilePage.css';

function ProfilePage() {
  const [profile, setProfile] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    address: '',
    gender: '',
    age: '',
    profileImageUrl: ''
  });
  const [imageFile, setImageFile] = useState(null);

  const auth = getAuth();
  const db = getFirestore();
  const storage = getStorage();
  const location = useLocation();
  const navigate = useNavigate();
  const userEmail = location.state?.email || auth.currentUser?.email;

  useEffect(() => {
    const fetchProfile = async () => {
      if (userEmail) {
        const docRef = doc(db, 'user_profile', 'mcM9x1ZDL86Bv6TgoAl1');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists() && docSnap.data().email === userEmail) {
          setProfile(docSnap.data());
        } else {
          const q = query(collection(db, 'user_profile'), where('email', '==', userEmail));
          const querySnapshot = await getDocs(q);
          
          if (!querySnapshot.empty) {
            setProfile(querySnapshot.docs[0].data());
          } else {
            setProfile(prevProfile => ({ ...prevProfile, email: userEmail }));
          }
        }
      }
    };
    fetchProfile();
  }, [userEmail, db]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userEmail) {
      let updatedProfile = { ...profile };

      if (imageFile) {
        const storageRef = ref(storage, `profile_images/${userEmail}`);
        await uploadBytes(storageRef, imageFile);
        const downloadURL = await getDownloadURL(storageRef);
        updatedProfile.profileImageUrl = downloadURL;
      }

      const userDocRef = doc(db, 'user_profile', 'mcM9x1ZDL86Bv6TgoAl1');
      await setDoc(userDocRef, updatedProfile, { merge: true });
      setProfile(updatedProfile);
      alert('Profile updated successfully!');
    } else {
      alert('User email not found. Please sign in again.');
    }
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/signin');
    }).catch((error) => {
      console.error('Error signing out: ', error);
    });
  };

  return (
    <div className="profile-page">
      <nav className="navbar">
        <h1 className="main-heading">Ecobins</h1>
        <div className="user-info">
          <img 
            src={profile.profileImageUrl || "/path-to-default-user-image.jpg"} 
            alt="User" 
            className="user-photo" 
          />
          <span>Hi, {profile.name || 'User'}</span>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </nav>

      <div className="profile-content">
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="profileImage">Profile Image:</label>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          {profile.profileImageUrl && (
            <div>
              <img 
                src={profile.profileImageUrl} 
                alt="Profile" 
                className="profile-preview" 
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            </div>
          )}
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={profile.phonenumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={profile.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={profile.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={profile.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Save Profile</button>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;