import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
import Aside from "./components/Aside";
import "./App.css";
import Content from "./components/Content";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Aside}>
            <Route path="dashboard" Component={Content} />
            <Route path="/admin" Component={AdminDashboard} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
