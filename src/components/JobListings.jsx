import jobs from "../jobs.json";
import JobListing from "./JobListing";

const JobListings = () => {
  const recentJobs = jobs.slice(0, 3);
  const allJobs = recentJobs.map((job) => (
    <JobListing key={job.id} job={job} />
  ));
  return (
    <section className="bg-blue-50 px-4 py-10 dark:bg-slate-800">
      <div className=" lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center dark:text-slate-100">
          Browse Current Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{allJobs}</div>
      </div>
    </section>
  );
};

export default JobListings;
