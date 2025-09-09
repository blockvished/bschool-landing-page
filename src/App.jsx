import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";

const App = () => {
  return (
    <div className="bg-white text-gray-900">
      <BrowserRouter basename="/bschool-landing-page">
        <Routes>
          {/* Main route */}
          <Route path="/" element={<LandingPage />} />
          {/* Signup route */}
          <Route path="/signup" element={<Signup />} />
          {/* Login route */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
