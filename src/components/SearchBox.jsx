import { FaSearch } from "react-icons/fa";
import { fetchJobs,  } from "../features/jobs/jobsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import { IoMdCloseCircle } from "react-icons/io";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [showList, setShowList] = useState(false)
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target
    setSearch(value)
    setShowList(true)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (search) {
      dispatch(fetchJobs(search));
      setSearch("");
    } else {
      toast.warning("Enter a job type or location to start a search");
    }
  };
  const toggleKeyWordList = (item) => {
    setSearch(item)
    setShowList(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md w-full md:w-1/2 mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="search"
            id="default-search"
            className=" p-4 ps-10 text-sm text-slate-500 border border-slate-300 rounded-lg bg-sky-50 dark:border-slate-400 dark:bg-slate-600 dark:placeholder-gray-200 dark:text-slate-200 dark:focus:ring-sky-500 dark:focus:border-sky-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            placeholder="Search jobs..."
            // required
            value={search}
            onChange={handleChange}
          />
          {search && <IoMdCloseCircle className="absolute cursor-pointer -mt-14 right-28 text-xl text-slate-500 dark:text-slate-200" onClick={() => setSearch("")}/>}

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
