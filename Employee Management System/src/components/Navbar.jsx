import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../context/CreateContext";
import { LogoutAPI } from "../services/action.service";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user } = useUser();

  const [isPop, setIsPop] = useState(false);
  const popRef = useRef();

  useEffect(() => {
    const handleOusideClick = (e) => {
      if (popRef.current && !popRef.current.contains(e.target)) setIsPop(false);
    };
    document.addEventListener("mousedown", handleOusideClick);
    return () => document.removeEventListener("mousedown", handleOusideClick);
  }, []);

  const location = useLocation();

  return (
    <>
      <header className="w-full h-16 px-[10%] bg-color text-white  flex justify-between items-center">
        <div>
          <Link to={"/"}>
            <h1 className="text-4xl font-serif">EMP</h1>
          </Link>
        </div>
        <div>
          <h1 className="text-xl text-gray-300 font-mono transition-all duration-1000 ease-in-out">
            {location.pathname
              .replace("/", "")
              .replace("dashboard", "Admin Dashboard")
              .toUpperCase()}
          </h1>
        </div>

        <div className="relative">
          {location.pathname != "/" ? (
            <div
              className="w-10 h-10 rounded-full overflow-hidden cursor-pointer"
              onClick={() => setIsPop(!isPop)}
            >
              <img
                src={user?.picture || "/avatar.png"}
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
          ) : (
            <Link to={"/dashboard"}>
              <p className="px-4 py-1 border rounded-lg cursor-pointer">
                Get Started
              </p>
            </Link>
          )}
          {isPop && <AvatarPopDown popRef={popRef} />}
        </div>
      </header>
    </>
  );
};

export default Navbar;
export const AvatarPopDown = ({ popRef }) => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await LogoutAPI();
    if (res.status === "OK") {
      toast.success(res.message);
      navigate("/", { replace: true });
      setUser();
    }
    console.log("logout api ::", await LogoutAPI());
  };
  return (
    <>
      <div
        ref={popRef}
        className="w-[120px] py-1 bg-neutral-900 border border-neutral-500 rounded-lg overflow-hidden absolute top-11 right-0"
      >
        {/* <p className=" pl-2 py-1 hover:bg-neutral-800 cursor-pointer ">
          <i className="bi bi-person mr-2"></i>Profile
        </p> */}
        <p
          className=" pl-2 py-1 hover:bg-neutral-800 cursor-pointer "
          onClick={() => handleLogout()}
        >
          <i className="bi bi-box-arrow-right mr-2"></i>Logout
        </p>
      </div>
    </>
  );
};
