import React from "react";
import { useDataLayerValue } from "../../../global-context/DataLayer";
import "./Body.css";
import Header from "./Header/Header";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__info-text">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
      <div className="body__icons">
        <PlayCircleFilledIcon className="body__shuffle" />
        <FavoriteIcon fontSize="large"/>
        <MoreHorizIcon />
        

      </div>
      </div>
    </div>
  );
}

export default Body;
