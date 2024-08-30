import React from 'react';
import { useNavigate } from 'react-router-dom';
import aboutImg from '../assets/about.png';
import founder1 from '../assets/Founder1.png';
import founder2 from '../assets/Founder2.png';
import founder3 from '../assets/Founder3.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Lottie from 'lottie-react';
import aboutAnimation from '../LottieAnimation/about.json';
import Loader from './Loader'; // Import the Loader component
import './CSS/About.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import BackgroundImage from "../assets/bn6.jpg";
      
const About = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/learn-more');
  };

  return (
    <div className="about-page">
      {/* Blurred background image */}
      <div className="blurred-background"></div>
      <div
        className="blurred-background"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(8px)',
          position: 'absolute',
          backgroundAttachment: 'fixed', 
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      ></div>

      <div className="about-container">
        {/* About section */}
        <div className="about-section">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="about-image"
          >
            <Lottie 
              animationData={aboutAnimation}
              loop={true}
              style={{ width: '100%', height: 'auto' }}
            />
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="about-text"
          >
            <h2 className="about-title">
              About ARS Kreedashala Pvt Ltd
            </h2>
            <p className="about-description">
              ARS Kreedashala Pvt Ltd is an Indian sports education organization founded by sports enthusiasts with a shared vision: integrating sports into every child's education. We offer a structured Sports and Physical Education (P.E) curriculum based on NASPE Standards, aiming to develop a healthier and fitter generation through high-quality sports education.
              <br /><br />
              Our mission is to provide every grassroots player with the opportunity to enhance their skills from an early stage. We address the gap in basic skill development and static training with personalized training supported by IT. Our goal is to make a significant impact on the sports industry and win the maximum number of medals in the Olympic Games.
            </p>
            <button className="btn-success" onClick={handleLearnMore}>Learn More</button>
          </motion.div>
        </div>

        {/* Founders images */}
        <div className="founders-section">
          <h2 className="founders-title">
            Our Founders
          </h2>
          <div className="founders-images">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="founder-image"
            >
              <img 
                src={founder1} 
                alt="Founder 1" 
                className="founder-img"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="founder-image"
            >
              <img 
                src={founder2} 
                alt="Founder 2" 
                className="founder-img"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="founder-image"
            >
              <img 
                src={founder3} 
                alt="Founder 3" 
                className="founder-img"
              />
            </motion.div>
          </div>
        </div>

        {/* Sports Achievements */}
        <div className="achievements-section">
          <h2 className="achievements-title">
            Our Achievements
          </h2>
          <div className="achievements-list">
            <div className="achievement-item">
              <img src="https://i.pinimg.com/originals/25/07/be/2507be4bb61c8d16e464faa8319b5df7.png" alt="Gold Medal" className="achievement-icon" />
              <h4 className="achievement-title">Olympic Gold Medals</h4>
              <p>20+</p>
            </div>
            <div className="achievement-item">
              <img src="https://banner2.cleanpng.com/20240329/ako/transparent-red-ribbon-gold-trophy-with-red-ribbon-and-confetti660642e61f4876.67344761.webp" alt="Trophies" className="achievement-icon" />
              <h4 className="achievement-title">National Trophies</h4>
              <p>50+</p>
            </div>
            <div className="achievement-item">
              <img src="https://banner2.cleanpng.com/20180309/odw/av02csuah.webp" alt="Awards" className="achievement-icon" />
              <h4 className="achievement-title">International Awards</h4>
              <p>15+</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials-section">
          <h2 className="testimonials-title">
            What Our Athletes Say
          </h2>
          <div className="testimonials">
            <div className="testimonial-item">
            <img src="https://img.freepik.com/free-photo/scene-from-olympic-games-tournament-with-athletes-competing_23-2151470946.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid" alt="Athlete 2" className="testimonial-img" />

              <p className="testimonial-text">
                "ARS Kreedashala provided me with the perfect platform to enhance my skills and reach my full potential. Their support and guidance were instrumental in my success."
              </p>
              <p className="testimonial-author">- Athlete 1</p>
            </div>
            <div className="testimonial-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkYmvUjrtfoXlI2Z2nmXFxnntJOc-wQklGh9pT5PSL_cItnUgHM72b_1TqyHS0mft13E&usqp=CAU" alt="Athlete 2" className="testimonial-img" />
              <p className="testimonial-text">
                "The training programs and personalized coaching have helped me excel in my sport. I am grateful for the opportunities provided by ARS Kreedashala."
              </p>
              <p className="testimonial-author">- Athlete 2</p>
            </div>
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="milestones-section">
          <h2 className="milestones-title">
            Our Milestones
          </h2>
          <div className="milestones-timeline">
            <div className="milestone-item">
              <div className="milestone-date">2020</div>
              <div className="milestone-content">
                <h4>Established ARS Kreedashala</h4>
                <p>Launched our first sports education program and started offering training sessions.</p>
              </div>
            </div>
            <div className="milestone-item">
              <div className="milestone-date">2021</div>
              <div className="milestone-content">
                <h4>Opened New Training Facilities</h4>
                <p>Expanded our reach by opening new training centers across the country.</p>
              </div>
            </div>
            <div className="milestone-item">
              <div className="milestone-date">2022</div>
              <div className="milestone-content">
                <h4>National Recognition</h4>
                <p>Received awards for excellence in sports education and training.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="stats-section"
        >
          <div className="stats-content">
            <div className="stats-text">
              <h2 className="stats-title">
                Helping a local <br /> <span className="stats-highlight">business reinvent itself</span>
              </h2>
              <p>We reached here with our hard work and dedication</p>
            </div>

            {/* Stats */}
            <div className="stats-details">
              <div className="stats-item">
                <div className="stats-icon">
                  <img src="/src/assets/icons/group.png" alt="Members" />
                </div>
                <div className="stats-info">
                  <h4 className="stats-number">2,245,341</h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="stats-item">
                <div className="stats-icon">
                  <img src="/src/assets/icons/clubs.png" alt="Clubs" />
                </div>
                <div className="stats-info">
                  <h4 className="stats-number">1,415</h4>
                  <p>Clubs</p>
                </div>
              </div>
              <div className="stats-item">
                <div className="stats-icon">
                  <img src="/src/assets/icons/medal.png" alt="Awards" />
                </div>
                <div className="stats-info">
                  <h4 className="stats-number">34</h4>
                  <p>Awards</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <div className="contact-section">
          <h2 className="contact-title">
            Get in Touch
          </h2>
          <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                Our headquarters.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default About;