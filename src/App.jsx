import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landingPage/Landing";
import Admin from "./pages/adminPage/Admin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="dashboard" element={<Admin />} />\
      </Routes>
    </div>
  );
}

export default App;
