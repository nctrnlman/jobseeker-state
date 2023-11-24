import Candidate from "./pages/Candidate";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Candidate />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
