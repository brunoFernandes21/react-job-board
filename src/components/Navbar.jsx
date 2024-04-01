import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
const Navbar = () => {

  const linkClass = ({ isActive }) => {
    return isActive ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
  }
  return (
    <nav className="bg-blue-800 shadow-blue-500 shadow-md mb-1">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 ">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink to="/" className="flex items-center flex-shrink-0 mr-4">
              <img src={logo} alt="logo image"/>
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                React JobBoard
              </span>
            </NavLink>
            <div className="md:ml-auto">
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
                  to="/add-job"
                  className={linkClass}
                >
                  Add Job
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
