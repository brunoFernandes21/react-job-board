import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <section className="bg-sky-800 text-white py-4 ">
      {/* <div className="grid md:grid-cols-3 items-center justify-between md:gap-4 p-2 border">
        <div className="flex flex-col mx-auto">
          <p>
            <strong>Contact Me</strong>
          </p>
          <p className="text-slate-400">brunoaf1523@gmail.com</p>
        </div>
        <div className="text-center">
          <p className="text-slate-400">
            {" "}
            <strong>Bruno Fernandes</strong> &copy; {getYear()} All Rights
            Reserved
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Link
            to="https://www.linkedin.com/in/bruno-fernandes-879b0725a/"
            target="_blank"
            className="flex items-center justify-center gap-2"
          >
            <FaLinkedin className="text-3xl hover:text-slate-400 transition ease-in-out durantion-300" />
          </Link>
          <Link
            to="https://github.com/brunoFernandes21"
            target="_blank"
            className="flex items-center justify-center gap-2"
          >
            <FaGithub className="text-3xl hover:text-slate-400 transition ease-in-out durantion-300" />
          </Link>
        </div>
      </div> */}

      <div className="flex flex-col lg:flex-row items-center md:justify-center gap-2 md:gap-6 mx-4">
        <div className="">
          <p className="text-slate-400">
            {" "}
            <strong>Bruno Fernandes</strong> &copy; {getYear()} All Rights
            Reserved
          </p>
        </div>
        <Link
          to="/jobs"
          className="text-slate-400 hover:text-slate-300 hover:underline"
        >
          Browse Jobs
        </Link>
        <Link
          to="/add-new-job"
          className="text-slate-400 hover:text-slate-300 hover:underline"
        >
          Post Job
        </Link>
        <div>
          <p className="text-slate-400">Contact me: brunoaf1523@gmail.com</p>
        </div>
        <div className="flex gap-4">
          <Link
            to="https://www.linkedin.com/in/bruno-fernandes-879b0725a/"
            target="_blank"
          >
            <FaLinkedin className="text-3xl text-slate-400 hover:text-white transition ease-in-out durantion-300" />
          </Link>
          <Link
            to="https://github.com/brunoFernandes21"
            target="_blank"
          >
            <FaGithub className="text-3xl text-slate-400 hover:text-white transition ease-in-out durantion-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
