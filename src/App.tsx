import "./App.css";
import Navigation from "./components/Navigation";
import People from "./components/People";
import TrendList from "./components/TrendList";

function App() {
  return (
    <>
      <Navigation />

      <div className="flex justify-center">
        {/* main area */}
        <div className="w-[30%]">
          <People />
          <TrendList />
        </div>
      </div>
    </>
  );
}

export default App;
