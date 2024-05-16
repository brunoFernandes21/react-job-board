import { useDispatch } from "react-redux";
import { sortBy } from "../features/jobs/jobsSlice";
import { FaFolder, FaMapMarkerAlt, FaUser } from "react-icons/fa";

const JobsFilter = () => {
  const dispatch = useDispatch();
  return (
    <section className=" z-10 shadow-xl mb-8 p-2 rounded-lg flex items-center justify-center">
      <p className="text-slate-900 font-bold dark:text-slate-200 mr-24">
        Sort jobs by
      </p>
      <section className="flex items-center">
        <button
          onClick={() => dispatch(sortBy("title"))}
          className="group relative w-36 flex items-center gap-1 text-gray-500"
        >
          <FaUser />
          <span className="text-gray-500 px-2 py-1">Title</span>
          <span className=" absolute group-hover:opacity-90 transition-opacity bg-gray-700 text-white px-4 py-1 rounded opacity-0 mb-20 -left-8">
            Sort By Job Title
          </span>
        </button>

        <button
          onClick={() => dispatch(sortBy("type"))}
          className=" group relative w-36 flex items-center gap-1 text-gray-500"
        >
          <span className="absolute group-hover:opacity-90 transition-opacity bg-gray-700 text-white px-4 py-1 rounded opacity-0 mb-20 -left-8 ">
            Sort By Job Type
          </span>

          <FaFolder />
          <span className="text-gray-500 px-2 py-1">Type</span>
        </button>

        <button
          onClick={() => dispatch(sortBy("location"))}
          className=" group relative w-36 flex items-center gap-1 text-gray-500"
        >
          <span className="absolute group-hover:opacity-90 transition-opacity bg-gray-700 text-white px-4 py-1 rounded opacity-0 mb-20 -left-8 ">
            Sort By Job Location
          </span>
          <FaMapMarkerAlt />
          <span className="text-gray-500 px-2 py-1">Location</span>
        </button>
      </section>
    </section>
  );
};

export default JobsFilter;
