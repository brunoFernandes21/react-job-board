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

const JobListings = ({ isHome = false }) => {
  const jobs = useSelector(selectAllJobs);
  const dispatch = useDispatch();
  // console.log(jobs);

  const jobStatus = useSelector(selectStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    if (jobStatus === "idle") {
      dispatch(fetchJobs());
    }
  }, [jobStatus, dispatch]);

  let content;
  if (jobStatus === "loading") {
    content = <Spinner text="loading..." loading={jobStatus} />;
  } else if (jobStatus === "succeeded") {
    const sortedJobs = jobs.slice().sort((a, b) => {
      return b.date.localeCompare(a.date);
    });
    const jobListings = isHome ? sortedJobs.slice(0, 3) : sortedJobs;
    content = (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {jobListings.map((job) => (
          <JobListing key={job.id} job={job} />
        ))}
      </div>
    );
  } else if (jobStatus === "failed") {
    content = (<div className="text-white text-center text-xl">{error}</div>);
  }


  return (
    <section className="bg-sky-50 px-4 py-10 dark:bg-slate-800">
      <div className=" lg:container m-auto">
        <h2 className="text-3xl font-bold text-sky-600 mb-6 text-center dark:text-slate-100">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {jobs.length === 0 && <p className="text-center text-xl dark:text-white">No jobs found. Search again</p>}
        {jobs.length > 0 && content}
      </div>
    </section>
  );
};

export default JobListings;
