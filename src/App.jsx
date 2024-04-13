import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index.jsx";
import Developers from "./pages/Developers.jsx";
import Messages from "./pages/Messages";
import Conversation from "./pages/Conversation";
import Jobs from "./pages/Jobs";
import JobForm from "./components/JobForm";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export function App() {
  const [jobs, setJobs] = useState([]);

  const handleJobSubmit = (job) => {
    setJobs([...jobs, job]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/conversation/:developerId" element={<Conversation />} />
        <Route path="/jobs" element={<Jobs jobs={jobs} />} />
        <Route path="/post-job" element={<JobForm onSubmit={handleJobSubmit} />} />
      </Routes>
      <Footer />
    </Router>
  );
}
