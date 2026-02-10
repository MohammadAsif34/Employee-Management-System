import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  const submit = async (data) => {
    console.log(data);
    const api = `${import.meta.env.VITE_BASE_SERVER_API}auth/register`;
    try {
      const res = await axios.post(
        api,
        {
          fname: data.fname,
          username: data.username,
          email: data.email,
          dob: data.dob,
          password: data.password,
        },
        { withCredentials: true },
      );
      setStatus(res.data);
      if (res.data?.status == 200) {
        setTimeout(() => {
          navigate("/auth/login");
          // alert("/home");
        }, 1000);
      }
      console.log(res.data);
    } catch (err) {
      console.log(`Error register api :: ${err.message}`);
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className="max-w-[700px]   px-12 py-4 bg-black/30  border border-gray-700 rounded-2xl transition-transform duration-300 ease-in-out ">
        <p
          className={`text-center absolute top-10 left-[50%] -translate-x-[50%] text-sm ${
            status?.status == 200 ? "text-green-500" : "text-red-500"
          }`}
        >
          {status?.msg}
        </p>
        {status?.status == 200 && (
          <p className="w-8 h-8 mx-auto  border-4 border-green-500 border-t-transparent rounded-full animate-spin"></p>
        )}
        <h1 className=" mt-5 mb-10 text-center text-3xl font-bold text-zinc-500">
          Welcome Registeration Form
        </h1>
        <form
          onSubmit={handleSubmit((data) => submit(data))}
          className="grid grid-cols-2 gap-x-12 gap-y-2"
        >
          <label>
            First Name
            <input
              type="text"
              className="w-full h-10 mb-5 mt-1 px-4 border rounded-md"
              {...register("fname")}
              required
            />
          </label>

          {/* <label className="relative">
            Last Name
            <input
              type="text"
              className="w-full h-10 mb-5 mt-1 px-4 border rounded-md"
              {...register("lname")}
            />
          </label> */}

          <label className="relative">
            Username
            <input
              type="text"
              className="w-full h-10 mb-5 mt-1 px-4 border rounded-md"
              {...register("username")}
              required
            />
            {status?.code == "USERNAME_ALREADY_EXISTS" && (
              <span className="block absolute top-18 left-5 text-xs text-red-500">
                username already exists
              </span>
            )}
          </label>

          <label className="relative">
            Email
            <input
              type="email"
              className="w-full h-10 mb-5 mt-1 px-4 border rounded-md"
              {...register("email")}
              required
            />
          </label>

          <label className="relative">
            Date of birth
            <input
              type="date"
              className="w-full h-10 mb-5 mt-1 px-4 border rounded-md"
              {...register("dob")}
              required
            />
          </label>

          {/* <label className="relative">
            Phone Number
            <input
              type="number"
              className="w-full h-10 mb-5 mt-1 px-4 border rounded-md"
              {...register("phone")}
              required
            />
          </label> */}

          <label className="relative">
            Password
            <input
              type="text"
              className="w-full h-10 mb-5 mt-1 px-4 border rounded-md"
              {...register("password")}
              required
            />
          </label>
          <label className="relative">
            Re-Password
            <input
              type="text"
              className="w-full h-10 mb-5 mt-1 px-4 border rounded-md"
              required
            />
          </label>

          <label>
            <input type="checkbox" className="mr-2" required />
            Accepts Terms & Conditions.
          </label>
          <button
            type="submit"
            className="w-full h-8 mb-5 mt-8 px-4 border rounded-md bg-white text-black hover:bg-white/80 cursor-pointer col-span-2"
          >
            Login
          </button>
        </form>
        <div className="w-full mt-5 flex justify-between text-xs">
          <p></p>
          <p>
            You have an Accout? <Link to={"/auth/login"}>login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
