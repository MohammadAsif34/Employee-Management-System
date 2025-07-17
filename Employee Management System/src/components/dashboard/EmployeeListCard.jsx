import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
// import { useModal } from "../../context/createContext";
import { toast } from "react-toastify";
import { useModal, useUser } from "../../context/CreateContext";
import { EmployeeDeleteAPI } from "../../services/action.service";

const defaultEmp = {
  employeeId: "EMP00000",
  fullname: "Fullname",
  email: "example@gmail.com",
  department: "Department",
  jobRole: "Role",
  status: "Status",
  joinedDate: "Date",
};

const EmployeeListCard = ({ emp = defaultEmp }) => {
  return (
    <>
      <div className="px-2 py-2 mt-3  text-sm text-center text-neutral-500 border-b grid grid-cols-[0.5fr_1fr_2fr_2fr_2fr_1fr_1fr_2fr_1fr] gap-3">
        <p className="text-start">{1}</p>
        <p className="text-start">{emp?.employeeId}</p>
        <p className="text-start">{emp?.fullname}</p>
        <p className="text-start">{emp.email}</p>
        <p> {emp.department} </p>
        <p>{emp.jobRole}</p>
        <p>{emp.status}</p>
        <p>{emp.joiningDate}</p>
        <div className="relative ">
          <Action id={emp?._id} />
        </div>
      </div>
    </>
  );
};
export default EmployeeListCard;

const Action = ({ id }) => {
  const { setAppKey } = useUser();
  const { setUpdateEmp, setCurrEmp } = useModal();

  const [isAction, setIsAction] = useState(false);
  const actionRef = useRef(null);

  useEffect(() => {
    const closeAction = (e) => {
      if (actionRef.current && !actionRef.current.contains(e.target))
        setIsAction(false);
    };
    window.addEventListener("mousedown", closeAction);
    return () => window.removeEventListener("mousedown", closeAction);
  }, []);

  const handleEmpDelete = async () => {
    const res = await EmployeeDeleteAPI(id);
    if (res?.status === "OK") {
      toast.success(res?.message);
      setAppKey((p) => p + 1);
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <h1
        className="cursor-pointer"
        onClick={() => setIsAction((prev) => !prev)}
      >
        Action
      </h1>
      {isAction && (
        <>
          <div
            ref={actionRef}
            className=" py-0.5 border rounded-lg bg-black z-10 absolute top-5 left-[50%] -translate-x-[50%] overflow-hidden"
          >
            <p
              className="px-4 py-1 hover:bg-neutral-800 cursor-pointer whitespace-nowrap"
              onClick={() => setCurrEmp(id)}
            >
              <i className="bi bi-eye mr-2"></i>View
            </p>
            <p
              className="px-4 py-1 hover:bg-neutral-800 cursor-pointer whitespace-nowrap"
              onClick={() => setUpdateEmp(id)}
            >
              <i className="bi bi-pencil mr-2"></i>Update
            </p>

            <p
              className="px-4 py-1 hover:bg-neutral-800 cursor-pointer"
              onClick={() => handleEmpDelete()}
            >
              <i className="bi bi-trash mr-2"></i> Delete
            </p>
            <p></p>
          </div>
        </>
      )}
    </>
  );
};
