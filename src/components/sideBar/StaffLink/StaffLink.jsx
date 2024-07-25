import React from "react";
import {WorkOutline,Timeline,Report } from "@mui/icons-material";
import { Link } from "react-router-dom";

function StafLink() {
  return (
    <div>
      <h3>Staff</h3>
      <ul>
        <li>
          <Link className="side-link" to="/">
            <WorkOutline className="icon" />
            Manage
          </Link>
        </li>
        <li>
          <Link className="side-link">
            <Timeline className="icon" />
            Analytics
          </Link>
        </li>
        <li>
          <Link className="side-link">
            <Report className="icon" />
            Reports
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default StafLink;
