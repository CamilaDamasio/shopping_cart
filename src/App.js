import "./App.css";
import down from "./data_down";
import DataDownList from "./components/DataDownList";

function App() {
  return (
    <div className="App">
      <DataDownList down={down} />
    </div>
  );
}

export default App;
