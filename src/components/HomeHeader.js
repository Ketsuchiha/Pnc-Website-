import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container-fluid py-3 d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img src="/images/logo.png" alt="School Logo" width="150" height="170" className="d-inline-block align-top me-3" />
            <div className="d-flex flex-column text-center text-lg-start">
              <span className="university-name">University of Cabuyao</span>
              <span className="fw-bold tagline">PAMANTASAN NG CABUYAO</span>
            </div>
          </div>
          <div className="fw-bold d-none d-lg-flex align-items-center motto">
            <i className="fas fa-quote-left me-2"></i> 
            Dangal ng Bayan, bringing pride and honor to the nation
            <i className="fas fa-quote-right ms-2"></i>
          </div>
          <button className="navbar-toggler ms-auto d-lg-none" onClick={toggleSidebar}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Sidebar and overlay */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          <i className="fas fa-times"></i>
        </button>
        <ul className="nav-links">
          {[
            { label: "Home", path: "/" },
            { label: "College Departments", path: "/college" },
            { label: "About", path: "/about" },
            { label: "Contacts", path: "/contacts" }
          ].map((item, index) => (
            <li key={index}>
              <Link to={item.path} className="nav-link" onClick={toggleSidebar}>
                <i className="fas fa-chevron-right me-2"></i> {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default HomeHeader;