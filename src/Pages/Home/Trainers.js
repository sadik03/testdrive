import React, { useEffect, useRef } from "react";
import { TweenMax, gsap } from "gsap";
import { Button } from "../Button";
import "./Trainers.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Trainers() {
  let cor = useRef(null);
  useEffect(() => {

   
  





    gsap.to(cor, {
      delay: 0.4,
      duration: 1,
      x: "0",
      y: "0",
      opacity: 1,
      ease: "ease-in",
      scrollTrigger: {
        trigger: cor,
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "restart complete",
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
  }, []);
  let corri = useRef(null);
  useEffect(() => {
    gsap.to(corri, {
      delay: 0.4,
      duration: 1,
      x: "0",
      y: "0",
      opacity: 1,
      stagger: 0.4,
      ease: "ease-in",
      scrollTrigger: {
        trigger: corri,
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "restart complete ",
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
  }, []);

  let newv = useRef([]);
  useEffect(() => {
    TweenMax.to(newv.current, {
      delay: 0.4,
      duration: 1,
      y: "0",
      opacity: 1,
      stagger: 0.0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".why--container--wrapper",
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "restart complete ",
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
  }, []);

  return (
    <>
      <div className="head-text">
        <h1 className="text-white" >Trainers</h1>
      </div>
      {/*<h1 className="hi">Trainers</h1>*/}
      <div className="fet--contain">
        <div className="head">
          <h2 className="text-white"   >Why Ars Trainers?</h2>
          <div className="underline"></div>
          <div >
            <p className="parag">
            Kreedshala trainers provide expert sports education, ensuring students receive high-quality training that promotes fitness, discipline, and teamwork. They make sports accessible to all, blending theory and practice to foster holistic development and life skills.
Ars Kreedashala Personal Trainers are highly qualified and personalize fitness programs to suit each individual’s needs, regardless of fitness level or experience. Our trainers specialize in areas like weight loss, injury rehabilitation, sports training, and strength building. They guide you through proper techniques, motivate you, and ensure you achieve your goals safely and effectively.

            </p>
          </div>
        </div>
      </div>
      <div className="welcome">
        <img
          src="https://aajatexas.org/wp-content/uploads/2019/05/470333845-56a2b67c5f9b58b7d0cdadd3.jpg"
          alt="Fitzen gym"
          ref={(el) => {
            cor = el;
          }}
        />
        <div
          className="welcome--headline"
          ref={(el) => {
            corri = el;
          }}
        >
          <h3>Welcome to Personal Training by Ars Kreedashala</h3>
          <p>
            Ars Kreedashala Personal Trainers are highly qualified and take
            pride in treating every member as an individual. We understand that
            different training methods suit different people so no matter what
            your level of fitness or experience, a Personal Trainer can tailor a
            program, show you best training practices and how to use gym
            equipment, inspiring and motivating you along the way.{" "}
          </p>
          <p>
            We have trainers who specialize in all areas of fitness including
            weight loss, injury rehabilitation, sports training, core and
            strength training. Working with a Personal Trainer is no doubt the
            fastest and safest way to get the results you want.
          </p>
          <p>
            <strong>
              <em>For best results, choose Personal Training by Ars.</em>
            </strong>
          </p>
        </div>
      </div>
      <div className="why-t">
        <h3 className="text-white">Why Personal Trainer</h3>
        <div className="underline"></div>
        <div className="why--container">
          <div
            className="why--container--wrapper"
            ref={(el) => {
              newv.current[0] = el;
            }}
          >
            <img
              className="side-images"
              src="https://images.unsplash.com/photo-1536922246289-88c42f957773?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=904&q=80"
              alt="Fitzen gym"
            />
            <div className="welcome--headline">
              <h3>Mission</h3>
              <p className="para-1">
              Kreedshala's mission is to integrate high-quality sports education into the core of every child's learning experience. By delivering a structured curriculum that promotes physical fitness, discipline, and teamwork, Kreedshala aims to foster holistic development and empower students with skills for success both in sports and life.
              </p>
              
            </div>
          </div>
          <div
            className="why--container--wrapper"
            ref={(el) => {
              newv.current[1] = el;
            }}
          >
            <img
              className="side-images"
              src="https://assets-varnish.triblive.com/2020/12/3331939_web1_AP19268035698746.jpg"
              alt="choose personal trainer by Fitzen"
            />
            <div className="welcome--headline">
              <h3>Vision</h3>
              <p>
              Kreedshala envisions a future where sports education is a fundamental part of every child's growth, shaping well-rounded individuals who are physically fit, mentally resilient, and equipped with values like perseverance and collaboration to excel in all areas of life.
              </p>
              
            </div>
          </div>
        </div>
      </div>
      <div className="challenge">
        <div className="challenge--container">
          {/* <div className="challenge--headline">
            <h3>Challenges</h3>
            <p>
              Challenge yourself and your friends and make sure you to share
              your workout with us
            </p>
          </div> */}
          <div className="middle">
            {/* <Button buttonStyle="btn--primary" buttonSize="btn--large">
              View Challenges{" "}
            </Button>{" "} */}
          </div>
        </div>
      </div>

      <div className="refer">
        <div className="title-text">
          <h2>Our Personal Trainers</h2>
          <div className="underline"></div>
          <div className="refer--headline">
            <p>
              All our Personal Trainers are internationally accredited with male
              and female trainers from different nationalities to suit your
              preference.
            </p>
          </div>
        </div>
        <span className="memb--but">
          <button className="btn-footer">
            View Personal Trainers{" "}
          </button>{" "}
        </span>
      </div>
    </>
  );
}
