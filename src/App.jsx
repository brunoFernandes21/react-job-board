import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Jobs from "./features/jobs/JobsPage"
import NotFound from "./pages/NotFound"
import SingleJobPage from "./features/jobs/SingleJobPage"
import AddNewJobPage from "./features/jobs/AddNewJobPage"

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/jobs" element={<Jobs/>}/>
      <Route path="/jobs/:postId" element={<SingleJobPage/>}/>
      <Route path="/add-new-job" element={<AddNewJobPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App