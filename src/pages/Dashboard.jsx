import React, { useEffect } from "react";
import { useModal, useUser } from "../context/CreateContext";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import ScrollTopBottom from "../components/ScrollTopBottom";
import EmployeeList from "../components/dashboard/EmployeeList";
import CreateEmployeeModal from "../components/modal/CreateEmployeeModal";
import EmployeeDetails from "../components/modal/EmployeeDetails";
import UpdateEmployeeModal from "../components/modal/UpdateEmployeeModal";

const Dashboard = () => {
  const { user, loading } = useUser();
  const { createEmp, currEmp, updateEmp } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!user && !loading) {
        navigate("/login");
        console.log("navigate /login");
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [user, loading, navigate]);

  if (loading ) return <Loading />;

  return (
    <>
      {" "}
      <div className="w-full border h-[calc(100vh-70px)] px-[10%] max-sm:px-[5%] py-2 ">
        <div className=" h-[100%]  px-2 py-2 bg-black rounded-xl text-neutral-400">
          <div className="w-full h-full ">
            <EmployeeList />
          </div>
        </div>
        {currEmp && <EmployeeDetails />}
        {createEmp && <CreateEmployeeModal />}
        {updateEmp && <UpdateEmployeeModal />}
        <ScrollTopBottom />
      </div>
    </>
  );
};

export default Dashboard;
