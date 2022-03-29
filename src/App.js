import "./App.css";
import down from "./data_down";
import DataDownLibrary from "./components/DataDownLibrary";

function App() {
  return (
    <div className="App">
      <DataDownLibrary down={down} />
    </div>
  );
}

export default App;
