import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";

const TINDER_LOGO_URL =
  "https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header-icon" fontSize="large" />
      </IconButton>
      <Link to="/">
        <img
          className="header-logo"
          src={TINDER_LOGO_URL}
          alt="Tinder Logo"
        ></img>
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header-icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
