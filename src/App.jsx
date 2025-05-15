import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProfileDetail from './pages/ProfileDetail';
import './index.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<ProfileDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

// Aditya Mohite 
// adityamohite4973@gmail.com
