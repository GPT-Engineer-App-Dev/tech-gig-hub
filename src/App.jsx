import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Developers from "./pages/Developers.jsx";
import Messages from "./pages/Messages";
import Conversation from "./pages/Conversation";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/conversation/:developerId" element={<Conversation />} />
      </Routes>
      <Footer />
    </Router>
  );
}
