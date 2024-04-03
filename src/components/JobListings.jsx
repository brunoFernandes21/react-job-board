import JobListing from "./JobListing";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllJobs,
  selectStatus,
  selectError,
  fetchJobs,
} from "../features/jobs/jobsSlice";
import { useEffect } from "react";

const JobListings = () => {
  const jobs = useSelector(selectAllJobs);
  const dispatch = useDispatch();

  const jobStatus = useSelector(selectStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    if (jobStatus === "idle") {
      dispatch(fetchJobs());
    }
  }, [jobStatus, dispatch]);

  let content;

  if (jobStatus === "loading") {
    content = <p className="text-white text-center text-xl">Loading jobs...</p>;
  } else if (jobStatus === "succeeded") {
    const recentJobs = jobs.slice(0, 3);
    content = recentJobs.map((job) => 
    <JobListing key={job.id} job={job} />);
  } else if(jobStatus === 'failed') {
    content = <div className="text-white text-center text-xl">{error}</div>
  }
  return (
    <section className="bg-blue-50 px-4 py-10 dark:bg-slate-800">
      <div className=" lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center dark:text-slate-100">
          Browse Current Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{content}</div>
      </div>
    </section>
  );
};

export default JobListings;
