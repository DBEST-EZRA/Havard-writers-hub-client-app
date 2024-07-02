import React from "react";
import "./Content.css";
import CardComponent from "./CardComponent";

const UserDashboard = () => {
  return (
    <div className="content-container">
      <div className="profile">
        <div className="username">Abdul Zein</div>
        <div className="profile-pic">
          <img src="https://via.placeholder.com/150" alt="profile" />
        </div>
      </div>
      <div className="stats">
        <div className="stat-card">
          <h5>Balance</h5>
          <h5>$0</h5>
        </div>
        <div className="stat-card">
          <h5>Balance</h5>
          <h5>$0</h5>
        </div>
        <div className="stat-card">
          <h5>Balance</h5>
          <h5>$0</h5>
        </div>
        <div className="stat-card">
          <h5>Balance</h5>
          <h5>$0</h5>
        </div>
      </div>
      <div className="grid-container">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
};

export default UserDashboard;
