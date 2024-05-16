import { useSelector, useDispatch } from "react-redux";
import { sortByJobTitle, sortByJotType } from "../features/jobs/jobsSlice";
import { FaFolder } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
const JobsFilter = () => {
  const dispatch = useDispatch()
  return (
    <section className=" z-10 shadow-xl mb-8 p-2 rounded-lg flex items-center justify-center">
      <p className="text-slate-900 font-black dark:text-slate-200 mr-24">Sort jobs by</p>
      <section className="flex items-center">
        <button
          onClick={() => dispatch(sortByJobTitle("title"))}
          className="group relative w-36 flex items-center gap-2 text-gray-500"
        >
          <FaFolder />
          <span className="text-gray-500 px-2 py-1">title</span>
          <span className=" absolute group-hover:opacity-90 transition-opacity bg-gray-700 text-white px-4 py-1 rounded opacity-0 mb-20 -left-8">
            Sort By Job Title
          </span>
        </button>

        <button
          // onClick={byJobType}
          className=" group relative w-36 flex items-center gap-2 text-gray-500"
        >
          <span className="absolute group-hover:opacity-90 transition-opacity bg-gray-700 text-white px-4 py-1 rounded opacity-0 mb-20 -left-8 ">
            Sort By Job Type
          </span>
          <FaUser />
          <span className="text-gray-500 px-2 py-1">type</span>
        </button>
      </section>
      
      {/* add difrent btns here */}
    </section>
  );
};

export default JobsFilter;
