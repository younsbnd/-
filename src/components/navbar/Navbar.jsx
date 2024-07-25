import React from "react";
import "./navbar.scss";
import { IconButton } from "@mui/material";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <p>iran8ball</p>
      </div>
      <div className="nav-right">
        <div>
          <NotificationsNone className="top-icon" />
          <span>2</span>
        </div>
        <div>
          <Language className="top-icon" />
          <span>2</span>
        </div>
        <div>
          <Settings className="top-icon" />
        </div>
        <img src="./images/cat.jpg" alt="" />
      </div>
    </div>
  );
}

export default Navbar;
