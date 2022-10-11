import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, Top } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top" element={<Top />} />
      </Routes>
    </div>
  );
}

export default App;
