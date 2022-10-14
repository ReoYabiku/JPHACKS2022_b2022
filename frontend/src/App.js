import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, Top, FireStore, Add, Get } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="top" element={<Top />} />
        <Route path="firestore" element={<FireStore />}>
          <Route path="add" element={<Add />} />
          <Route path="get" element={<Get />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
