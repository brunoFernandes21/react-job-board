import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Jobs from "./pages/JobsPage"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/jobs" element={<Jobs/>}/>
      <Route path="*" element={<NotFound/>}/>
      
    </Routes>
    </>
  )
}

export default App