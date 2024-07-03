import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faUser, faInbox, faChalkboardTeacher, faQuestionCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "./Aside.css";

const Aside = () => {
  return (
    <div className="aside-container">
      <aside className="sidebar">
        <h3 className="namelogo">Harvard Writers Hub</h3>
        <ul className="list-unstyled">
          <li>
            <Link to="/dashboard" className="sidebar-link">
              <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin" className="sidebar-link">
              <FontAwesomeIcon icon={faUser} /> Account
              {/* Account <span className="badge bg-secondary">Pro</span> */}
            </Link>
          </li>
          <li>
            <Link to="/inbox" className="sidebar-link">
              <FontAwesomeIcon icon={faInbox} /> Inbox <span className="badge bg-primary">3</span>
            </Link>
          </li>
          <li>
            <Link to="/products" className="sidebar-link">
              <FontAwesomeIcon icon={faChalkboardTeacher} /> Trainings
            </Link>
          </li>
          <li>
            <Link to="/users" className="sidebar-link">
              <FontAwesomeIcon icon={faQuestionCircle} /> Help
            </Link>
          </li>
          <li>
            <Link to="/logout" className="sidebar-link">
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Aside;
