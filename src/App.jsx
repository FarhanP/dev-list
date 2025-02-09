import "./App.css";
import DevList from "./components/DevList";

function App() {
  return (
    <div className="flex bg-white flex-col gap-8">
      <h1 className="text-black text-3xl font-bold">
        <b className="text-green-600">Dev</b> list
      </h1>
      <DevList />
    </div>
  );
}

export default App;
