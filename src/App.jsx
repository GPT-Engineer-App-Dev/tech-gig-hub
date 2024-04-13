import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Developers from "./pages/Developers.jsx";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/developers" element={<Developers />} />
      </Routes>
    </Router>
  );
}
