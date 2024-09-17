import React from "react";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import Container from "../../../Components/Container/Container";
import logo from "../../../assets/logo/logo2.png";
import FadeInAnimation from "../../../Components/FadeInAnimation/FadeInAnimation";
import Reavel from "../../../Components/Reveal/Reavel";
import "./about.css";

const AboutUs = () => {
  return (
    <div className="dark:bg-gray-700 bg-[#68a9d3] pb-10 lg:pb-20" id="aboutus">
      <SectionHeader heading={"About Us"}></SectionHeader>
      <Container>
        <div className="grid grid-cols-1 gap-10">
          <FadeInAnimation>
            <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-10">
              <div className="">
                <img
                  className="md:max-w-md max-w-sm rounded-xl"
                  loading="lazy"
                  src="https://i.ibb.co/Rv6DNbt/c7adc7d8-0942-489a-b219-f78b00bb9b6c.webp"
                  alt=""
                />
              </div>
              <div>
                <div className="flex justify-center items-start mb-2">
                  <img className="w-48" src={logo} alt="logo" loading="lazy" />
                </div>
                <Reavel>
                  <p className="dark:text-white text-slate-700">
                    Welcome to{" "}
                    <span className="font-semibold">ARS KREEDASHALA</span>,
                    where talent, teamwork, and determination come together to
                    create champions.
                  </p>
                </Reavel>
                <Reavel>
                  <p className="dark:text-white text-slate-700">
                    At ARS Kreedashala, we're not just shaping athletes; we’re
                    building a sports community that thrives on passion,
                    excellence, and the power of teamwork. Our mission goes
                    beyond training — we strive to inspire, support, and nurture
                    talent from every corner of society. Whether you’re an
                    aspiring athlete or a seasoned professional, ARS Kreedashala
                    provides the platform to reach your full potential
                  </p>
                </Reavel>
                <br />
                <Reavel>
                  <p className="dark:text-white text-slate-700">
                    Whether you're a budding athlete chasing your dreams, a
                    parent nurturing your child’s potential, or an experienced
                    player striving for excellence, ARS Kreedashala is your
                    home. Embark on a journey of growth, empowerment, and
                    unmatched sportsmanship. Together, we build skills, foster
                    friendships, and shape champions, both on and off the field.
                  </p>
                </Reavel>
              </div>
            </div>
          </FadeInAnimation>
          <FadeInAnimation>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
              <div>
                <img
                  className="md:max-w-md max-w-sm rounded-xl mx-auto"
                  loading="lazy"
                  src="https://i.ibb.co/fNdjqvS/offer.webp"
                  alt=""
                />
              </div>
              <div>
                <div className="dark:text-white text-slate-700">
                  <Reavel>
                    <p className="font-bold text-xl mb-2">What We Offer:</p>
                  </Reavel>
                  <ul className="list-disc ps-6">
                    <Reavel>
                      <li className="list-item-gap">
                        <span className="font-semibold">Expert Coaching:</span>{" "}
                        Our team of seasoned coaches and trainers is committed
                        to unlocking the full potential of every athlete. With
                        expertise across a diverse range of sports — including
                        soccer, basketball, swimming, and athletics — we tailor
                        our coaching to meet individual goals and elevate
                        performance. At ARS Kreedashala, you're not just
                        training; you're mastering your craft.
                      </li>
                    </Reavel>

                    <Reavel>
                      {" "}
                      <li className="list-item-gap">
                        <span className="font-semibold">
                          State-of-the-Art Facilities:
                        </span>{" "}
                        {""}
                        Our top-tier facilities are built to fuel athletic
                        excellence. Equipped with the latest technology and
                        meticulously maintained fields and courts, we provide
                        athletes with everything they need to train, compete,
                        and succeed. At ARS Kreedashala, we leave no stone
                        unturned in creating the perfect environment for peak
                        performance.
                      </li>
                    </Reavel>

                    <Reavel>
                      <li className="list-item-gap">
                        <span className="font-semibold">
                          Sportsmanship and Values:
                        </span>{" "}
                        At ARS Kreedashala, we believe sports are more than just
                        competition — they are a path to building character. Our
                        programs are crafted to cultivate values like
                        discipline, teamwork, and perseverance, helping athletes
                        grow not only in skill but also in mindset and
                        integrity.
                      </li>
                    </Reavel>
                    <Reavel>
                      <li className="list-item-gap">
                        <span className="font-semibold">
                          Community and Support:
                        </span>{" "}
                        {""}
                        At ARS Kreedashala, we’re more than a team — we’re a family. Our close-knit community of athletes, parents, and coaches fosters an environment filled with encouragement, support, and camaraderie. Together, we celebrate victories, overcome challenges, and grow stronger.


                      </li>
                    </Reavel>
                  </ul>
                </div>
              </div>
            </div>
          </FadeInAnimation>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
