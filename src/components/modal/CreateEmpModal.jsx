import React, { useState } from "react";
import axios from "axios";
import { useModal } from "../../context/createContext";
import { toast } from "react-toastify";

const CreateEmpModal = () => {
  const { setIsCreateEmp } = useModal();
  const [personal, setPersonal] = useState({
    fullname: "",
    picture: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    nationality: "",
    maritalStatus: "",
  });
  const [job, setJob] = useState({
    employeeId: "",
    jobTitle: "",
    jobRole: "",
    employementType: "",
    manager: "",
    joiningDate: "",
    department: "",
    status: "",
  });
  const [bank, setBank] = useState({
    accountHolderName: "",
    bankName: "",
    accountNumber: "",
    IFSCcode: "",
    branchName: "",
    upiId: "",
  });

  // const handleEmpUpdate = (e) => {
  //   e.preventDefault();
  //   const formData = { personal: personal, job: job, bank: bank };
  //   console.log("FormDate :: ", formData);
  //   // alert("New Emp create");
  // };

  const handleEmpChange = (e) => {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };
  const handleJobChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleBankChange = (e) => {
    setBank({ ...bank, [e.target.name]: e.target.value });
  };
  console.log("create Emp Load");

  const handleEmpCreate = async (e) => {
    e.preventDefault();
    console.log("post data :: ", { personal, job, bank });
    try {
      const api = "http://localhost:8800/api/ems/v1/emp/user";
      const res = await axios.post(
        api,
        { personal, job, bank },
        { withCredentials: true }
      );
      if (res.data.status === "OK") {
        toast.success("Employee created successfully");
      } else {
        toast.warn(res.data.message);
      }
      console.log(res.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-[100vh] px-[15%] pt-12 fixed top-0 left-0 overflow-hidden  bg-black/80">
        <div className="w-full h-[90vh] overflow-hidden rounded-xl scroll-smooth relative">
          <button
            className="absolute top-4 right-8"
            onClick={() => setIsCreateEmp(false)}
          >
            <i className="bi bi-x-lg"></i>
          </button>
          {/* employee avatar  */}
          <form
            onSubmit={handleEmpCreate}
            className="w-full h-full bg-neutral-800 text-white shadow-md p-6  mx-auto overflow-auto  "
          >
            <h1 className="py-2 text-3xl font-semibold text-center">
              Create New Employee
            </h1>
            <div className=" mt-5 mb-8 flex gap-10 justify-center">
              <div className="w-28 h-28 rounded-full bg-purple-400/60 overflow-hidden"></div>
              <div className="w-2/3">
                <h1 className="py-4 text-3xl font-semibold ">Full name</h1>
                <div className="text-xs grid grid-cols-2 gap-3 text-gray-400">
                  <p>
                    <strong>Role: </strong>
                    {"Manager"}
                  </p>
                  <p>
                    <strong>Phone: </strong>
                    {"+91 12345 67890"}
                  </p>
                  <p>
                    <strong>Email: </strong>
                    {"example@gmail.com"}
                  </p>
                  <p>
                    <strong>Whatsapp: </strong>
                    {"+91 12345 67890"}
                  </p>
                </div>
              </div>
            </div>

            {/* employee details  */}
            <h2 className="text-xl font-semibold   mb-4 border-b pb-2">
              Employee Details
            </h2>
            <div className="text-neutral-400 grid grid-cols-3 gap-y-2 gap-x-15 text-sm ">
              <div>
                <label>
                  Full Name
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={personal.fullname}
                    name="fullname"
                    onChange={handleEmpChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Date of Birth
                  <input
                    type="date"
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={personal.dob}
                    name="dob"
                    onChange={handleEmpChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Gender
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={personal.gender}
                    name="gender"
                    onChange={handleEmpChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Email
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={personal.email}
                    name="email"
                    onChange={handleEmpChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Phone Number
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={personal.phone}
                    name="phone"
                    onChange={handleEmpChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Address
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={personal.address}
                    name="address"
                    onChange={handleEmpChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  City
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={personal.city}
                    name="city"
                    onChange={handleEmpChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  State
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={personal.state}
                    name="state"
                    onChange={handleEmpChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Zip Code
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={personal.zipCode}
                    name="zipCode"
                    onChange={handleEmpChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Nationality
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={personal.nationality}
                    name="nationality"
                    onChange={handleEmpChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Marital Status
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={personal.maritalStatus}
                    name="maritalStatus"
                    onChange={handleEmpChange}
                  />
                </label>
              </div>
            </div>

            {/* job details  */}
            <h2 className="text-xl font-semibold   my-4 border-b pb-2">
              Job Details
            </h2>
            <div className="text-neutral-400 grid grid-cols-3 gap-y-2 gap-x-15 text-sm ">
              <div>
                <label>
                  Employee ID
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    name={"employeeId"}
                    value={job.employeeId}
                    onChange={handleJobChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Job Title
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={job.jobTitle}
                    name="jobTitle"
                    onChange={handleJobChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Job Role
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={job.jobRole}
                    name="jobRole"
                    onChange={handleJobChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Employment Type
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={job.employementType}
                    name="employementType"
                    onChange={handleJobChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Manager
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={job.manager}
                    name="manager"
                    onChange={handleJobChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Joining Date
                  <input
                    type="date"
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={job.joiningDate}
                    name="joiningDate"
                    onChange={handleJobChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Department
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={job.department}
                    name="department"
                    onChange={handleJobChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Status
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={job.status}
                    name="status"
                    onChange={handleJobChange}
                  />
                </label>
              </div>
            </div>

            {/* bank details  */}
            <h2 className="text-xl font-semibold   my-4 border-b pb-2">
              Bank Details
            </h2>
            <div className="text-neutral-400 grid grid-cols-3 gap-y-2 gap-x-15 text-sm ">
              <div>
                <label>
                  Account Holder Name
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={bank.accountHolderName}
                    name="accountHolderName"
                    onChange={handleBankChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Bank Name
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={bank.bankName}
                    name="bankName"
                    onChange={handleBankChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Account Number
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={bank.accountNumber}
                    name="accountNumber"
                    onChange={handleBankChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  IFSC Code
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={bank.IFSCcode}
                    name="IFSCcode"
                    onChange={handleBankChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Branch Name
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={bank.branchName}
                    name="branchName"
                    onChange={handleBankChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  UPI Id
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={bank.upiId}
                    name="upiId"
                    onChange={handleBankChange}
                  />
                </label>
              </div>
              <div className="my-3 text-white col-span-3 flex justify-end">
                <button
                  type="submit"
                  className="mx-2 px-6 py-1  rounded-lg bg-color-1 cursor-pointer"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateEmpModal;
