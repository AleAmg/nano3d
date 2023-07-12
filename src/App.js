import "./app.css";
import { Route,Routes } from "react-router";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Content/>} />
      </Routes>
    </div>
  );
}

export default App;
