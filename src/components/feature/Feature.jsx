import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React from "react";
import "./feature.scss";
import { features } from "../../datas";

function Feature() {
  return (
    <div className="feature">
      {features.map((feature) => (
        <div
          key={feature.id}
          className={`featureChild ${feature.id == 2 && "secondFeature"}`}
        >
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
