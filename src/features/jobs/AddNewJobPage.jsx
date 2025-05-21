import { useState } from "react";
import { useDispatch } from "react-redux";
import { addJobToFirestore, addNewJobToState } from "./jobsSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const AddNewJobPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    description: "",
    location: "",
    salary: "",
    date: "",
    companyName: "",
    companyDescription: "",
    contactEmail: "",
    contactPhone: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

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
    [
      formData.title,
      formData.type,
      formData.description,
      formData.location,
      formData.salary,
      formData.companyName,
      formData.companyDescription,
      formData.contactEmail,
      formData.contactPhone,
    ].every(Boolean) && addRequestStatus === "idle";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newJob = {
      id: uuidv4(),
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
        await dispatch(addJobToFirestore(newJob)).unwrap();
        dispatch(addNewJobToState(newJob));
        toast.success("Job Added Successfully");
        navigate("/");
        setFormData({
          title: "",
          type: "",
          salary: "",
          location: "",
          description: "",
          companyName: "",
          date: "",
          companyDescription: "",
          contactEmail: "",
          contactPhone: "",
        });
      } catch (error) {
        console.error("Failed to save the post: ", error.message);
        toast.error("Unable to add job");
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <section className="bg-sky-50 dark:bg-slate-800">
      <div className="container m-auto max-w-3xl py-10 md:py-24 px-5">
        <div className="form__section relative bg-white text-slate-900 px-4 py-8 mb-4 dark:bg-slate-700 dark:text-white">
          <h3 className="text-xl font-bold">Post New Job </h3>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="lg:grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="title">Job Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Please enter job title..."
                  className="dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-slate-100"
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
                  className="dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-slate-100"
                  required
                >
                  <option value="">Select Job Type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Internship">Internship</option>
                  <option value="Apprenticeship">Apprenticeship</option>
                </select>
              </div>
            </div>

            <div className="lg:grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="salary">Salary</label>
                <select
                  name="salary"
                  id="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  className="dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-slate-100"
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
                  className="dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-slate-100"
                  required
                  placeholder="Please enter location here..."
                />
              </div>
            </div>

            <div>
              <label htmlFor="description">Job Description</label>
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                className="dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-slate-100"
                placeholder="Please enter job descrition here..."
                required
              ></textarea>
            </div>

            <h3 className="text-sxl mb-5 font-bold">Company Info</h3>
            <div>
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-slate-100"
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
                className="dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-slate-100"
                placeholder="Please company descrition here..."
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="contactEmail">Company Email</label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                className="dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-slate-100"
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
                className="dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-slate-100"
                onChange={handleChange}
                required
                placeholder="Please company phone number here..."
                pattern="^[0-9]{11}$"
                title="Telephone number must be 11 digits. No characters allowed!"
              />
            </div>

            <button className="form__btn w-full text-white bg-sky-500 hover:bg-sky-600 transition duration-150 ease-in">
              Post Job
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddNewJobPage;
