import { FcGoogle } from "react-icons/fc";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase.js";
import { Link, useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { useContext } from "react";

const Register = () => {
  // const { setCurrentUser, setUserName } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState(null);
  const [dbError, setDbError] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => {
      return {
        ...current,
        [name]: value,
      };
    });
  };

  const validatePassword = () => {
    let isValid = true;
    if (formData.password !== formData.confirmPassword) {
      isValid = false;
      setPasswordError("Passwords do not match");
      return isValid;
    }
    setPasswordError(null);
    return isValid;
  };

  const handleGoogleAuth = async (event) => {
    event.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await setDoc(doc(db, "users", `${user.uid}`), {
        userId: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
      setCurrentUser(user);
      setLoading(false);
    } catch (error) {
      setDbError("Unable to login");
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userName = formData.username;
    const email = formData.email;
    const password = formData.password;
    console.log(formData);
    if (validatePassword()) {
      try {
        setDbError(null);
        setLoading(true);
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredentials.user;
        await updateProfile(auth.currentUser, {
          displayName: userName,
        });
        setCurrentUser(user);
        setUserName(userName);
        setLoading(false);
        await setDoc(doc(db, "users", `${user.uid}`), {
          userId: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
      } catch (error) {
        setDbError("Password should be at least 6 characters (weak-password).");
        setLoading(false);
      }
    }
  };

  return (
    <section className="bg-sky-50 dark:bg-slate-800">
      <div className="container m-auto max-w-lg py-10 md:py-24 px-5">
        <div className="form__section relative bg-white text-slate-900 px-4 py-8 mb-4 dark:bg-slate-700 dark:text-white shadow-m">
          <div className="mb-4">
            <button
              onClick={handleGoogleAuth}
              className="google flex gap-2 text-white bg-gray-700 py-3 px-4 w-full font-medium rounded-full"
            >
              <FcGoogle className="text-2xl" /> Sign in with Google
            </button>
          </div>
          <h1 className="mb-6 text-3xl text-center">Register</h1>
          {passwordError && (
            <div className='bg-red-100 border mb-5 border-red-400 text-red-700 px-4 py-3 rounded flex justify-center "'>
              <span className="font-bold ">{passwordError}</span>
            </div>
          )}
          {dbError && (
            <div className='bg-red-100 border mb-5 border-red-400 text-red-700 px-4 py-3 rounded flex justify-center "'>
              <span className="font-bold ">{dbError}</span>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="block bg-slate-100 text-black border border-grey-light w-full p-3 rounded-md mb-4"
              name="username"
              id="username"
              value={formData.username}
              placeholder="Username"
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="block bg-slate-100 text-black border border-grey-light w-full p-3 rounded-md mb-4"
              name="email"
              id="email"
              value={formData.email}
              placeholder="Email address"
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`${
                passwordError ? " border-red-600" : ""
              } block bg-slate-100 text-black border border-grey-light w-full p-3 rounded-md mb-4`}
              name="password"
              id="password"
              value={formData.password}
              placeholder="Password"
              onChange={handleChange}
              required
              pattern="^[a-zA-Z0-9_.-]{6, 50}$"
              title="Password must be longer than 5 characters. Include a mix of letters, numbers"
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className={`${
                passwordError ? " border-red-600" : ""
              } block bg-slate-100 text-black border border-grey-light w-full p-3 rounded-md mb-4`}
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
            <button
              disabled={loading}
              className="form__btn w-full text-white bg-sky-500 hover:bg-sky-600 transition duration-150 ease-in"
            >
              Create Account
            </button>
            <hr className="my-6" />
            <div className="mt-4 text-center">
              <p>Already have an account?</p>
              <button className="form__btn py-3 w-[60%] mt-2 rounded-md bg-sky-500 hover:bg-sky-600 transition duration-150 ease-in text-center text-white">
                <Link className="font-black" to="/login">
                  <span> Login</span>
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
