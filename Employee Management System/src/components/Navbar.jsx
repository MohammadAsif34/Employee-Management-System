import React, { useState } from "react";
import { useModal, useUser } from "../context/createContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isPop, setIsPop] = useState(false);
  return (
    <>
      <header className="w-full h-16 px-[10%] bg-color-1 flex justify-between items-center">
        <Link to={"/"} className="">
          <h1 className="text-4xl font-serif">EMS</h1>
        </Link>

        <div className="relative">
          {false ? (
            <div
              className="w-10 h-10 rounded-full overflow-hidden cursor-pointer"
              onClick={() => setIsPop(!isPop)}
            >
              <img
                src="/logo.png"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
          ) : (
            <Link
              to={"/auth/login"}
              className="border px-4 py-2 rounded-md hover:bg-white hover:text-indigo-500"
            >
              Login
            </Link>
          )}
          {isPop && <AvatarPopDown />}
        </div>
      </header>
    </>
  );
};

export default Navbar;
export const AvatarPopDown = ({ ref }) => {
  return (
    <>
      <div
        ref={ref}
        className="w-[120px] py-1 bg-neutral-900 border border-neutral-500 rounded-lg overflow-hidden absolute top-11 right-0"
      >
        <p className=" pl-2 py-1 hover:bg-neutral-800 cursor-pointer ">
          <i className="bi bi-person mr-2"></i>Profile
        </p>
        <p className=" pl-2 py-1 hover:bg-neutral-800 cursor-pointer ">
          <i className="bi bi-box-arrow-right mr-2"></i>Logout
        </p>
      </div>
    </>
  );
};
