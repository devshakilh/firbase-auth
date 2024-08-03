// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route
          path="/home"
          element={<PrivateRoute element={<Home />} />} // Use PrivateRoute component
        />
        <Route path="/" element={<Navigate to="/log-in" />} />
      </Routes>
    </Router>
  );
}

export default App;
