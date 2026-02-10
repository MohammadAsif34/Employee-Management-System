import { employee } from "../../dataSets/employee";
import EmpListCard from "./EmpListCard";
import { useModal } from "../../context/createContext";
import Pagination from "./Pagination";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const EmpList = () => {
  const { setIsCreateEmp } = useModal();
  const [empList, setEmpList] = useState([]);

  const fetchEmpList = async () => {
    try {
      const api = "http://localhost:8800/api/ems/v1/emp/get-all";
      const res = await axios.get(api, { withCredentials: true });
      if (res.data.status === "OK") {
        setEmpList(res.data?.employee);
      } else {
        toast.warn(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchEmpList();
  }, []);

  return (
    <>
      <section className="w-full h-full px-4 ">
        <div className="flex justify-between">
          <h1 className=" inline-block px-4 py-1 bg-color-1 rounded-md">
            Employees List
          </h1>
          <button
            className=" inline-block px-4 py-1 bg-color-1 rounded-md cursor-pointer"
            onClick={() => setIsCreateEmp("true")}
          >
            <i className="bi bi-plus-lg mr-2"></i>Create
          </button>
        </div>

        {/* employee list  header*/}
        <EmpListHeader />

        {/* employee list  */}
        <div>
          {empList.slice(0, 100).map((emp, idx) => (
            <EmpListCard key={idx} emp={emp} />
          ))}
        </div>
        {/* employee list pagination  */}
        <Pagination />
      </section>
    </>
  );
};
export default EmpList;

const EmpListHeader = () => {
  return (
    <>
      <div className="py-2 mt-3 capitalize text-sm emp-list-item text-gray-300!">
        <p className="text-start">sl</p>
        <p className="text-start">#emp</p>
        <p className="text-start">Name</p>
        <p>Email</p>
        <p>Department</p>
        <p>Role</p>
        <p>Status</p>
        <p>Join Date</p>
        <p>Action</p>
      </div>
    </>
  );
};
