import React, { useState } from "react";

import SportsProgrammes from "./Pages/Home/SportsProgrammes/SportsProgrammes";
import Navbar from "./Pages/Shared/Navbar/Navbar";


const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Navbar  setSearchQuery={setSearchQuery} />
      <SportsProgrammes searchQuery={searchQuery} />
    </>
  );
};

export default App;