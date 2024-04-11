const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <section className="bg-slate-500 dark:bg-slate-700 flex items-center justify-center h-20 text-white">
      <p>Bruno Fernandes &copy; {getYear()} All Rights Reserved</p>
    </section>
  );
};

export default Footer;
