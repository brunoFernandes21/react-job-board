import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllJobs } from "../features/jobs/jobsSlice";

const JobsFilter = () => {
  // const [sortBy, setSortBy] = useState(false);
  const [formData, setFormData] = useState({jobType: "" })
  const jobs = useSelector(selectAllJobs);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  // console.log(jobs[0].type);

  const sortJobs = () => {
    console.log(formData);
    if(jobs.length > 0) {
      // const sortedJobs = [...jobs].sort((a, b) => {
      //   return `${a.type.formData < b.type.formData ? -1 : 1}`
      // })
      // console.log(sortedJobs);
    }
  }
  // console.log(formData);


  return (
    <section className="mb-6 flex items-center gap-4">
      <p className="dark:text-white font-bold mr-10">Sort By</p>
      <form className=" flex items-start flex-grow gap-10">
        {/* <div className="flex flex-row gap-4 p-0 h-8">
          <label
            htmlFor="mostRecent"
            className="dark:text-white self-center font-light whitespace-nowrap"
          >
            Most Recent
          </label>
          <input
            type="checkbox"
            name="sortBy"
            id="sortBy"
            value="sortBy"
            onChange={() => setSortBy(!sortBy)}
            checked={sortBy}
            className=" flex self-center mt-5"
          />
        </div> */}
        <div className="flex flex-row gap-4 h-8">
          <label
            htmlFor="full-time"
            className="dark:text-white self-center font-light whitespace-nowrap"
          >
            Full Time
          </label>
          <input
            type="radio"
            name="jobType"
            id="full-time"
            value="Full-Time"
            onChange={handleChange}
            checked={formData.jobType === "Full-Time"}
            className=" flex self-center mt-5"
            onClick={sortJobs}
          />
        </div>

        <div className="flex flex-row gap-4 h-8">
          <label
            htmlFor="part-time"
            className="dark:text-white self-center font-light whitespace-nowrap"
          >
            Part-Time
          </label>
          <input
            type="radio"
            name="jobType"
            id="part-time"
            value="Part-Time"
            onChange={handleChange}
            checked={formData.jobType === "Part-Time"}
            className=" flex self-center mt-5"
            onClick={sortJobs}
          />
        </div>
        <div className="flex flex-row gap-4 h-8">
          <label
            htmlFor="remote"
            className="dark:text-white self-center font-light whitespace-nowrap"
          >
            Remote
          </label>
          <input
            type="radio"
            name="jobType"
            id="remote"
            value="Remote"
            onChange={handleChange}
            checked={formData.jobType === "Remote"}
            className=" flex self-center mt-5"
            onClick={sortJobs}
          />
        </div>
        <div className="flex flex-row gap-4 h-8">
          <label
            htmlFor="hybrid"
            className="dark:text-white self-center font-light whitespace-nowrap"
          >
            Hybrid
          </label>
          <input
            type="radio"
            name="jobType"
            id="hybrid"
            value="Hybrid"
            onChange={handleChange}
            checked={formData.jobType === "Hybrid"}
            className=" flex self-center mt-5"
            onClick={sortJobs}
          />
        </div>
      </form>
    </section>
  );
};

export default JobsFilter;
