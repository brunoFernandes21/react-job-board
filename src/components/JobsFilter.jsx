import { useDispatch } from "react-redux";
import { sortBy } from "../features/jobs/jobsSlice";
import { FaFolder, FaMapMarkerAlt, FaUser } from "react-icons/fa";

const JobsFilter = () => {
  const dispatch = useDispatch();
  return (
    <section className="w-[300px] md:w-[650px] lg:w-[950px] mx-auto z-10 shadow-xl mb-8 p-2 rounded-lg flex items-center justify-between">
      <p className="hidden md:block text-slate-900 font-bold dark:text-slate-200 w-36">
        Sort jobs by
      </p>
      <section className="flex items-center justify-end">
        <button
          onClick={() => dispatch(sortBy("title"))}
          className="group relative px-4 md:px-8 flex items-center gap-1 text-gray-500"
        >
          <FaUser className="hidden md:block" />
          <span className="text-gray-500 px-2">Title</span>
          <span className=" absolute group-hover:opacity-90 transition-opacity bg-gray-700 text-white px-4 py-1 rounded opacity-0 mb-20">
            Title
          </span>
        </button>

        <button
          onClick={() => dispatch(sortBy("type"))}
          className=" group relative px-4 md:px-8 flex items-center gap-1 text-gray-500"
        >
          <span className="absolute group-hover:opacity-90 transition-opacity bg-gray-700 text-white px-4 py-1 rounded opacity-0 mb-20">
            Type
          </span>

          <FaFolder className="hidden md:block" />
          <span className="text-gray-500 px-2">Type</span>
        </button>

        <button
          onClick={() => dispatch(sortBy("location"))}
          className=" group relative px-4 md:px-8 flex items-center gap-1 text-gray-500"
        >
          <span className="absolute group-hover:opacity-90 transition-opacity bg-gray-700 text-white px-4 py-1 rounded opacity-0 mb-20">
            Location
          </span>
          <FaMapMarkerAlt className="hidden md:block"/>
          <span className="text-gray-500 px-2">Location</span>
        </button>
      </section>
    </section>
  );
};

export default JobsFilter;
