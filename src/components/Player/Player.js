import React from "react";
import Body from "./Body/Body.js";
import Sidebar from "./Sidebar/Sidebar.js";
import "./Player.css";
import Footer from "./Footer/Footer.js";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify}/>
      </div>

      <Footer/>
    </div>
  );
}

export default Player;
