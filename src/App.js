// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage'; 
import StravaPage from './StravaPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/to-strava" element={<StravaPage />} />
      </Routes>
    </Router>
  );
}

export default App;