

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Cards.css"

const sportsData = [
  { id: 1, name: "Football", description: "Team sport played with a spherical ball", place: "Stadium A", rate:  500, image: "https://i.pinimg.com/736x/dd/74/e4/dd74e4cfc114acde909d20af9eab8c7a.jpg" },
  { id: 2, name: "Basketball", description: "Played by two teams of five players on a rectangular court", place: "Arena B", rate: 4000, image: "https://cdn.britannica.com/44/193844-050-11485B18/ball-net-basketball-game-arena.jpg" },
  { id: 3, name: "Tennis", description: "Racket sport that can be played individually or in pairs", place: "Court C", rate: 3000, image: "https://www.wbs.ac.uk/sites/wbs2020/cache/file/57F11F62-A223-644C-F600F8EAB5706993_W1600_H724.jpg" },
  { id: 4, name: "Baseball", description: "Bat-and-ball game played between two teams of nine players each", place: "Field D", rate: 405, image: "https://cdn.britannica.com/87/237587-050-8A4B9F08/Shohei-Ohtani-Los-Angeles-Angels-pitcher-baseball-player-2022.jpg" },
  // { id: 5, name: "Volleyball", description: "Team sport played by two teams of six players each, separated by a net", place: "Court E", rate: "$35", image: "https://example.com/images/volleyball.jpg" },
  // { id: 6, name: "Rugby", description: "Contact team sport that originated in England", place: "Stadium F", rate: "$55", image: "https://example.com/images/rugby.jpg" },
  { id: 7, name: "Cricket", description: "Bat-and-ball game played between two teams of eleven players each", place: "Ground G", rate: 8900, image: "https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w960/f_auto/primary/huomflpjgrejkr1oi1sl.jpg" },
  { id: 8, name: "Golf", description: "Club-and-ball sport where players aim to hit the ball into a series of holes on a course", place: "Course H", rate:  700, image: "https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w960/f_auto/primary/qagircculw5pdn06h9ey.jpg" },
  { id: 9, name: "Swimming", description: "Individual or team sport involving movement through water", place: "Pool I", rate: 2805, image: "https://img.olympicchannel.com/images/image/private/t_16-9_1920/f_auto/primary/alonzk8iknqfy2ydtzet.jpg" },
  { id: 10, name: "Boxing", description: "Combat sport in which two people fight each other using their fists", place: "Arena J", rate: 965, image: "https://img.olympics.com/images/image/private/t_16-9_1280/f_auto/primary/a9wzs5ok1wvhs9lro140.jpg" }
];

const PlayCards = () => {
  const navigate = useNavigate();

  const handleCardClick = (sport) => {
    navigate(`/sports/${sport.id}`, { state: sport });
  };
  return (
    <div className="cards-container-wrapper  bg-blue-100 dark:bg-gray-800 pb-10 lg:pb-20">
    <h1 className="cards-title dark:text-white text-slate-700">ComePlay</h1>
    <div className="cards-grid">
  
      

      {sportsData.map((sport) => (
        <motion.div
          key={sport.id}
          className="card"
          onClick={() => handleCardClick(sport)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <img src={sport.image} alt={sport.name} className="card-image" />
          <h3>{sport.name}</h3>
          <p>{sport.description}</p>
          <p><strong>Location:</strong> {sport.place}</p>
          <p><strong>Rate:</strong> {sport.rate}</p>
        </motion.div>
      ))}
    </div>

</div>
  );
};

export default PlayCards;