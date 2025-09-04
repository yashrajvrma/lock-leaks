"use client";
import React, { useState } from "react";
import "../styles/AdminDashboard.css";
import Link from "next/link";
import MyProfile from "./MyProfile";

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Search Engines");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="admin-dashboard-body">
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-4 col-lg-2 admin-dashboard-sidebar">
            <div className="admin-dashboard-logo">
              <Link href="/">
                <img src="/images/lockleaks.svg" alt="Admin Logo" />
              </Link>
            </div>

            <a
              href="#"
              className={`admin-dashboard-nav-button ${
                activeTab === "Search Engines" ? "admin-dashboard-active" : ""
              }`}
              onClick={() => handleTabClick("Search Engines")}
            >
              <i className="fa fa-search"></i> Search Engines
            </a>
            <a
              href="#"
              className={`admin-dashboard-nav-button ${
                activeTab === "Leak Sites" ? "admin-dashboard-active" : ""
              }`}
              onClick={() => handleTabClick("Leak Sites")}
            >
              <i className="fa fa-exclamation-triangle"></i> Leak Sites
            </a>
            <a
              href="#"
              className={`admin-dashboard-nav-button ${
                activeTab === "Scraping" ? "admin-dashboard-active" : ""
              }`}
              onClick={() => handleTabClick("Scraping")}
            >
              <i className="fa fa-robot"></i> Scraping
            </a>
            <a
              href="#"
              className={`admin-dashboard-nav-button ${
                activeTab === "Users" ? "admin-dashboard-active" : ""
              }`}
              onClick={() => handleTabClick("Users")}
            >
              <i className="fa fa-users"></i> Users
            </a>
            <a
              href="#"
              className={`admin-dashboard-nav-button ${
                activeTab === "Keywords" ? "admin-dashboard-active" : ""
              }`}
              onClick={() => handleTabClick("Keywords")}
            >
              <i className="fa fa-key"></i> Keywords
            </a>
            <a
              href="#"
              className={`admin-dashboard-nav-button ${
                activeTab === "Send PDF" ? "admin-dashboard-active" : ""
              }`}
              onClick={() => handleTabClick("Send PDF")}
            >
              <i className="fa fa-file-pdf"></i> Send PDF
            </a>
            <a
              href="#"
              className={`admin-dashboard-nav-button ${
                activeTab === "Whitelist" ? "admin-dashboard-active" : ""
              }`}
              onClick={() => handleTabClick("Whitelist")}
            >
              <i className="fa fa-check-circle"></i> Whitelist
            </a>
            <a
              href="#"
              className={`admin-dashboard-nav-button ${
                activeTab === "Profile" ? "admin-dashboard-active" : ""
              }`}
              onClick={() => handleTabClick("Profile")}
            >
              <i className="fa fa-check-circle"></i> My Profile
            </a>
          </div>

          {/* Main Content */}
          <div className="col-md-8 col-lg-10 p-4">
            {/* Top Bar */}
            <div className="admin-dashboard-top-bar">
              <div className="admin-dashboard-user-info">
                <img src="icons/X_AE_A-13b.svg" alt="Avatar" />
                <span className="admin-dashboard-text-gradient">
                  X_AE_A-13b
                </span>
              </div>
              <i className="fa fa-sign-out-alt admin-dashboard-logout-icon"></i>
            </div>

            {/* Conditional Rendering for Tabs */}
            {activeTab === "Search Engines" && <h4>Search Engines Content</h4>}
            {activeTab === "Leak Sites" && <h4>Leak Sites Content</h4>}
            {activeTab === "Scraping" && <h4>Scraping Content</h4>}
            {activeTab === "Users" && <h4>Users Content</h4>}
            {activeTab === "Keywords" && <h4>Keywords Content</h4>}

            {/* SEND PDF TAB */}
            {activeTab === "Send PDF" && (
              <div className="send-pdf-tab">
                {/* Top Stats Boxes */}
                <div className="row mb-4">
                  <div className="col-md-4">
                    <div className="send-pdf-card send-pdf-card-row">
                      <h6>Manual Pending:</h6>
                      <span className="send-pdf-value">982</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="send-pdf-card send-pdf-card-row">
                      <h6>Auto Pending:</h6>
                      <span className="send-pdf-value">982</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="send-pdf-card send-pdf-card-row">
                      <h6>Sent:</h6>
                      <span className="send-pdf-value">982</span>
                    </div>
                  </div>
                </div>

                {/* Search Input with Icon Image */}
                <div className="send-pdf-search mb-3 position-relative">
                  <input
                    type="text"
                    className="form-control ps-3 pe-5" // padding-left for text, padding-right for icon
                    placeholder="Search PDF..."
                  />
                  {/* Icon Image inside input */}
                  <img
                    src="/icons/search-icon-place.svg" // path to your icon image
                    alt="search"
                    className="search-icon"
                  />
                </div>

                {/* Table */}
                <div className="table-responsive">
                  <table className="table table-dark table-striped">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Send Mode</th>
                        <th>Previous Sent</th>
                        <th>Current Send</th>
                        <th>Status</th>
                        <th>Subscription</th>
                        <th>Expire</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>0</td>
                        <td>@usman4u</td>
                        <td>Auto</td>
                        <td>19.03.2025</td>
                        <td>In 2 Days</td>
                        <td>Sent</td>
                        <td>Active</td>
                        <td>26.04.2025</td>
                        <td>
                          <button className="btn btn-sm btn-primary">
                            Select
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>@banditaa</td>
                        <td>Manual</td>
                        <td>19.03.2025</td>
                        <td>In 2 Days</td>
                        <td>Inactive</td>
                        <td>Inactive</td>
                        <td>Expired</td>
                        <td>
                          <button className="btn btn-sm btn-primary">
                            Select
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="send-pdf-pagination text-center">
                  <button className="btn btn-sm btn-outline-light">1</button>
                  <button className="btn btn-sm btn-outline-light">2</button>
                  <button className="btn btn-sm btn-outline-light">...</button>
                  <button className="btn btn-sm btn-outline-light">12</button>
                </div>
              </div>
            )}

            {activeTab === "Whitelist" && <h4>Whitelist Content</h4>}
            {activeTab === "Profile" && (
              <h4>
                <MyProfile />
              </h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
