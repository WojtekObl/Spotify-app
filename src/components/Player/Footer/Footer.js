import React from "react";
import "./Footer.css";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__album-cover"
          src="https://img.discogs.com/ighDUT3b6BCZD4ML-7AVMz_-_bc=/fit-in/600x614/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5819685-1403567380-2260.jpeg.jpg"
          alt="album cover"
        />
        <div className="footer__song-info">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__icon footer__icon--green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineOutlinedIcon
          fontSize="large"
          className="footer__icon"
        />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__icon footer__icon--green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
