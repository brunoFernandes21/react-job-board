import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Jobs from "./features/jobs/JobsPage";
import NotFound from "./pages/NotFound";
import SingleJobPage from "./features/jobs/SingleJobPage";
import AddNewJobPage from "./features/jobs/AddNewJobPage";
import EditJobPage from "./features/jobs/EditJobPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:jobId" element={<SingleJobPage />} />
        <Route path="/add-new-job" element={<AddNewJobPage />} />
        <Route path="/edit-job/:jobId" element={<EditJobPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </>
  );
};

export default App;
