import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectJobById } from "./jobsSlice"

const JobPage = () => {
  const { postId } = useParams()
  const job = useSelector(state => selectJobById(state, postId))
  console.log(job);
  return (
    <div>JobPage</div>
  )
}

export default JobPage