import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aside from "./components/Aside";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Aside />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<UserDashboard />} />
            <Route path="dashboard" element={<UserDashboard />} />
            {/* <Route path="admin" element={<AdminDashboard />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
