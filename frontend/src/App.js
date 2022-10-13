import './App.css';
import { Routes, Route } from "react-router-dom";
import { FireBase, Home, Top } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top" element={<Top />} />
        <Route path="/firebase" element={<FireBase />} />
      </Routes>
    </div>
  );
}

export default App;
