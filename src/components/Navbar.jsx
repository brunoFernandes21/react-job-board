import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
const Navbar = () => {

  const linkClass = ({ isActive }) => {
    return isActive ? "border focus:ring-2 focus:ring-sky-400 hover:text-sky-200 text-white px-3 py-2 rounded-md" : "text-white transition ease-in-out duration-400 hover:text-sky-200 px-3 py-2"
  }
  return (
    <nav className="bg-sky-800 bg-opacity-75 md:bg-opacity-100 backdrop-blur-sm shadow-sky-500 shadow-md mb-1 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink to="/" className="flex items-center flex-shrink-0 mr-4">
              <img src={logo} alt="logo image"/>
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                React JobsBoard
              </span>
            </NavLink>
            <div className="ml-4 md:ml-auto ">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={linkClass}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/jobs"
                  className={linkClass}
                >
                  Jobs
                </NavLink>
                <NavLink
                  to="/add-new-job"
                  className={linkClass}
                >
                  Post Job
                </NavLink>
                <NavLink
                  to="/register"
                  className={linkClass}
                >
                 Register
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
