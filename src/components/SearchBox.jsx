import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <>
      <form className="max-w-md w-1/2 mx-auto hidden md:block">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
          </div>
          <input
            type="search"
            id="default-search"
            className=" p-4 ps-10 text-sm text-slate-500 border border-slate-300 rounded-lg bg-blue-50  dark:border-slate-600 dark:placeholder-gray-400 dark:focus:ring-sky-500 dark:focus:border-sky-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            placeholder="Search Jobs..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBox;
