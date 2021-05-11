import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import logo from "./Spotify_Logo_RGB_White.png";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue} from '../../../global-context/DataLayer.js'


function Sidebar() {
  const [{playlists}, dispatch] = useDataLayerValue()
  return (
    <div className="sidebar">
      <img className="sidebar__logo" src={logo} alt="spotify logo" />
      <SidebarOption Icon= {HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr className="sidebar__line"/>

      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name} />
        ))}
        <SidebarOption title="Hip-Hop" />
        <SidebarOption title="This is Sanah" />
      
    </div>
  );
}

export default Sidebar;
