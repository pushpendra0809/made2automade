import React from "react";
import { Link, useLocation ,useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate("/login")
  }
  let location = useLocation();
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* <Link className="navbar-brand"  to="/">iNotebook</Link> */}
        {isAuthenticated ? (
          <Link className="navbar-brand" to="/home">
            Product Management System
          </Link>
        ) : (
          <Link className="navbar-brand" to="/login">
            Product Management System
          </Link>
        )}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-1">
              <Link className={`nav-item ${location.pathname==="/dashboard"?"active": ""}`} aria-current="page" to="/dashboard">Home</Link>
            </li>
            <li className="nav-item mx-1" >
              <Link className={`nav-item ${location.pathname==="/about"? "active": ""}`} to="/about">About</Link>
            </li>
            <li className="nav-item mx-1" >
              <Link className={`nav-item ${location.pathname==="/orders"? "active": ""}`} to="/orders">Orders</Link>
            </li>
            <li className="nav-item mx-1" >
              <Link className={`nav-item ${location.pathname==="/dashboard"? "active": ""}`} to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item mx-1" >
              <Link className={`nav-item ${location.pathname==="/barcode"? "active": ""}`} to="/Barcode">Barcode</Link>
            </li>
            <li className="nav-item mx-1" >
              <Link className={`nav-item ${location.pathname==="/eCommerceListing"? "active": ""}`} to="/eCommerceListing">ECommerceListing</Link>
            </li>
            <li className="nav-item mx-1" >
              <Link className={`nav-item ${location.pathname==="/addProduct"? "active": ""}`} to="/AddProduct"> AddProduct</Link>
            </li>
           
          </ul>
          {!localStorage.getItem('token')?<form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
            <Link className="btn btn-primary " to="/signup" role="button">Signup</Link>
          </form>: <button onClick={handleLogout} className="btn btn-primary">Logout</button>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


