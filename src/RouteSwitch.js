import { BrowserRouter, Routes, Route } from "react-router-dom";

import Instruction from "./components/Instruction";
import GameMode from "./components/GameMode";
import App from "./App";

function RouteSwitch() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default RouteSwitch;
