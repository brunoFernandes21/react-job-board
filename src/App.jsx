import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Jobs from "./features/jobs/JobsPage"
import NotFound from "./pages/NotFound"
import SingleJobPage from "./features/jobs/SingleJobPage"

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/jobs" element={<Jobs/>}/>
      <Route path="/jobs/:postId" element={<SingleJobPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App