import React from "react";
import "./widgetSm.scss";
import { Visibility } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { newMembers } from "../../datas";

function WidgetSm() {
  return (
    <div className="widget">
      <div>
        <h2>New Join Members</h2>
      </div>
      {newMembers.map((member) => (
        <div key={member.id} className="widgetSm">
          <div>
            <div>
              <img src={member.img} alt={member.name} />
            </div>
            <div className="widgetSmUser">
              <p>{member.name}</p>
              <p>{member.job}</p>
            </div>
            <div>
              <IconButton>
                <Visibility />
              </IconButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WidgetSm;
