import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
import logo from "../Images/main/newww.png";
import About from '../Pages/About';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Service from '../Pages/Service';
import ServiceDetail from '../Pages/ServiceDetails';
import BookingForm from '../Pages/BookingForm';
import Membership from '../Pages/Membership';
import MembershipDetail from '../Pages/MembershipDetail';
import "../Pages/CSS/NavBar.css";
import LoginForm from '../Pages/LoginForm';
import RegisterForm from '../Pages/RegisterForm';
import ProfileCreationForm from '../Pages/ProfileCreationForm';
import CoachAdmissionForm from '../Pages/CoachAdmissionForm';
import ChampAdmissionForm from '../Pages/ChampAdmissionForm';
import LearnMore from '../Pages/LearnMore';
import MemberForm from '../Pages/Registration/MemberForm';
import GuestForm from '../Pages/Registration/GuestForm';
import CoachForm from '../Pages/Registration/CoachForm';
import AdmissionForm from '../Pages/AdmissionForm';

export default function NavBar() {
  const [showLogin, setShowLogin] = useState(true); // Show LoginForm by default
  const [showRegister, setShowRegister] = useState(false); // Don't show RegisterForm by default
  const [showCoachAdmission, setShowCoachAdmission] = useState(false);
  const [showChampAdmission, setShowChampAdmission] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  const handleRegisterClose = () => setShowRegister(false);
  const handleRegisterShow = () => setShowRegister(true);

  const handleCoachAdmissionClose = () => setShowCoachAdmission(false);
  const handleCoachAdmissionShow = () => setShowCoachAdmission(true);

  const handleChampAdmissionClose = () => setShowChampAdmission(false);
  const handleChampAdmissionShow = () => setShowChampAdmission(true);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.navbar');
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
    <BrowserRouter>
      <Navbar expand="lg" fixed='top'>
        <Container>
          <Navbar.Brand>
            <Link to="/Home">
              <img src={logo} className="BrandLogo" alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='nav-text'>
              <Nav.Link>
                <NavLink to="/Home" className={({ isActive }) => isActive ? 'active' : undefined}>
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/About" className={({ isActive }) => isActive ? 'active' : undefined}>
                  About
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/Service" className={({ isActive }) => isActive ? 'active' : undefined}>
                  Service
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/Membership" className={({ isActive }) => isActive ? 'active' : undefined}>
                  Membership
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/Contact" className={({ isActive }) => isActive ? 'active' : undefined}>
                  Contact
                </NavLink>
              </Nav.Link>
              {/* <NavDropdown title="Admission" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleCoachAdmissionShow}>Coach</NavDropdown.Item>
                <NavDropdown.Item onClick={handleChampAdmissionShow}>Champ</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav className='ms-auto'>
              <Button variant="outline-success" onClick={handleLoginShow}>Login</Button>
              <Button variant="success" onClick={handleRegisterShow} className="ms-2">Register</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/service/:id/:type?" element={<ServiceDetail />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/member/:id" element={<MembershipDetail />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/bookingform/:type" element={<BookingForm />} />
        <Route path="/create-profile" element={<ProfileCreationForm />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/" element={<Home />} />
        <Route path="/member" element={<MemberForm />} />
        <Route path="/coach" element={<CoachForm />} />
        <Route path="/guest" element={<GuestForm />} />
        <Route path="/AdmissionForm" element={< AdmissionForm/>} />


      </Routes>

      {/* Popup Forms */}
      {showLogin && <LoginForm onClose={handleLoginClose} />}
      {showRegister && <RegisterForm onClose={handleRegisterClose} />}
      {showCoachAdmission && <CoachAdmissionForm onClose={handleCoachAdmissionClose} />}
      {showChampAdmission && <ChampAdmissionForm onClose={handleChampAdmissionClose} />}
    </BrowserRouter>
  );
}
