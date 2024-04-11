import React from 'react'
import { selectJobById } from './jobsSlice'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const EditJobPage = () => {
    const { jobId } = useParams()
    const job = useSelector((state) => selectJobById(state, jobId))
    console.log(job);

  return (
    <div>
        {job.id}
    </div>
  )
}

export default EditJobPage