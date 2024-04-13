import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import TimeAgo from "./TimeAgo";

const JobListening = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 110) + "...";
  }


  return (
    <div className="bg-white rounded-xl transition-all ease-in-out duration-500 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:shadow-sky-500 relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl text-black font-bold">{job.title}</h3>
          <div>
            <span className="flex gap-2 text-gray-600 my-2">posted<TimeAgo timestamp={job.date}/> </span>
          </div>
        </div>
        <div className="mb-5 text-black">{description}</div>
        <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-sky-500 mb-5 hover:text-sky-600">
          {showFullDescription ? "Show Less" : "Show More"}
        </button>
        <h3 className="text-sky-500 mb-2">{job.salary} / Year</h3>
        <div className="border border-slate-100 mb-5"></div>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarkerAlt className="inline text-lg mb-1 mr-1" />
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

export default JobListening;
