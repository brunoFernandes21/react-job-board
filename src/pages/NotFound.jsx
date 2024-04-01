import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="flex items-center justify-center p-16 bg-white h-[90vh]">
      <div className="flex flex-col text-center gap-6 max-w-md">
        <FaExclamationTriangle className="text-yellow-400 text-6xl mx-auto"/>
        <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
          404
        </h2>
        <p className="text-2xl md:text-3xl dark:text-gray-300">
          Sorry, we couldn&apos;t find this page.
        </p>
        <Link
          to="/"
          className="px-8 py-4 text-xl font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
