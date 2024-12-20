import { Route, Routes } from "react-router-dom";
import Admin from "./pages/adminPage/Admin";
import Services from "./components/Services";
import AuthPage from "./pages/authPage/AuthPage";
import LandingPage from "./pages/landingPage/LandingPage";
import EditCategories from "./components/EditCategories";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<AuthPage />} />
        <Route path="dashboard" element={<Admin />} />
        <Route path="services" element={<Services />} />
        <Route path="landing" element={<LandingPage />} />
        <Route path="edit_category" element={<EditCategories />} />
      </Routes>
    </div>
  );
}

export default App;
