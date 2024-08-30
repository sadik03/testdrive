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
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import ServiceDetail from './Pages/ServiceDetails';
import BookingForm from './Pages/BookingForm';
import Membership from './Pages/Membership';
import MembershipDetail from './Pages/MembershipDetail';
import ProfileCreationForm from './Pages/ProfileCreationForm';
import LearnMore from './Pages/LearnMore';
import MemberForm from './Pages/Registration/MemberForm';
import GuestForm from './Pages/Registration/GuestForm';
import CoachForm from './Pages/Registration/CoachForm';
import AdmissionForm from './Pages/AdmissionForm';
import ComePlay from './Components/comePlay/ComePlay';
import SportsDetail from './Components/comePlay/SportsDetail';
import PaymentPage from './Components/comePlay/PaymentPage';
import ConfirmationPage from './Components/comePlay/ConfirmationPage';


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
        <Route path="/bookingform/:type" element={<BookingForm />} />
        <Route path="/create-profile" element={<ProfileCreationForm />} />
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

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;

