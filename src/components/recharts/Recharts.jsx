import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "./recharts.scss";
function Recharts({ title, data, grid, dataKey, width = "100%" }) {
  return (
    <div className="chart">
      <h2>{title}</h2>
      <ResponsiveContainer width={width} aspect={4}>
        <LineChart data={data}>
          <Line type="natural" dataKey={dataKey} stroke="#8884d8" />
          {grid && <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />}
          <XAxis dataKey="name" stroke="#5550bd" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Recharts;
