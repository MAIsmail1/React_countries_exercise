import './App.css';
import Countries from "./components/Countries";
import VisitedCountries from "./components/VisitedCountries";
function App() {
  return (
    <div className="App">
      <VisitedCountries />
    <Countries />
    </div>
  );
}

export default App;
