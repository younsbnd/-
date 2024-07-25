import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.scss";
import SideBar from "./components/sideBar/SideBar";
function App() {
  const router = useRoutes(routes);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="sideBar-app">
          <SideBar />
        </div>
        <div className="router-app">{router}</div>
      </div>
    </div>
  );
}

export default App;
