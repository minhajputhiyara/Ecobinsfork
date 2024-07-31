// src/App.js
import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecyclingGuide from './components/RecyclingGuide/RecyclingGuide';
import DisposalGuide from './components/DisposalGuide/DisposalGuide';
import SearchPage from './components/SearchPage/SearchPage';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import SearchOptions from './components/SearchOptions/SearchOptions';
import CarbonFootprintForm from './components/Form/CarbonFootprintForm';
import SignIn from './components/SignPage/SignIn';
import SignUp from './components/SignPage/SignUp';
import PostsManagement from './components/Posts/PostsManagement';
import OrderDetails from './components/Orders/OrderDetails';
import AddPost from './components/Posts/AddPost';
import EditPost from './components/Posts/EditPost';
import ProfilePage from './components/ProfilePage/ProfilePage';
import CarbonFootprintCard from './components/CarbonFootprintCard/CarbonFootprintCard';
import SettingsPage from './components/SettingsPage/SettingsPage';


function App() {
  // Sample data for the CarbonFootprintCard
  const data = {
    labels: ['Transportation', 'Waste', 'Energy'],
    datasets: [{
      data: [30, 20, 50],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    }]
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recycle" element={<RecyclingGuide />} />
          <Route path="/disposal" element={<DisposalGuide />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search-options" element={<SearchOptions />} />
          <Route path="/carbon-footprint" element={<CarbonFootprintForm />} />
          <Route path="/carbon-footprint-card" element={<CarbonFootprintCard footprint={100} data={data} chartType="bar" />} />
          <Route path="/posts-management" element={<PostsManagement />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
