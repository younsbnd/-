import React from "react";
import Feature from "../../components/feature/Feature";
import Recharts from "../../components/recharts/Recharts";
import { rechartsData } from "../../datas";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

function Home() {
  return (
    <div>
      <Feature />
      <Recharts grid title={"Month Sale"} data={rechartsData} dataKey="sales" />
      <div className="widgetContainer">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
