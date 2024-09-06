import React, { useState } from "react";
import { send } from "emailjs-com";
import { Container, Row } from 'react-bootstrap';
import Lottie from "lottie-react";
import contactAnimation from "../../LottieAnimation/contact.json";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import "./Contact.css";
import BackgroundImage from "../../assets/bnb9.jpg";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    email: "",
    contact: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(toSend.from_name, toSend.email, toSend.contact, toSend.message);

    send("service_3xs1c9t", "template_clmihxn", toSend, "_Pnbu7RNVuwRn9mc6")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    setToSend({
      from_name: "",
      email: "",
      contact: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="home-page" style={{ minHeight: '100vh'}}>
      {/* Background Image with Blur */}


      <div className="main">

        
        <Container>
        <div
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed', 
          filter: 'blur(8px)',
   position:'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      ></div>
          <Row>
            {/* Lottie Animation Section */}
            <div className="col-md-12 col-lg-6">
              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                animate="show"
                className="lottie-container"
              >
                <Lottie 
                  animationData={contactAnimation}
                  loop={true}
                  style={{ width: '100%', height: 'auto' }}
                />
              </motion.div>
            </div>

            {/* Form Section */}
            <div className="col-md-12 col-lg-6">
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                animate="show"
                className="contact_inner"
              >
                <div className="contact_form_inner">
                  <h2 className="contact-title">Get In Touch!</h2>
                  <p className="contact-description">
                    <strong>Feel Free to contact us any time.</strong> Let's Discuss Your Project & Ideas.
                  </p>
                  <form 
                    action="https://api.web3forms.com/submit" 
                    method="POST"  
                    className="contact-form"
                    onSubmit={onSubmit}
                  >
                    <input type="hidden" name="access_key" value="d8154708-9cc5-4b70-9789-6f7f765b0a77"/>
                   
                    <input 
                      type="text"
                      className="form-control form-group"
                      name='from_name'
                      placeholder='Name'
                      value={toSend.from_name}
                      onChange={handleChange}
                      required
                    />
                    <input 
                      type="email"
                      className="form-control form-group"
                      name='email'
                      placeholder="Email"
                      value={toSend.email}
                      onChange={handleChange}
                      required
                    />
                    <input 
                      type="number"
                      className="form-control form-group"
                      name='contact'
                      placeholder="Contact"
                      value={toSend.contact}
                      onChange={handleChange}
                      required
                    />
                    <textarea 
                      className="form-control form-group"
                      name='message'
                      placeholder="Message"
                      value={toSend.message}
                      onChange={handleChange}
                    />
                    <input 
                      type="submit"
                      className="contact_form_submit"
                    />
                  </form>
                </div>
              </motion.div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
