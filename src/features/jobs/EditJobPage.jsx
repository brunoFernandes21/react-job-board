import { useEffect, useState } from "react";
import {
  selectJobById,
  updatedJobInFirestore,
  selectStatus,
  fetchJobs,
  selectError,
  updateJobInState,
} from "./jobsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";

const EditJobPage = () => {
  const { jobId } = useParams();
  const job = useSelector((state) => selectJobById(state, jobId));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jobStatus = useSelector(selectStatus);
  const error = useSelector(selectError);

  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  useEffect(() => {
    if (jobStatus === "idle") {
      dispatch(fetchJobs());
    }
  }, [jobStatus, dispatch]);

  const [formData, setFormData] = useState({
    title: job.title,
    type: job.type,
    description: job.description,
    location: job.location,
    salary: job.salary,
    date: "",
    companyName: job.company.name,
    companyDescription: job.company.description,
    contactEmail: job.company.contactEmail,
    contactPhone: job.company.contactPhone,
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const formIsValid =
    formData.title !== job.title ||
    formData.type !== job.type ||
    formData.description !== job.description ||
    formData.location !== job.location ||
    formData.salary !== job.salary ||
    formData.companyName !== job.company.name ||
    formData.companyDescription !== job.company.description ||
    formData.contactEmail !== job.company.contactEmail ||
    formData.contactPhone !== job.company.contactPhone;

  const handleUpdate = async (event) => {
    event.preventDefault();
    const updatedJob = {
      id: job.id,
      title: formData.title,
      type: formData.type,
      salary: formData.salary,
      location: formData.location,
      description: formData.description,
      date: new Date().toISOString(),
      company: {
        name: formData.companyName,
        description: formData.companyDescription,
        contactEmail: formData.contactEmail,
        contactPhone: formData.contactPhone,
      },
    };
    if (formIsValid) {
      try {
        setAddRequestStatus("pending");
        await dispatch(updatedJobInFirestore(updatedJob)).unwrap();
        dispatch(updateJobInState(updatedJob));
        toast.success("Job Updated Successfully");
        navigate(`/jobs/${job.id}`);
      } catch (error) {
        console.error("Unable to update job", error.message);
        toast.error("Unable to update job")
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <section>
      {jobStatus === "loading" ? (
        <Spinner/>
      ) : jobStatus === "succeeded" ? (
        <>
      <section className="bg-sky-50">
        <div className="container m-auto max-w-3xl py-24 px-5 md:px-0">
          <div className="form__section relative bg-white text-slate-900 px-6 py-8 mb-4">
            <h3 className="text-xl font-bold">Update Job</h3>
            <form onSubmit={handleUpdate} className="mt-8">
              <div>
                <label htmlFor="title">Job Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Please enter job title..."
                  required
                />
              </div>

              <div>
                <label htmlFor="type">Job Type</label>
                <select
                  name="type"
                  id="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Internship">Internship</option>
                  <option value="Apprenticeship">Apprenticeship</option>
                </select>
              </div>

              <div>
                <label htmlFor="description">Job Description</label>
                <textarea
                  name="description"
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Please enter job descrition here..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="salary">Salary</label>
                <select
                  name="salary"
                  id="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Salary Range</option>
                  <option value="Under $50K">Under $50K</option>
                  <option value="$50K - 60K">£50K - £60K</option>
                  <option value="£60K - 70K">£60K - £70K</option>
                  <option value="£70K - 80K">£70K - £80K</option>
                  <option value="£80K - 90K">£80K - £90K</option>
                  <option value="£90K - 100K">£90K - £100K</option>
                  <option value="£100K - 125K">£100K - £125K</option>
                  <option value="£125K - 150K">£125K - £150K</option>
                  <option value="£150K - 175K">£150K - £175K</option>
                  <option value="£175K - 200K">£175K - £200K</option>
                  <option value="Over £200K">Over £200K</option>
                </select>
              </div>

              <div>
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="Please enter location here..."
                />
              </div>

              <h3 className="text-sxl mb-5">Company Info</h3>
              <div>
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  placeholder="Please company name here..."
                />
              </div>

              <div>
                <label htmlFor="companyDescription">Company Description</label>
                <textarea
                  id="companyDescription"
                  name="companyDescription"
                  value={formData.companyDescription}
                  onChange={handleChange}
                  placeholder="Please company descrition here..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="contactEmail">Company Email</label>
                <input
                  type="text"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  required
                  placeholder="Please enter company email here..."
                />
              </div>

              <div>
                <label htmlFor="contactPhone">Company Phone</label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  required
                  placeholder="Please company phone number here..."
                />
              </div>

              <button
                disabled={!formIsValid}
                className={` form__btn w-full rounded-full ${
                  formIsValid ? "text-white bg-sky-600" : "bg-gray-300"
                }`}
              >
                Update Job
              </button>
              <Link
                to={`/jobs/${job.id}`}
                className="form__btn mt-2 text-white text-center font-bold block bg-red-500 "
              >
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </section>
      </>
      ) : jobStatus === "failed" ? (
        <div className="text-white text-center text-xl">{error}</div>
      ) : (
        "No Job found"
      )
    }
    </section>
  );
};

export default EditJobPage;
