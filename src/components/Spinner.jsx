import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "0 auto",
  };
const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#1D40AF"
      loading={loading}
      cssOverride={override}
      aria-label="Loading"
      size={150}
    />
  );
};

export default Spinner;
