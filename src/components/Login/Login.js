import React, { useEffect } from "react";
import "./Login.css";
import { getTokenFromUrl, loginUrl } from "../../spotify-api/spotify";
import SpotifyLogo from "./Spotify_Logo_RGB_White.png";

function Login() {
  return (
    <div className="login">
      <img src={SpotifyLogo} alt="Spotify Logo" />
      {/* Spotify Logo */}
      {/* Login with spotify button */}
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
