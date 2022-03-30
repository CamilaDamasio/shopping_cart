import React from 'react';
import "./styles/App.css";
import down from "./data/data_down";
import up from "./data/data_up";
// import DataDownList from "./components/DataDownList";
// import DataUpList from "./components/DataUpList";
import InitialPage from "./components/InitialPage";

function App() {
  return (
    <div className="App">
      {/* <DataUpList up={up} /> */}
      <InitialPage down={down} up={up} />
      {/* <DataDownList down={down} /> */}
    </div>
  );
}

export default App;
