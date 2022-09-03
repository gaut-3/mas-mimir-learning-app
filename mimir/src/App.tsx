import React from 'react';
import './App.css';
import {NavBarComponent} from "./components/NavBarComponent";
import {GamePageComponent} from "./components/gamepage/GamePageComponent";

function App() {
    return (
        <div className="App">
            <NavBarComponent></NavBarComponent>
            <GamePageComponent></GamePageComponent>
        </div>
    );
}

export default App;
