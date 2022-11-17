import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import Header from "./components/pages/Header";
import LandingSwitchBoard from "./components/pages/LandingSwitchBoard";




const App = () => {

  const location = useLocation();
  const detected = window.innerWidth;
  const [isMobile, detectMobile] = useState(false);
  if (!isMobile && detected <= 750) {
    console.log("less", detected);
    detectMobile(true);
  }


return (
  <div className="main_container">
    {/* <Header /> */}
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<LandingSwitchBoard isMobile={isMobile} />} />
      </Routes>


  </div>
)
}






export default App
