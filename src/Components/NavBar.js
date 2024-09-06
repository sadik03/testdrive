import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, NavLink, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, Button, Dropdown, Image } from 'react-bootstrap';
import { FaSignOutAlt, FaUserAlt, FaCog } from 'react-icons/fa';  // Import icons for the dropdown menu
import logo from "../Images/main/newww.png";
import userAvatar from "../Images/main/6.png";  // Replace with your avatar image path
import "../Pages/CSS/NavBar.css";

import LoginForm from '../Pages/LOGIN&SIGNUP/LoginForm';
import RegisterForm from '../Pages/Registration/RegisterForm';

export default function NavBar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const [expanded, setExpanded] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  const handleRegisterClose = () => setShowRegister(false);
  const handleRegisterShow = () => setShowRegister(true);

  const closeNavbar = () => setExpanded(false);
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate('/profile');
  };

  const handleProfileSetting = () => {
    navigate('/settings');
  };



  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.custom-navbar');
      if (window.scrollY > 50) {
        nav.classList.add('navbar_scroll');
      } else {
        nav.classList.remove('navbar_scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expanded={expanded} onToggle={setExpanded} expand="lg" fixed='top' className="custom-navbar">
      <Container>
        <Navbar.Brand>
          <Link to="/Home" onClick={closeNavbar}>
            <img src={logo} className="BrandLogo" alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='nav-text me-auto'>
            <Nav.Link>
              <NavLink to="/Home" className={({ isActive }) => isActive ? 'active' : undefined} onClick={closeNavbar}>
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/About" className={({ isActive }) => isActive ? 'active' : undefined} onClick={closeNavbar}>
                About
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/Service" className={({ isActive }) => isActive ? 'active' : undefined} onClick={closeNavbar}>
                Service
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/Membership" className={({ isActive }) => isActive ? 'active' : undefined} onClick={closeNavbar}>
                Membership
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/Contact" className={({ isActive }) => isActive ? 'active' : undefined} onClick={closeNavbar}>
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>
          <Nav className='ms-auto d-flex align-items-center'>
            <Button variant="outline-success" onClick={() => { handleLoginShow(); closeNavbar(); }}>Login</Button>
            <Button variant="success" onClick={() => { handleRegisterShow(); closeNavbar(); }} className="ms-2">Register</Button>
            {/* User Avatar */}
            <Dropdown align="end" className="ms-3">
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" className="user-avatar-btn">
                <Image src={userAvatar} roundedCircle className="user-avatar" />
              </Dropdown.Toggle>

              <Dropdown.Menu className="user-menu">
                <Dropdown.Item  onClick={handleProfile}>
                  <FaUserAlt className="me-2" /> Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={handleProfileSetting}>
                  <FaCog className="me-2" /> Settings
                </Dropdown.Item>
                <Dropdown.Item href="#/logout">
                  <FaSignOutAlt className="me-2" /> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {showLogin && <LoginForm onClose={handleLoginClose} />}
      {showRegister && <RegisterForm onClose={handleRegisterClose} />}
    </Navbar>
  );
}
