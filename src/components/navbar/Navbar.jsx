import React from "react";
import "./navbar.scss";
import { IconButton } from "@mui/material";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "../mobileMeni/MobileMenu";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="navbar">
      <MobileMenu open={open} setOpen={setOpen} />
      <div className="nav-left">
        <p>iran8ball</p>
        <IconButton
          color="inherit"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <MenuIcon className="menu-icon" />
        </IconButton>
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
