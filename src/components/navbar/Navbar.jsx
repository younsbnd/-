import React from "react";
import "./navbar.scss";
import { IconButton } from "@mui/material";
import { NotificationsNone,Language,Settings } from "@mui/icons-material";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <p>iran8ball</p>
      </div>
      <div className="nav-right">
        <IconButton>
            <NotificationsNone />
            <span>2</span>
        </IconButton>
        <IconButton>
            <Language />
            <span>2</span>
        </IconButton>
        <IconButton>
            <Settings />
        </IconButton>
        <img src="./images/cat.jpg" alt="" />
      </div>
    </div>
  );
}

export default Navbar;
