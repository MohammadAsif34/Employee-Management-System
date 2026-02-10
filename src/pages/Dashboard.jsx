import React from "react";

import EmpList from "../components/dashboard/EmpList";
// import AdminNavbar from "../components/AdminNavbar";
// import ReadEmpModal from "../components/modal/ReadEmpModal";
// import CreateEmpModal from "../components/modal/CreateEmpModal";
// import UpdateEmpModal from "../components/modal/UpdateEmpModal";
import { useModal, useUser } from "../context/createContext";
import LoginModal from "../components/modal/LoginModal";
// const [isCreate , setIsCreate] = useState(false)

const Dashboard = () => {
  const { isCreateEmp, isReadEmp, isUpdateEmp } = useModal();
  const { user } = useUser();
  console.log("USER", user);

  if (!user.isAuthenticated) return <div className="w-full h-[90vh] flex justify-center items-center"> No User Logined!</div>;

  return (
    <div className="w-full px-[10%] max-sm:px-[5%] ">
      {user.isAuthenticated && <LoginModal />}
      <div className="my-5 px-2 py-4 bg-black/20 rounded-xl">
        <div className="fixed bottom-5 right-15 flex flex-col justify-center items-center gap-2 ">
          <button
            className="px-4 py-3 rounded-full bg-color-1 cursor-pointer"
            onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
          >
            <i className="bi bi-arrow-up"></i>
          </button>
          <button
            className="px-4 py-3 rounded-full bg-color-1 cursor-pointer "
            onClick={() =>
              window.scroll({
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
          >
            <i className="bi bi-arrow-down"></i>
          </button>
        </div>
        <h1 className="pb-3 text-center text-2xl font-semibold border-b border-gray-600">
          Admin Dashboard
        </h1>
        {/* admin navbar  */}
        {/* <AdminNavbar /> */}
        <div className="w-full h-full py-5">
          <EmpList />
        </div>
        <div>
          {isReadEmp && <ReadEmpModal />}
          {isCreateEmp && <CreateEmpModal />}
          {isUpdateEmp && <UpdateEmpModal />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
