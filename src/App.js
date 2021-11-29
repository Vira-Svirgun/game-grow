import React from "react";
import GameControls from "./Components/GameControls/GameControls";
import Board from "./Components/Board/Board";
import HoverSquaresList from "./Components/HoverSquaresList/HoverSquaresList";

import "./App.css";

const App = () => {
  return (
    <main className="App">
      <section>
        <GameControls />
        <Board />
      </section>
      <section>
        <HoverSquaresList />
      </section>
    </main>
  );
};
export default App;
