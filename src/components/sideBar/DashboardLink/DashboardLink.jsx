import React from "react";
import { Home, Timeline, QueryStats } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

function DashboardLink() {
  const location = useLocation();
  console.log(typeof location.pathname);
  return (
    <div>
      <h3>Dashboard</h3>
      <ul>
        <li>
          <Link
            className={`side-link ${location.pathname == "/" && "active"}`}
            to="/"
          >
            <Home className="icon" />
            Home
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
            <QueryStats className="icon" />
            Sales
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DashboardLink;
