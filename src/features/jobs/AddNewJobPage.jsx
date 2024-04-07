import { useState } from "react";

const AddNewJobPage = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobType: "",
    salary: "",
    location: "",
    jobDescription: "",
    companyName: "",
    companyDescription: "",
    companyEmail: "",
    companyPhone: "",
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const formIsValid = [
    formData.jobTitle,
    formData.jobType,
    formData.jobDescription,
    formData.companyEmail,
    formData.companyPhone,
    formData.companyDescription,
    formData.companyName,
    formData.location,
    formData.salary,
  ].every(Boolean);
  console.log(formIsValid);

  return (
    <section className="bg-blue-50">
      <div className="container m-auto max-w-3xl py-24 px-5 md:px-0" >
      <div className="form__section relative bg-white text-slate-900 px-6 py-8 mb-4">
        <h3 className="text-xl font-bold">Add a New Post</h3>
        <form onSubmit={handleSubmit} className="mt-8">
          <div>
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="Please enter job title..."
              required
            />
          </div>
          <div>
            <label htmlFor="jobType">Job Type</label>
            <select
              name="jobType"
              id="jobType"
              value={formData.jobType}
              onChange={handleChange}
              required
            >
              <option value="">Choose Job Type</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
              <option value="internship">Internship</option>
              <option value="apprenticeship">Apprenticeship</option>
            </select>
          </div>
          <div>
            <label htmlFor="jobDescription">Job Description</label>
            <textarea
              name="jobDescription"
              id="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              placeholder="Please enter job descrition here..."
            ></textarea>
          </div>
          <div>
            <label htmlFor="salary">Salary</label>
            <select name="salary" id="salary" value={formData.salary} onChange={handleChange} required>
              <option value="">Select Salary Range</option>
              <option value='Under $50K'>Under $50K</option>
                <option value='$50K - 60K'>£50K - £60K</option>
                <option value='£60K - 70K'>£60K - £70K</option>
                <option value='£70K - 80K'>£70K - £80K</option>
                <option value='£80K - 90K'>£80K - £90K</option>
                <option value='£90K - 100K'>£90K - £100K</option>
                <option value='£100K - 125K'>£100K - £125K</option>
                <option value='£125K - 150K'>£125K - £150K</option>
                <option value='£150K - 175K'>£150K - £175K</option>
                <option value='£175K - 200K'>£175K - £200K</option>
                <option value='Over £200K'>Over £200K</option>
            </select>
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required placeholder="Please enter location here..."/>
          </div>
          <h3 className="text-sxl mb-5">Company Info</h3>
          <div>
            <label htmlFor="companyName">Company Name</label>
            <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required placeholder="Please company name here..."/>
          </div>
          <div>
            <label htmlFor="companyDescription">Company Description</label>
            <textarea id="companyDescription" name="companyDescription" value={formData.companyDescription} onChange={handleChange} placeholder="Please company descrition here..."></textarea>
          </div>

          <div>
            <label htmlFor="companyEmail">Company Email</label>
            <input type="text" id="companyEmail" name="companyEmail" value={formData.companyEmail} onChange={handleChange} required placeholder="Please enter company email here..."/>
          </div>
          <div>
            <label htmlFor="companyPhone">Company Phone</label>
            <input type="tel" id="companyPhone" name="companyPhone" value={formData.companyPhone} onChange={handleChange} required placeholder="Please company phone number here..."/>
          </div>

          <button
            disabled={!formIsValid}
            className={`w-full ${
              formIsValid ? "text-white bg-blue-600" : "bg-gray-300"
            }`}
          >
            Add Job
          </button>
        </form>
      </div>
      </div>
    </section>
  );
};

export default AddNewJobPage;
