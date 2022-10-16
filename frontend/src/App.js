import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, Top, Api, FireStore, Add, Show } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="top" element={<Top />} />
        <Route path="api" element={<Api />} />
        <Route path="firestore" element={<FireStore />}>
          <Route path="add" element={<Add />} />
          <Route path="show" element={<Show />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
