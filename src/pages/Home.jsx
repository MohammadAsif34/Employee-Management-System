import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-full px-[10%] max-sm:pax-[5%] bg-gray-950 ">
        {/* hero section  */}
        <section className="min-h-[60vh] flex b">
          <div className="flex-1 flex flex-col items-center justify-center">
            <h1 className="py-12 text-center text-9xl font-bold text-transparent bg-clip-text bg-color-1 font-serif">
              EMS
            </h1>
            <h2 className="text-5xl font-bold text-center">
              Smart Employee Management System <br />
              <span className="italic text-3xl">for Growing teams</span>
            </h2>
            <p className="w-4/5 mx-auto py-8 text-sm text-center text-gray-500">
              "A secure, intuitive web-based solution for managing employee
              records, performance, roles, and attendance — built for HR teams
              and managers to streamline workforce operations"
            </p>
            <Link to={"/dashboard"}>
              <button className="px-6 py-2 bg-color-1 rounded-lg cursor-pointer">
                Get Started
              </button>
            </Link>
          </div>
          <div className="flex-1">
            <img
              src="/ems_banner1.png"
              alt="logo"
              className="w-full h-full object-cover object-center m"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="my-20 grid md:grid-cols-3 gap-8 text-center cursor-default">
          <div className="bg-black/20 p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Employee Profiles</h3>
            <p className="text-zinc-300">
              Add, manage, and view complete employee information with role and
              department.
            </p>
          </div>
          <div className="bg-black/20 p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Attendance Tracking</h3>
            <p className="text-zinc-300">
              Track daily check-ins and leaves with automated timestamp logging.
            </p>
          </div>
          <div className="bg-black/20 p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Secure Access</h3>
            <p className="text-zinc-300">
              Encrypted login with JWT, cookies, and role-based dashboard
              control.
            </p>
          </div>
        </section>

        {/* tech Stack */}
        <section className="mb-20">
          <h1 className="mb-8 text-4xl text-center font-semibold text-transparent bg-clip-text bg-color-1 border-b">
            Tech Stack
          </h1>
          <div className="flex items-center justify-center gap-x-20">
            <div className="min-w-72 p-4  bg-black/20 rounded-xl hover:scale-105 transition shadow shadow-xl ">
              <h1 className="pb-2 text-xl font-semibold border-b border-gray-600">
                Frontend{" "}
              </h1>
              <ul className="px-6 py-2 flex flex-wrap gap-3">
                <li className="tech-stack  bg-blue-500">ReactJS</li>
                <li className="tech-stack  bg-orange-500">React Router Dom</li>
                <li className="tech-stack  bg-green-500">Context API</li>
                <li className="tech-stack  bg-red-500">Vite</li>
                <li className="tech-stack  bg-amber-500">TailwindCSS</li>
                <li className="tech-stack  bg-pink-500">Axios</li>
                <li className="tech-stack  bg-fuchsia-500">Toastify</li>
                <li className="tech-stack  bg-indigo-500">React-hook-form</li>
              </ul>
            </div>
            <div className="min-w-72 p-4  bg-black/20 rounded-xl hover:scale-105 shadow transition">
              <h1 className="pb-2 text-xl font-semibold border-b border-gray-600">
                Backend{" "}
              </h1>
              <ul className="px-6 pt-4 flex flex-wrap gap-3">
                <li className="tech-stack bg-green-500">Node.js</li>
                <li className="tech-stack  bg-yellow-500">Express.js</li>
                <li className="tech-stack bg-green-500">MongoDB </li>
                <li className="tech-stack  bg-pink-500">JWT</li>
                <li className="tech-stack  bg-cyan-500">Bcrypt</li>
                <li className="tech-stack  bg-teal-500">Cookie-parser</li>
                <li className="tech-stack  bg-orange-500">Axios</li>
                <li className="tech-stack  bg-fuchsia-500">dotenv</li>
                <li className="tech-stack  bg-red-500">mongoose</li>
                <li className="tech-stack  bg-indigo-500">cors</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
