import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAllJobs, selectStatus, fetchJobs } from "../features/jobs/jobsSlice";
import { useEffect, useState } from "react";

const ViewAllJobs = () => {
  const jobs = useSelector(selectAllJobs);


    return (
      <section className="py-10 dark:bg-slate-800 ">
        <div className="max-w-lg m-auto px-6 py-4 ">
          {jobs.length > 0 && <Link
            to="/jobs"
            className="block bg-black text-white text-center py-4 px-6 rounded-xl transition-all ease-in-out duration-300 hover:bg-gray-700 dark:bg-slate-700 dark:text-white dark:hover:bg-sky-500  dark:hover:text-white"
          >
            View More Jobs
          </Link>}
          {!jobs && <p>No jobs yet!</p>}
        </div>
      </section>
    );
};

export default ViewAllJobs;
