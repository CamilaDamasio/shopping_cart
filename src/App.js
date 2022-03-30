import React from 'react';
import "./styles/App.css";
import down from "./data/data_down";
import up from "./data/data_up";
import InitialPage from "./components/InitialPage";

function App() {
  return (
    <div className="App">
      <InitialPage down={down} up={up} />
    </div>
  );
}

export default App;
