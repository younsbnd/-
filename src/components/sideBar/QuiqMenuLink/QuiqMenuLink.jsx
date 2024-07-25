import React from "react";
import {
  Person,
  PersonAdd,
  Storefront,
  AttachMoney,
  BarChart,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

function QuiqMenuLink() {
  const location = useLocation();
  return (
    <div>
      <h3>Quick Menu</h3>
      <ul>
        <li>
          <Link
            className={`side-link ${location.pathname == "/users" && "active"}`}
            to="/users"
          >
            <Person className="icon" />
            Users
          </Link>
        </li>
        <li>
          <Link
            className={`side-link ${location.pathname == "/new-user" && "active"}`}
            to="/new-user"
          >
            <PersonAdd className="icon" />
            Add New User
          </Link>
        </li>
        <li>
          <Link
            className={`side-link ${location.pathname == "/products" && "active"}`}
            to="/products"
          >
            <Storefront className="icon" />
            Products
          </Link>
        </li>
        <li>
          <Link className="side-link">
            <AttachMoney className="icon" />
            Transactions
          </Link>
        </li>
        <li>
          <Link className="side-link">
            <BarChart className="icon" />
            Reports
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default QuiqMenuLink;
