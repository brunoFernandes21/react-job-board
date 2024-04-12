import { useState } from "react";

const JobsFilter = () => {
  const [formData, setFormData] = useState({ sortBy: "" });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  console.log(formData);
  return (
    <section className="mb-6 flex items-center gap-4">
      <p className="dark:text-white font-bold mr-10">Sort By</p>
      <form className=" flex items-start flex-grow gap-10">
        <div className="flex flex-row gap-4 p-0 h-8">
          <label
            htmlFor="mostRecent"
            className="dark:text-white self-center font-light whitespace-nowrap"
          >
            Most Recent
          </label>
          <input
            type="radio"
            name="sortBy"
            id="mostRecent"
            value="mostRecent"
            onChange={handleChange}
            checked={formData.sortBy === "mostRecent"}
            className=" flex self-center mt-5"
          />
        </div>
        <div className="flex flex-row gap-4 h-8">
          <label
            htmlFor="type"
            className="dark:text-white self-center font-light whitespace-nowrap"
          >
            Job Type
          </label>
          <input
            type="radio"
            name="sortBy"
            id="type"
            value="type"
            onChange={handleChange}
            checked={formData.sortBy === "type"}
            className=" flex self-center mt-5"
          />
        </div>

        <div className="flex flex-row gap-4 h-8">
          <label
            htmlFor="salary"
            className="dark:text-white self-center font-light"
          >
            Salary
          </label>
          <input
            type="radio"
            name="sortBy"
            id="salary"
            value="salary"
            onChange={handleChange}
            checked={formData.sortBy === "salary"}
            className=" flex self-center mt-5"
          />
        </div>
      </form>
    </section>
  );
};

export default JobsFilter;
