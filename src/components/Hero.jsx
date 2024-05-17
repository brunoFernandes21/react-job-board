import SearchBox from "./SearchBox";

const Hero = () => {
  return (
    <section className="bg-sky-700 py-10 md:py-20 min-h-[320px] lg:h-0">
      <div className="max-w-7xl h-52 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl text-center">
          Become a React Developer
        </h1>
        <p className="my-4 text-xl text-white text-center">
          Browse React Jobs That Match Your Passion. Your Next Adventure Starts Here!
        </p>
        <SearchBox/>
      </div>
    </section>
  );
};

export default Hero;
