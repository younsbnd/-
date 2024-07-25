import { ArrowDownward,ArrowUpward } from "@mui/icons-material";
import React from "react";
import "./feature.scss";

function Feature() {
  const features = [
    {
      title: "Analytics",
      money: "$2,000",
      rate: "-2.3",
      icon: <ArrowDownward color="error" />,
      caption: "Compared to last month",
    },
    {
      title: "Sales",
      money: "$3,000",
      rate: "-1.3",
      icon: <ArrowDownward color="error" />,
      caption: "Compared to last month",
    },
    {
      title: "Cost",
      money: "$4,000",
      rate: "+2.3",
      icon: <ArrowUpward color="success" />,
      caption: "Compared to last month",
    },
  ];
  return (
    <div className="feature">
      {features.map((feature) => (
        <div className="featureChild">
          <div>
            <p>{feature.title}</p>
          </div>
          <div className="featureMoney">
            <p>{feature.money}</p>
            <p>{feature.rate}</p>
            {feature.icon}
          </div>
          <div>
            <p>{feature.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feature;
