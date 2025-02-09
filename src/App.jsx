import "./App.css";
import DevList from "./components/DevList";

function App() {
  return (
    <div className="flex flex-col bg-white">
      <h1 className="text-black text-3xl font-bold">
        <b className="text-green-600">Dev</b> list
      </h1>
      <DevList />
      <footer className="text-black text-center mt-6">
        Made with <span className="text-green-600">&hearts;</span> by{" "}
        <b className="text-bold">Farhan</b>
      </footer>
    </div>
  );
}

export default App;
