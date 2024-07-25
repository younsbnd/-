import React from "react";
import "./sideBar.scss";
import DashboardLink from "./DashboardLink/DashboardLink";
import QuiqMenuLink from "./QuiqMenuLink/QuiqMenuLink";
import NotificationLink from "./NotificationLink/NotificationLink";
import StafLink from "./StaffLink/StaffLink";

function SideBar() {
  return (
    <div className="sideBar">
      <DashboardLink />
      <QuiqMenuLink />
      <NotificationLink />
      <StafLink />
    </div>
  );
}

export default SideBar;
