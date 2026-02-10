import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useModal } from "../../context/createContext";
import { toast } from "react-toastify";

const EmpListCard = ({ emp }) => {
  return (
    <>
      <div key={emp?._id} className="py-2 mt-3 text-xs emp-list-item">
        <p className="text-start">{1}</p>
        <p className="text-start">{emp?.employeeId}</p>
        <p className="text-start">{emp?.fullname}</p>
        <p>{emp.email}</p>
        <p> {emp.department} </p>
        <p>{emp.jobRole}</p>
        <p>{emp.status}</p>
        <p>{emp.joinedDate}</p>
        <div className="relative ">
          <Action id={emp?._id} />
        </div>
      </div>
    </>
  );
};
export default EmpListCard;

const Action = ({ id }) => {
  const { setIsReadEmp, setIsUpdateEmp, setCurrEmp } = useModal();
  const [isAction, setIsAction] = useState(false);
  const actionRef = useRef(null);

  useEffect(() => {
    const closeAction = (e) => {
      if (actionRef.current && !actionRef.current.contains(e.target)) {
        setIsAction(false);
      }
    };
    window.addEventListener("mousedown", closeAction);
    return () => window.removeEventListener("mousedown", closeAction);
  }, []);

  const handleAction = (value) => {
    setCurrEmp(id);
    if (value == "view") {
      // setCurrEmp(id);
      setIsReadEmp(true);
    } else if (value == "update") {
      setIsUpdateEmp(true);
    }
  };

  const handleDeleteEmp = async (e) => {
    try {
      const api = `http://localhost:8800/api/ems/v1/emp/user/${id}`;
      const res = await axios.delete(api, { withCredentials: true });
      if (res.data.status === "OK") {
        toast.success("Employee deleted successfully");
      } else {
        toast.warn(res.data.message);
      }
      console.log("delete emp :: ", res.data);
    } catch (error) {
      console.log(error.message);
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
            className="w-full py-0.5 border rounded-lg bg-black z-10 absolute top-5 left-[50%] -translate-x-[50%] overflow-hidden"
          >
            <p
              className="px-4 py-1 hover:bg-neutral-800 cursor-pointer"
              onClick={() => handleAction("view")}
            >
              <i className="bi bi-eye mr-2"></i>View
            </p>
            <p
              className="px-4 py-1 hover:bg-neutral-800 cursor-pointer"
              onClick={() => handleAction("update")}
            >
              <i className="bi bi-pencil mr-2"></i>Update
            </p>
            <p
              className="px-4 py-1 hover:bg-neutral-800 cursor-pointer"
              onClick={() => alert(id)}
            >
              <i className="bi bi-trash mr-2"></i> id
            </p>
            <p
              className="px-4 py-1 hover:bg-neutral-800 cursor-pointer"
              onClick={() => handleDeleteEmp()}
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
