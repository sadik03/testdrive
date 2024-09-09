// import NavBar from './Components/NavBar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Footer from './Pages/Footer';




// function App() {
//   return (
   
//     <div>
//       { /*navigation bar*/}
//       <NavBar />

//     </div>    

//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar'; // Adjust the import path as necessary
import Home from './Pages/Home/Home';
import About from './Pages/ABOUT/About';
import Contact from './Pages/CONTACT/Contact';
import Service from './Pages/SERVICE/Service';
import ServiceDetail from './Pages/ServiceDetails';



import LearnMore from './Pages/ABOUT/LearnMore';
import MemberForm from './Pages/Registration/MemberForm';
import GuestForm from './Pages/Registration/GuestForm';
import CoachForm from './Pages/Registration/CoachForm';
import AdmissionForm from './Pages/AdmissionForm';
import ComePlay from './Pages/comePlay/ComePlay';
import SportsDetail from './Pages/comePlay/SportsDetail';
import PaymentPage from './Pages/comePlay/PaymentPage';
import ConfirmationPage from './Pages/comePlay/ConfirmationPage';
import Membership from './Pages/MEMBERSHIP/Membership';
import MembershipDetail from './Pages/MEMBERSHIP/MembershipDetail';
import GymProfile from './Pages/GYM/GymProfile';
import ProfileSettings from './Pages/GYM/ProfileSettings';
import MemberProfile from './Pages/GYM/MeberProfile';
import GuestProfile from './Pages/GYM/GuestProfile';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/member/:id" element={<MembershipDetail />} />
        <Route path="/Contact" element={<Contact />} />
       
      
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/" element={<Home />} />
        <Route path="/member" element={<MemberForm />} />
        <Route path="/coach" element={<CoachForm />} />
        <Route path="/guest" element={<GuestForm />} />
        <Route path="/AdmissionForm" element={<AdmissionForm />} />
        <Route path="/ComePlay" element={<ComePlay />} />
        <Route path="/sports/:id" element={<SportsDetail />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />

        <Route path="/profile" element={<GymProfile />} />

        <Route path="/settings" element={<ProfileSettings />} />

        <Route path="/memberProfile" element={<MemberProfile />} />

        <Route path="/guestProfile" element={<GuestProfile />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;

