import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <section className="bg-blue-950 text-white py-4 ">
      <div className="grid md:grid-cols-3 items-center justify-between gap-4 mx-8 p-2">
        <div className=" text-center p-2">
          <p><strong>Contact Me</strong></p>
          <p className="text-slate-400">brunoaf1523@gmail.com</p>
        </div>
        <div className="text-center p-2">
          <p className="text-slate-400"> <strong>Bruno Fernandes</strong> &copy; {getYear()} All Rights Reserved</p>
        </div>
        <div className="flex justify-center gap-4 p-2">
          <Link to="https://www.linkedin.com/in/bruno-fernandes-879b0725a/" target="_blank" className="flex items-center justify-center gap-2">
            <FaLinkedin className="text-4xl hover:text-slate-400 transition ease-in-out durantion-300"/>
          </Link>
          <Link to="https://github.com/brunoFernandes21" target="_blank" className="flex items-center justify-center gap-2">
            <FaGithub className="text-4xl hover:text-slate-400 transition ease-in-out durantion-300"/>
          </Link>
        </div>
        {/* <div className="shadow-md bg-white text-blue-500 p-2 rounded-lg">
          <Link to="https://github.com/brunoFernandes21" target="_blank" className="flex items-center justify-center gap-2">
            <span>Check out my Github</span>
            <FaGithub className="text-2xl hover:text-blue-300 transition ease-in-out durantion-300"/>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Footer;
