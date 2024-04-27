import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectJobById,
  selectStatus,
  deleteJobFromFirestore,
  deleteJobFromState,
  selectError,
  fetchJobs,
} from "./jobsSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import {
  FaExclamationTriangle,
  FaArrowCircleLeft,
  FaMapMarkerAlt,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";

const SingleJobPage = () => {
  const { jobId } = useParams();
  const jobStatus = useSelector(selectStatus);
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const navigate = useNavigate();
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const job = useSelector((state) => selectJobById(state, jobId));

  useEffect(() => {
    if (jobStatus === "idle") {
      dispatch(fetchJobs());
    }
  }, [jobStatus, dispatch]);


  const handleDelete = async () => {
    let text = "Are you sure you want to delete this job?";
    if (confirm(text)) {
      try {
        setAddRequestStatus("pending");
        await dispatch(deleteJobFromFirestore(job)).unwrap()
        dispatch(deleteJobFromState(job))
        toast.success("Job Deleted Successfully");
        navigate("/");
      } catch (error) {
        console.error("Unable to delete job", error);
        toast.error("Unable to delete job")
      } finally {
        setAddRequestStatus("idle");
      }
    }
    return;
  };

  // if (!job) {
  //   return (
  //     <section className="flex items-center justify-center p-16 bg-white h-[92vh] dark:bg-slate-800">
  //       <div className="flex flex-col text-center gap-6 max-w-md">
  //         <FaExclamationTriangle className="text-yellow-400 text-6xl mx-auto" />

  //         <h2 className="font-extrabold text-9xl text-slate-700 dark:text-gray-100">
  //           404
  //         </h2>
  //         <p className="text-2xl md:text-3xl dark:text-gray-300">
  //           Sorry, we couldn&apos;t find job.
  //         </p>
  //         <Link
  //           to="/"
  //           className="px-8 py-4 text-xl font-semibold rounded-xl bg-sky-600 text-white hover:bg-sky-700"
  //         >
  //           Back to home
  //         </Link>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section>
      {jobStatus === "loading" ? (
        <Spinner />
      ) : jobStatus === "succeeded" ? (
        <>
          <section>
            <div className="container m-auto py-6 px-6">
              <Link
                to="/jobs"
                className="text-sky-500 hover:text-sky-600 flex items-center hover:underline"
              >
                <FaArrowCircleLeft className="mr-2" />
                Back to Job Listings
              </Link>
            </div>
          </section>

          <section className="bg-sky-50">
            <div className="container m-auto py-10 px-6">
              <div className="grid grid-cols-1 lg:grid-cols-[30%70%] w-full gap-6">
                <main className="lg:order-2">
                  <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                    <div className="text-gray-500 mb-4">{job.type}</div>
                    <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                    <div className="text-gray-500 mb-4 flex items-center justify-center md:justify-start">
                      <FaMapMarkerAlt className="text-orange-700 mr-1" />
                      <p className="text-orange-700">{job.location}</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h3 className="text-sky-800 text-lg font-bold mb-6">
                      Job Description
                    </h3>

                    <p className="mb-4">{job.description}</p>

                    <h3 className="text-sky-800 text-lg font-bold mb-2">
                      Salary
                    </h3>

                    <p className="mb-4">{job.salary} / Year</p>
                  </div>
                </main>

                {/* <!-- Sidebar --> */}
                <section className="lg:order-1">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-6">Company Info</h3>

                    <h2 className="text-2xl">{job.company.name}</h2>

                    <p className="my-2">{job.company.description}</p>

                    <hr className="my-4" />

                    <h3 className="text-xl">Contact Email:</h3>

                    <p className="my-2 bg-sky-100 p-2 font-bold">
                      {job.company.contactEmail}
                    </p>

                    <h3 className="text-xl">Contact Phone:</h3>

                    <p className="my-2 bg-sky-100 p-2 font-bold">
                      {" "}
                      {job.company.contactPhone}
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                    <Link
                      to={`/edit-job/${job.id}`}
                      className="flex items-center justify-center gap-2  bg-sky-500 hover:bg-sky-600 transition ease-in-out duration-300 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4"
                    >
                      <FaEdit />
                      <span>Edit Job</span>
                    </Link>
                    <button
                      onClick={handleDelete}
                      className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white transition ease-in-out duration-300 font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4"
                    >
                      <FaTrashAlt />
                      <span>Delete Job</span>
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </>
      ) : jobStatus === "failed" ? (
        <div className="text-white text-center text-xl">{error}</div>
      ) : (
        "No Job found"
      )}
    </section>
  );
};

export default SingleJobPage;
