// import EmpListCard from "./EmployeeListCard";
// import { useModal } from "../../context/createContext";
// import Pagination from "./Pagination";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import EmployeeListCard from "./EmployeeListCard";
import { useModal, useUser } from "../../context/CreateContext";
import { EmployeeListAPI } from "../../services/action.service";

const EmployeeList = () => {
  const { user } = useUser();
  const { appKey } = useUser();
  const { setCreateEmp } = useModal();
  const [empList, setEmpList] = useState([]);

  const fetchEmpList = async () => {
    try {
      const res = await EmployeeListAPI();
      if (res.status === "OK") {
        setEmpList(res.employee);
      } else {
        toast.warn(res.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    if (user) fetchEmpList();
  }, [appKey]);

  if (!user)
    return <div className="text-center py-10 text-xl">No user Login!</div>;

  return (
    <>
      <section className="w-full h-[100%] px-2 ">
        <div className="  mb-2 flex justify-between items-center">
          <h1 className=" px-4 text-xl font-semibold font-serif">
            Employees List
          </h1>
          <button
            className="px-4 py-0.5 border rounded-md cursor-pointer"
            onClick={() => setCreateEmp(true)}
          >
            <i className="bi bi-plus-lg mr-2"></i>Create
          </button>
        </div>
        {/* employee list  header*/}
        <EmpListHeader />
        {/* employee list  */}
        <div className=" h-[86%] overflow-x-hidden overflow-y-auto scroll ">
          {empList.slice(0, 100).map((emp, idx) => (
            //   {[...Array(20)].slice(0, 100).map((emp, idx) => (
            <EmployeeListCard key={idx} emp={emp} />
          ))}
        </div>
        {/* employee list pagination  */}
        {/* <Pagination /> */}
      </section>
    </>
  );
};
export default EmployeeList;

const EmpListHeader = () => {
  return (
    <>
      <div className="px-2 py-2  capitalize text-sm text-center text-gray-300! border-y grid grid-cols-[0.5fr_1fr_2fr_2fr_2fr_1fr_1fr_2fr_1fr] gap-3">
        <p className="text-start">sl</p>
        <p className="text-start">#emp</p>
        <p className="text-start">Name</p>
        <p className="text-start">Email</p>
        <p>Department</p>
        <p>Role</p>
        <p>Status</p>
        <p>Join Date</p>
        <p>Action</p>
      </div>
    </>
  );
};
