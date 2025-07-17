import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from "../context/CreateContext";
import { LoginAPI, ProtectedAPI } from "../services/action.service";

const defautlForm = { username: "", password: "" };

const Login = () => {
  const [form, setForm] = useState(defautlForm);
  const { setUser } = useUser();
  const navigate = useNavigate();

  const logging = async (data) => {
    try {
      const res = await LoginAPI(data);
      console.log("login api::", res);
      if (res?.status == "OK") {
        toast.success(res?.message);
        const protectedUser = await ProtectedAPI();
        if (protectedUser?.status == "OK") {
          console.log(protectedUser);
          navigate("/dashboard", { replace: true });
          setUser(protectedUser?.user);
        } else {
          toast.success("Some thing Error");
        }
      }
    } catch (err) {
      console.log(`Error to Logging :: ${err.message}`);
    } finally {
      setForm(defautlForm);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logging(form);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-neutral-900 text-neutral-300 ">
      <div className="max-w-[400px] bg-black/30  mx-auto px-12 py-4 border border-gray-700 rounded-2xl">
        <div className="text-xs text-red-400 text-center">
          <p>Due to under Development</p>
          <p>*Note: use:( username: Admin, password: Admin ) </p>
        </div>
        <h1 className=" mt-5 mb-2 text-center text-sm  text-zinc-500 ">
          Welcome Back,
        </h1>
        <h1 className=" mb-10 text-center text-3xl font-bold text-zinc-500 ">
          Admin Login
        </h1>
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input
              type="text"
              className="w-full h-10 mb-5 mt-1 px-4 border rounded-md"
              value={form.username}
              name="username"
              onChange={handleChange}
              required
            />
          </label>

          <label className="relative">
            password
            <input
              type="password"
              className="w-full h-10 mb-5 mt-1 px-4 border rounded-md"
              value={form.password}
              name="password"
              onChange={handleChange}
              required
            />
          </label>
          <button
            type="submit"
            className="w-full h-8 mb-5 mt-8 px-4 border rounded-md bg-white text-black hover:bg-white/80 cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
