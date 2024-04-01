import { Link } from "react-router-dom";

const ViewAllJobs = () => {
  return (
    <section className="py-10 dark:bg-slate-800">
      <div className="max-w-lg m-auto px-6">
        <Link
          to="/jobs"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl transition-all ease-in-out duration-300 hover:bg-gray-700 dark:bg-white dark:hover:bg-blue-500 dark:text-slate-900 dark:hover:text-white"
        >
          View All Jobs
        </Link>
      </div>
    </section>
  );
};

export default ViewAllJobs;
