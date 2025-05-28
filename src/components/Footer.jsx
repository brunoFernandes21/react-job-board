// import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <section className="bg-sky-800 text-white py-8 bottom-0 w-full">
      <div className="flex flex-col lg:flex-row items-center md:justify-between gap-2 md:mx-20">
        <div className="">
          <Link
            to="/jobs"
            className="text-slate-400 mr-4 hover:text-slate-300 hover:underline"
          >
            Browse Jobs
          </Link>
          <Link
            to="/add-new-job"
            className="text-slate-400 hover:text-slate-300 hover:underline"
          >
            Post Job
          </Link>
        </div>

        <div className="-order-1">
          <p className="text-slate-400">
            {" "}
            <strong>React JobBoard</strong> &copy; {getYear()} All Rights
            Reserved
          </p>
        </div>

        {/* <div className="flex gap-4 items-center">
          <div>
            <p className="text-slate-400">Contact me: brunoaf1523@gmail.com</p>
          </div>
          <Link
            to="https://www.linkedin.com/in/bruno-fernandes-879b0725a/"
            target="_blank"
          >
            <FaLinkedin className="text-3xl text-slate-400 hover:text-white transition ease-in-out durantion-300" />
          </Link>
          <Link to="https://github.com/brunoFernandes21" target="_blank">
            <FaGithub className="text-3xl text-slate-400 hover:text-white transition ease-in-out durantion-300" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Footer;
