// App.js
import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import RecyclingGuide from './components/RecyclingGuide/RecyclingGuide';
import DisposalGuide from './components/DisposalGuide/DisposalGuide';
import SearchPage from './components/SearchPage/SearchPage';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Recycling Guide</Link>
            </li>
            <li>
              <Link to="/disposal">Disposal Guide</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<RecyclingGuide />} />
          <Route path="/disposal" element={<DisposalGuide />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;