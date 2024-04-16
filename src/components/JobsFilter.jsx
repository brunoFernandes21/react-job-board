import { useSelector } from "react-redux";
import { searchKeywords } from "../features/jobs/jobsSlice";
import { FaSearch } from "react-icons/fa";

const JobsFilter = ({ search, toggleKeyWordList }) => {
  const searchValues = useSelector(searchKeywords);

  const filteredKeywords = searchValues.filter((keyword) =>
    keyword.toLowerCase().includes(search)
  );

  const keyworkList = filteredKeywords.map((item) => {
    return (
      <ul key={item} className="p-4 border-b hover:bg-slate-100 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:shadow-sky-500 rounded-md ">
        <li
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => toggleKeyWordList(item)}
        >
          <FaSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          {item}
        </li>
      </ul>
    );
  });

  return (
    <section className=" z-10 w-[350px] bg-white rounded-md -mt-3 -ml-24 shadow-xl">
      <div className="">{keyworkList}</div>
    </section>
    // <section className="mb-6 flex items-center gap-4">
    //   <p className="dark:text-white font-bold mr-10">Sort By</p>
    //   <form className=" flex items-start flex-grow gap-10">
    //     {/* <div className="flex flex-row gap-4 p-0 h-8">
    //       <label
    //         htmlFor="mostRecent"
    //         className="dark:text-white self-center font-light whitespace-nowrap"
    //       >
    //         Most Recent
    //       </label>
    //       <input
    //         type="checkbox"
    //         name="sortBy"
    //         id="sortBy"
    //         value="sortBy"
    //         onChange={() => setSortBy(!sortBy)}
    //         checked={sortBy}
    //         className=" flex self-center mt-5"
    //       />
    //     </div> */}
    //     <div className="flex flex-row gap-4 h-8">
    //       <label
    //         htmlFor="full-time"
    //         className="dark:text-white self-center font-light whitespace-nowrap"
    //       >
    //         Full Time
    //       </label>
    //       <input
    //         type="radio"
    //         name="jobType"
    //         id="full-time"
    //         value="Full-Time"
    //         onChange={handleChange}
    //         checked={formData.jobType === "Full-Time"}
    //         className=" flex self-center mt-5"
    //         onClick={sortJobs}
    //       />
    //     </div>

    //     <div className="flex flex-row gap-4 h-8">
    //       <label
    //         htmlFor="part-time"
    //         className="dark:text-white self-center font-light whitespace-nowrap"
    //       >
    //         Part-Time
    //       </label>
    //       <input
    //         type="radio"
    //         name="jobType"
    //         id="part-time"
    //         value="Part-Time"
    //         onChange={handleChange}
    //         checked={formData.jobType === "Part-Time"}
    //         className=" flex self-center mt-5"
    //         onClick={sortJobs}
    //       />
    //     </div>
    //     <div className="flex flex-row gap-4 h-8">
    //       <label
    //         htmlFor="remote"
    //         className="dark:text-white self-center font-light whitespace-nowrap"
    //       >
    //         Remote
    //       </label>
    //       <input
    //         type="radio"
    //         name="jobType"
    //         id="remote"
    //         value="Remote"
    //         onChange={handleChange}
    //         checked={formData.jobType === "Remote"}
    //         className=" flex self-center mt-5"
    //         onClick={sortJobs}
    //       />
    //     </div>
    //     <div className="flex flex-row gap-4 h-8">
    //       <label
    //         htmlFor="hybrid"
    //         className="dark:text-white self-center font-light whitespace-nowrap"
    //       >
    //         Hybrid
    //       </label>
    //       <input
    //         type="radio"
    //         name="jobType"
    //         id="hybrid"
    //         value="Hybrid"
    //         onChange={handleChange}
    //         checked={formData.jobType === "Hybrid"}
    //         className=" flex self-center mt-5"
    //         onClick={sortJobs}
    //       />
    //     </div>
    //   </form>
    // </section>
  );
};

export default JobsFilter;
