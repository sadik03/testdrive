import React from 'react';
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import "./TypingEffect.css";
import { Link } from "react-router-dom";
const TypingEffect = () => {
    const [texts] = useTypewriter({
        words:['Football','Cricket','Badminton','Swimming','Volleyball'],
        loop:{},
        typeSpeed:300,
        delaySpeed:80
    })
    return (
      <div className="text-white">
        <h2 className="md:text-6xl text-4xl font-bold" id='ars-text'>
         Ars <span>Kreedashala</span>
        </h2>
        <h4 className="md:text-4xl text-3xl my-5 font-semibold bg-red-500 md:w-4/6 w-11/12 rounded mx-auto py-2.5 px-1">
       
          <Link to={"/comePlay"} >
         Come & Play
              </Link>
        </h4>
        <div className="md:text-3xl text-2xl font-semibold">
          <span>{texts}</span>
          <Cursor cursorStyle="." cursorColor="white" />
        </div>
        <p className="my-3">
          We offer flexible and porous educational pathways, and provide
          academic support, both of which are individually personalised to meet
          your unique needs and aspirations. Because your goals are ours too.
        </p>
        <button className="btn bg-transparent border-2 border-[#68A9D3] text-white px-5 transition-all hover:scale-95 hover:bg-[#68A9D3] hover:border-[#68A9D3]">
Learn More
</button>

      </div>
    );
};

export default TypingEffect;