import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./CSS/Bookingform.css";
import poster from '../Images/main/poster.png';

const BookingForm = () => {
    const { type } = useParams();
    const [otpSent, setOtpSent] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');

    const handleSendOtp = () => {
        // Here, you would integrate with an OTP sending service
        console.log('Sending OTP to:', phoneNumber);
        setOtpSent(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted with:', { type, phoneNumber, otp });
    };

    return (
        <div className="booking-form-container">
            <div className="image-container">
                <img src={poster} alt="Booking" />
            </div>
            <div className="form-container">
                <h1 className="hero">Book a Session as a {type.charAt(0).toUpperCase() + type.slice(1)}</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <label className="label" htmlFor="name">*Name</label>
                    <input className="input" id="name" type="text" required />

                    <label className="label" htmlFor="phone">*Phone Number</label>
                    <input
                        className="input"
                        id="phone"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                    <button className="otp-button" type="button" onClick={handleSendOtp}>
                        Send OTP
                    </button>

                    {otpSent && (
                        <>
                            <label className="label" htmlFor="otp">*OTP</label>
                            <input
                                className="input"
                                id="otp"
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                required
                            />
                        </>
                    )}

                    <label className="label" htmlFor="type">*User Type</label>
                    <select className="select" id="type" defaultValue={type}>
                        <option value="guest">Guest</option>
                        <option value="coach">Coach</option>
                        <option value="champ">Champ</option>
                    </select>

                    <label className="label" htmlFor="sport">*Choose Sport</label>
                    <select className="select" id="sport">
                        <option value="football">Football</option>
                        <option value="basketball">Basketball</option>
                        <option value="tennis">Tennis</option>
                        <option value="swimming">Swimming</option>
                    </select>

                    <label className="label" htmlFor="location">*Choose Location</label>
                    <select className="select" id="location">
                        <option value="lalpur">Lalpur</option>
                        <option value="daladali">Daladali</option>
                    </select>

                    <label className="label" htmlFor="startTime">*Preferred Start Time</label>
                    <select className="select" id="startTime">
                        <option value="07:00">7:00 AM</option>
                        <option value="08:00">8:00 AM</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                    </select>

                    <label className="label" htmlFor="endTime">*Preferred End Time</label>
                    <select className="select" id="endTime">
                        <option value="17:00">5:00 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="21:00">9:00 PM</option>
                    </select>

                    <button className="submit-button" type="submit">Book Now</button>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;
