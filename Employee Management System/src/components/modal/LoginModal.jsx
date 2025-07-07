import React, { useState } from "react";
import axios from "axios";
import Cookie from "js-cookie";
import { useUser } from "../../context/createContext";

const LoginModal = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const { setUser } = useUser();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("FormData :: ", form);
    try {
      const token = Cookie.get("token");
      const api = "";
      const res = await axios.post(
        api,
        { form },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data?.status == "OK") {
        setUser({ isAuthenticated: true, user: res?.data?.user });
      }
    } catch (error) {
      console.log("error while login ::", error.message);
    }
  };

  return (
    <div className="w-full h-screen absolute top-0 left-0 flex justify-center items-center bg-black/80">
      <div className="w-lg py-4 px-10 border border-purple-400 bg-neutral-900 rounded-xl">
        <h2 className="my-4 text-5xl text-center font-semibold">Login</h2>
        <p className="text-xs text-center mt-4">
          *Note: Uername and password provided by company. <br /> demo
          Credential,
          <br /> username: <strong>Admin</strong>, Password:{" "}
          <strong>Admin</strong>
        </p>
        <form className=" my-10" onSubmit={handleLogin}>
          <label className="pt-5 pb-2">username</label>
          <input
            type="text"
            name="username"
            className=" mt-2 mb-5 px-4 border rounded-lg w-full h-10 focus:outline-0 focus:border-purple-500 focus:bg-neutral-800"
            onChange={handleChange}
            value={form.username}
          />
          <label htmlFor="">password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={form.password}
            className="mt-2 mb-5 px-4 border rounded-lg w-full h-10 focus:outline-0 focus:border-purple-500 focus:bg-neutral-800"
          />
          <button
            type="submit"
            className="w-full mt-5 py-2  border border-purple-500 rounded-xl hover:bg-purple-500 cursor-pointer "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
