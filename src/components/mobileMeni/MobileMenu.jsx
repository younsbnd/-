import React from "react";
import "./mobileMenu.scss";
import SideBar from "../sideBar/SideBar";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const MobileMenu = (props) => {
  return (
    <>
      {props.open && (
        <div className="mobileMenu">
          <IconButton
            className="close-icon"
            onClick={() => props.setOpen(false)}
          >
            <CloseIcon color="info" />
          </IconButton>

          <SideBar />
        </div>
      )}
    </>
  );
};

export default MobileMenu;
