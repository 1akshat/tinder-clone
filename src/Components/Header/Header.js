import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const TINDER_LOGO_URL =
  "https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png";

const Header = ({ backButton }) => {
  const history = useHistory();

  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon className="header-icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header-icon" fontSize="large" />
        </IconButton>
      )}
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
