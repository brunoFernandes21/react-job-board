import JobListing from "./JobListing";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllJobs,
  selectStatus,
  selectError,
  fetchJobs,
} from "../features/jobs/jobsSlice";
import { useEffect } from "react";
import Spinner from "./Spinner";

const JobListings = ( { isHome = false}) => {
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

  // if (jobStatus === "loading") {
  //   content = <Spinner loading={jobStatus}/>
  // } else if (jobStatus === "succeeded") {
  //   const jobListings = isHome ? jobs.slice(0, 3) : jobs;
  //   content = jobListings.map((job) => 
  //   <JobListing key={job.id} job={job} />);
  // } else if(jobStatus === 'failed') {
  //   content = <div className="text-white text-center text-xl">{error}</div>
  // }
  const jobListings = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <section className="bg-blue-50 px-4 py-10 dark:bg-slate-800">
      <div className=" lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center dark:text-slate-100">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {jobStatus === "loading" ? (
          <Spinner loading={jobStatus}/>
        ) : jobStatus === "succeeded" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobListings.map((job) => 
            <JobListing key={job.id} job={job} />)}
          </div>
        ) : jobStatus === 'failed' ? (
          <div className="text-white text-center text-xl">{error}</div>
        ) : ""}
      </div>
    </section>
  );
};

export default JobListings;
