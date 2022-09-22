import React from "react";
import "./App.css";
import { NavBarComponent } from "./components/NavBarComponent";
import { GamePageComponent } from "./components/gamepage/GamePageComponent";
import { Route, Routes } from "react-router-dom";
import {CardOverviewComponent} from "./components/cardpage/CardOverview";
import {CardDetail} from "./components/cardpage/CardDetail";

function App() {
  return (
    <div className="App">
      <NavBarComponent></NavBarComponent>
      <Routes>
        <Route path="/" element={<GamePageComponent />} />
        <Route path="/cards" element={<CardOverviewComponent />} />
        <Route path="/cards/:cardId" element={<CardDetail />} />
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
