import React from "react";
import "./App.css";
import { NavBarComponent } from "./components/NavBarComponent";
import { GamePageComponent } from "./components/gamepage/GamePageComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route>
          <div className="App">
            <NavBarComponent></NavBarComponent>
            <GamePageComponent />
          </div>
        </Route>
        <Route></Route>
      </Routes>
  );
}

export default App;
