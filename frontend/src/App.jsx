import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
