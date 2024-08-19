
import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./CSS/login.css";
import backgroundImage from '../Images/main/download.png';

export default function Login() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        userType: 'guest' // default value
    });

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(credentials.username, credentials.password, credentials.userType);
        
        // Handle login logic here

        setCredentials({
            username: '',
            password: '',
            userType: 'guest'
        });
    };

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="login-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
            {/* Login Section */}
            <section className="login_us">
                <h2 className='loginp-title pb-2'>Login</h2>
                <Container>
                    <Row>
                        <Col md={10} className="offset-md-1">
                            <div className="login_inner">
                                <Row>
                                    <Col md={12} lg={8}>
                                        <div className="login_form_inner">
                                            <div className="login_field">
                                                <h3>Welcome Back!</h3>
                                                <p>Login to your account to continue.</p>
                                                <form onSubmit={handleLogin}>
                                                    <select 
                                                        className="form-control form-group"
                                                        name="userType"
                                                        value={credentials.userType}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="guest">Guest</option>
                                                        <option value="champ">Champ</option>
                                                        <option value="coach">Coach</option>
                                                    </select>

                                                    <input type="text" 
                                                        className="form-control form-group" 
                                                        name='username'
                                                        placeholder='Username'
                                                        value={credentials.username}
                                                        onChange={handleChange}
                                                        required
                                                    />

                                                    <input type="password" 
                                                        className="form-control form-group" 
                                                        placeholder="Password"
                                                        name='password'
                                                        value={credentials.password}
                                                        onChange={handleChange}
                                                        required 
                                                    />

                                                    <input type="submit" 
                                                        className="login_form_submit"
                                                    />
                                                </form>
                                                <div className="quote">
                                                    <p>"The harder the battle, the sweeter the victory." - Les Brown</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={12} lg={4}>
                                        <div className="login_info_sec">
                                            <h4>Need Help?</h4>
                                            <div className="d-flex info_single align-items-center">
                                                <i className="fas fa-headset"></i>
                                                <span>+91 ++++++++++++</span>
                                            </div>
                                            <div className="d-flex info_single align-items-center">
                                                <i className="fas fa-envelope-open-text"></i>
                                                <span>support@domain.com</span>
                                            </div>
                                            <div className="d-flex info_single align-items-center">
                                                <i className="fas fa-map-marked-alt"></i>
                                                <span>Ranchi, Jharkhand, India</span>
                                            </div>
                                            <div className="description">
                                                <p className="animate-text">Your journey to greatness starts here. Stay focused, stay motivated, and keep pushing your limits!</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}
