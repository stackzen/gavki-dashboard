import {Avatar, Divider, IconButton, Tooltip} from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GroupIcon from "@mui/icons-material/Group";
import {useNavigate} from "react-router-dom";

import headerLogo from "../../../static/gavki_logo.png";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

const Header = () => {
  let navigate = useNavigate();

  return (
    <div className="header">
      {/* Logo */}
      <img
        src={headerLogo}
        alt="header"
        className="header__title"
        onClick={() => navigate("", {replace: true})}
      />
      {/* Seach Bar */}
      <SearchBar />
      {/* Profile */}
      <div className="header_profileContainer">
        <div className="header_profile">
          <Avatar alt="Viral Sanghavi" src="/static/images/avatar/1.jpg" />
          <p className="header_username">Viral Sanghavi</p>
        </div>
        <div className="header_divider">
          <Tooltip title="Vendors">
            <IconButton sx={{ml: 1}}>
              <GroupIcon fontSize="small" sx={{color: "#b6c1de"}} />
            </IconButton>
          </Tooltip>
          <Divider sx={{height: 28, m: 0.5}} orientation="vertical" />
          <Tooltip title="Notifications">
            <IconButton type="submit" aria-label="search">
              <NotificationsIcon sx={{color: "#b6c1de"}} fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Header;
