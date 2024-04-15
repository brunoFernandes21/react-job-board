import { FaSearch } from "react-icons/fa";
import { fetchJobs,  } from "../features/jobs/jobsSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (search) {
      dispatch(fetchJobs(search));
      setSearch("");
    } 
    console.log(search);
      // toast.warning("Enter a job type or location to start a search");
  };
  //   const handleChange = (event) => {
  //       const { value } = event.target
  //       if (search) {
  //       dispatch(fetchJobs(search));
  //       setSearch("");
  //     }
  //   }

  return (
    <>
      <form onClick={handleSubmit} className="max-w-md w-full md:w-1/2 mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="search"
            id="default-search"
            className=" p-4 ps-10 text-sm text-slate-500 border border-slate-300 rounded-lg bg-sky-50  dark:border-slate-600 dark:placeholder-gray-400 dark:focus:ring-sky-500 dark:focus:border-sky-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            placeholder={`Job type, location or keyword "All"`}
            required
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute right-2 bottom-[5px] bg-sky-700 hover:bg-sky-800 focus:ring-2 focus:outline-none focus:ring-sky-400 font-semibold rounded-lg text-sm px-4 py-3 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-400"
          >
            Find jobs
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBox;
