import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landingPage/Landing";
import Admin from "./pages/adminPage/Admin";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="dashboard" element={<Admin />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
