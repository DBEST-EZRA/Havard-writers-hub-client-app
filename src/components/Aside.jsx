import React from "react";
import { Link } from "react-router-dom";
import "./Aside.css";

const Aside = () => {
  return (
    <div className="aside-container">
      <aside className="sidebar">
        <h3 className="namelogo">Harvard Writers Hub</h3>
        <ul className="list-unstyled">
          <li>
            <Link to="/dashboard" className="sidebar-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin" className="sidebar-link">
              Admin <span className="badge bg-secondary">Pro</span>
            </Link>
          </li>
          <li>
            <Link to="/inbox" className="sidebar-link">
              Inbox <span className="badge bg-primary">3</span>
            </Link>
          </li>
          <li>
            <Link to="/users" className="sidebar-link">
              Users
            </Link>
          </li>
          <li>
            <Link to="/products" className="sidebar-link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/logout" className="sidebar-link">
              Logout
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Aside;
