import JobListing from "./JobListing";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  selectAllJobs,
  selectStatus,
  selectError,
  fetchJobs,
} from "./jobsSlice";
import { useEffect } from "react";
import Spinner from "../../components/Spinner";
import JobsFilter from "../../components/JobsFilter";
//TODO: ADD DIFFERENT BUTONS FOR EACH FILTER AND DISPATCH THE SAME REDUCER ACTION TO EACH BUTTON ON CLICK. THEN IN SLICE, FILTER THE JOBS BASED ON THE PAYLOAD. 
const JobListings = ({ isHome = false }) => {
  const jobs = useSelector(selectAllJobs);
  const dispatch = useDispatch();
  const jobStatus = useSelector(selectStatus);
  const error = useSelector(selectError);

  useEffect(() => {
      dispatch(fetchJobs());
  }, []);

  let content;
  if (jobStatus === "loading") {
    content = <Spinner text="loading..." loading={jobStatus} />;
  } else if (jobStatus === "succeeded") {
    const jobListings = isHome ? jobs.slice(0, 3) : jobs;
    content = (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {jobListings.map((job) => (
          <JobListing key={job.id} job={job} />
        ))}
      </div>
    );
  } else if (jobStatus === "failed") {
    content = (<div className="text-red-500 dark:text-white text-center text-xl">Access Denied!</div>);
  }

  return (
    <section className="bg-sky-50 px-4 py-10 dark:bg-slate-800">
      <div className=" lg:container m-auto">
        <h2 className="text-3xl font-bold text-sky-600 mb-6 text-center dark:text-slate-100">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {!isHome && <JobsFilter/>}
        {/* {jobs.length === 0 && <p className="text-center text-xl dark:text-white">No jobs found. Search again</p>} */}
        {content}
      </div>
    </section>
  );
};

export default JobListings;
