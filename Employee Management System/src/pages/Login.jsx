import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { UserContext } from "../context2/Context";
import { toast } from "react-toastify";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState();
  const [status, setStatus] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();
  // const { user, loading, setUser } = useContext(UserContext);

  const visible = () => {
    if (showPassword == "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  const logging = async (data) => {
    const api = `${import.meta.env.VITE_BASE_SERVER_API}auth/login`;
    try {
      const res = await axios.post(api, data, { withCredentials: true });
      console.log("login api::", res.data);
      setStatus(res.data);
      if (res.data?.status == 200) {
        const getUser = await axios.get(
          `${import.meta.env.VITE_BASE_SERVER_API}user`,
          {
            withCredentials: true,
          },
        );
        if (getUser.data.status == 200) {
          setUser(getUser.data.info);
          toast.success(res.data.message);
        }
      }
    } catch (err) {
      console.log(`Error to Logging :: ${err.message}`);
    }
  };

  if (user) {
    setTimeout(() => {
      navigate("/");
    }, 700);
  }

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div className="w-full h-screen flex justify-center items-center  ">
      <div className="max-w-[400px] bg-black/30  mx-auto px-12 py-4 border border-gray-700 rounded-2xl ">
        <span
          className={`absolute top-12 left-[50%] -translate-x-[50%] ${
            status?.status == 200 ? "text-green-500" : "text-red-500"
          } `}
        >
          {status?.msg}
          {status?.status == 200 && (
            <p className="w-6 h-6 mx-auto border-4 rounded-full border-green-600 border-t-transparent animate-spin"></p>
          )}
        </span>
        <h1 className=" mt-5 mb-10 text-center text-3xl font-bold text-zinc-500">
          Welcome Back,
        </h1>
        <form onSubmit={handleSubmit((data) => logging(data))}>
          <label>
            Username
            <input
              type="text"
              className="w-full h-10 mb-5 mt-1 px-4 border rounded-md"
              {...register("username")}
            />
          </label>

          <label className="relative">
            password
            <span className="absolute right-4 top-8" onClick={() => visible()}>
              {showPassword == "password" ? (
                <i className="bi bi-eye"></i>
              ) : (
                <i className="bi bi-eye-slash"></i>
              )}
            </span>
            <input
              type={showPassword || "password"}
              className="w-full h-10 mb-5 mt-1 px-4 border rounded-md"
              {...register("password")}
            />
          </label>

          <label>
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <button
            type="submit"
            className="w-full h-8 mb-5 mt-8 px-4 border rounded-md bg-white text-black hover:bg-white/80 cursor-pointer"
          >
            Login
          </button>
        </form>
        <div className="w-full flex justify-between my-5 text-xs">
          <Link to={"/auth/forget"}>
            <span>forgot password</span>
          </Link>
          <p>
            Don't have an accout?
            <Link to={"/auth/register"}>
              <span> register</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
