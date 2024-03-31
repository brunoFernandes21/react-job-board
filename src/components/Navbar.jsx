import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
const Navbar = () => {
  return (
    <nav className="bg-blue-700 border-b border-blue-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 ">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link to="/" className="flex items-center flex-shrink-0 mr-4">
              <img src={logo} alt="logo image" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                React JobBoard
              </span>
            </Link>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <Link
                  to="/"
                  className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Home
                </Link>
                <Link
                  to="/jobs"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Jobs
                </Link>
                <Link
                  to="/add-job"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Add Job
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
