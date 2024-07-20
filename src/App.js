import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.scss"
function App() {
  const router = useRoutes(routes);
  return (
    <div>
      <Navbar />
      {router}
    </div>
  );
}

export default App;
