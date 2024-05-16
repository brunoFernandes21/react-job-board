import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import TimeAgo from "./TimeAgo";

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.length >= 110 ? description.substring(0, 110) + "..." : description;
  }

  let jobTitle = job.title.length >= 30 ? job.title.substring(0, 30) + "..." : job.title


  return (
    <div className="bg-white rounded-xl transition-all ease-in-out duration-500 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:shadow-sky-500 relative dark:bg-slate-700 dark:text-white">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2 dark:text-white">{job.type}</div>
          <h3 className="text-xl text-black font-bold dark:text-white">{jobTitle}</h3>
        </div>
        <div className="mb-5 text-black dark:text-white min-h-20">{description}</div>
        <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-sky-500 mb-4 hover:text-sky-600 dark:text-white">
          {showFullDescription ? "Show Less" : "Show More"}
        </button>
        <h3 className="text-sky-500 mb-4 dark:text-white">{job.salary} / Year</h3>
        <div>
            <span className="flex gap-2 text-gray-500 mb-4 dark:text-white">Posted<TimeAgo timestamp={job.date}/> </span>
          </div>
        <div className="border border-slate-100 mb-4"></div>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3 dark:text-white">
            <FaMapMarkerAlt className="inline text-lg mb-1 mr-1 " />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
export default JobListing;
