import React from "react";
import Feature from "../../components/feature/Feature";
import Recharts from "../../components/recharts/Recharts";
import { rechartsData } from "../../datas";
import WidgetSm from "../../components/widgetSm/WidgetSm";

function Home() {
  return (
    <div>
      <Feature />
      <Recharts grid title={"Month Sale"} data={rechartsData} dataKey="sales" />
      <WidgetSm />
    </div>
  );
}

export default Home;
