import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, Top, Api } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top" element={<Top />} />
        <Route path="api" element={<Api />} />
      </Routes>
    </div>
  );
}

export default App;
