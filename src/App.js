import "./App.css";
import down from "./data_down";
import up from "./data_up";
import DataDownList from "./components/DataDownList";
import DataUpList from "./components/DataUpList";

function App() {
  return (
    <div className="App">
      <DataUpList up={up} />
      <DataDownList down={down} />
    </div>
  );
}

export default App;
