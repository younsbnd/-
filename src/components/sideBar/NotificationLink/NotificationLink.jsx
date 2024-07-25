import React from "react";
import { MailOutline ,DynamicFeed, ChatBubbleOutline} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Notification() {
  return (
    <div>
      <h3>Notifaction</h3>
      <ul>
        <li>
          <Link className="side-link" to="/">
            <MailOutline className="icon" />
            Mail
          </Link>
        </li>
        <li>
          <Link className="side-link">
            <DynamicFeed className="icon" />
            Feedback
          </Link>
        </li>
        <li>
          <Link className="side-link">
            <ChatBubbleOutline className="icon" />
            Message
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Notification;
