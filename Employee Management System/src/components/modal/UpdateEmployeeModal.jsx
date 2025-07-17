import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useModal, useUser } from "../../context/CreateContext";
import {
  EmployeeDetailsAPI,
  EmployeeUpdateAPI,
} from "../../services/action.service";

const UpdateEmployeeModal = () => {
  const { setAppKey } = useUser();
  const { updateEmp, setUpdateEmp } = useModal();
  const [personal, setPersonal] = useState();
  const [job, setJob] = useState();
  const [bank, setBank] = useState();

  const fetchCurrEmp = async () => {
    const res = await EmployeeDetailsAPI(updateEmp);
    if (res.status === "OK") {
      setPersonal(res?.emp?.personal);
      setJob(res?.emp?.job);
      setBank(res?.emp?.bank);
    }
  };

  useEffect(() => {
    fetchCurrEmp();
  }, []);

  const handleEmpUpdate = async (e) => {
    e.preventDefault();
    const res = await EmployeeUpdateAPI({ personal });
    if (res?.status === "OK") {
      setAppKey((p) => p + 1);
      toast.success(res.message);
    }
  };
  const handleJobUpdate = async (e) => {
    e.preventDefault();
    const res = await EmployeeUpdateAPI({ job });
    if (res?.status === "OK") toast.success(res.message);
  };
  const handleBankUpdate = async (e) => {
    e.preventDefault();
    const res = await EmployeeUpdateAPI({ bank });
    if (res?.status === "OK") toast.success(res.message);
  };

  const handleEmpChange = (e) => {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };
  const handleJobChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleBankChnage = (e) => {
    setBank({ ...bank, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="w-full h-[100vh] px-[15%] pt-12 fixed top-0 left-0 overflow-hidden  bg-black/60 z-50">
        <div className="w-full h-[90vh] overflow-hidden rounded-xl scroll-smooth relative">
          <div className="w-full h-full bg-neutral-800 text-white shadow-md p-6  mx-auto overflow-y-auto scroll  ">
            <h1 className="py-2 text-3xl font-semibold text-center">
              Update Employee Details
            </h1>
            <button
              className="absolute top-4 right-8 bg-neutral-800 border border-neutral-700 rounded-full px-2 py-1 cursor-pointer"
              onClick={() => setUpdateEmp("")}
            >
              <i className="bi bi-x-lg"></i>
            </button>
            {/* employee avatar  */}
            <div className=" mt-5 mb-8 flex gap-10 justify-center">
              <div className="w-28 h-28 border rounded-full bg-purple-400/60 overflow-hidden">
                {" "}
                <img
                  src="/avatar.png"
                  alt=""
                  className="w-full h-full object-cover object-fit"
                />
              </div>
              <div className="w-2/3">
                <h1 className="py-4 text-3xl font-semibold ">
                  {personal?.fullname}
                </h1>
                <div className="text-xs grid grid-cols-2 gap-3 text-gray-400">
                  <p>
                    <strong>Role: </strong>
                    {job?.manager}
                  </p>
                  <p>
                    <strong>Phone: </strong>
                    {"+91 " + personal?.phone}
                  </p>
                  <p>
                    <strong>Email: </strong>
                    {personal?.email}
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
            <form
              className="text-neutral-400 grid grid-cols-3 gap-y-2 gap-x-15 text-sm "
              onSubmit={handleEmpUpdate}
            >
              <div>
                <label>
                  Full Name
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={personal?.fullname}
                    name="fullname"
                    onChange={handleEmpChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Date of Birth
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={personal?.dob}
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
                    value={personal?.gender}
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
                    value={personal?.email}
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
                    value={personal?.phone}
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
                    value={personal?.address}
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
                    value={personal?.city}
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
                    value={personal?.state}
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
                    value={personal?.zipCode}
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
                    value={personal?.nationality}
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
                    value={personal?.maritalStatus}
                    name="maritalStatus"
                    onChange={handleEmpChange}
                  />
                </label>
              </div>

              <div className="my-3 text-white col-span-3 flex justify-end">
                <button className="mx-2 px-6 py-1 border rounded-lg cursor-pointer">
                  Cancel
                </button>
                <button className="mx-2 px-6 py-1  rounded-lg bg-color-1 cursor-pointer">
                  Update
                </button>
              </div>
            </form>

            {/* job details  */}
            <h2 className="text-xl font-semibold   my-4 border-b pb-2">
              Job Details
            </h2>
            <form
              className="text-neutral-400 grid grid-cols-3 gap-y-2 gap-x-15 text-sm "
              onSubmit={handleJobUpdate}
            >
              <div>
                <label>
                  Employee ID
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={job?.employeeId}
                    disabled
                  />
                </label>
              </div>
              <div>
                <label>
                  Job Title
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={job?.jobTitle}
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
                    value={job?.jobRole}
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
                    value={job?.employementType}
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
                    value={job?.manager}
                    name="manager"
                    onChange={handleJobChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Joining Date
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={job?.joiningDate}
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
                    value={job?.department}
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
                    value={job?.status}
                    name="status"
                    onChange={handleJobChange}
                  />
                </label>
              </div>
              <div className="my-3 text-white col-span-3 flex justify-end">
                <button className="mx-2 px-6 py-1 border rounded-lg cursor-pointer">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="mx-2 px-6 py-1  rounded-lg bg-color-1 cursor-pointer"
                >
                  Update
                </button>
              </div>
            </form>

            {/* bank details  */}
            <h2 className="text-xl font-semibold   my-4 border-b pb-2">
              Bank Details
            </h2>
            <form
              className="text-neutral-400 grid grid-cols-3 gap-y-2 gap-x-15 text-sm "
              onSubmit={handleBankUpdate}
            >
              <div>
                <label>
                  Account Holder Name
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={bank?.accountHolderName}
                    name="accountHolderName"
                    onChange={handleBankChnage}
                  />
                </label>
              </div>
              <div>
                <label>
                  Bank Name
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={bank?.bankName}
                    name="bankName"
                    onChange={handleBankChnage}
                  />
                </label>
              </div>
              <div>
                <label>
                  Account Number
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={bank?.accountNumber}
                    name="accountNumber"
                    onChange={handleBankChnage}
                  />
                </label>
              </div>
              <div>
                <label>
                  IFSC Code
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={bank?.IFSCcode}
                    name="IFSCcode"
                    onChange={handleBankChnage}
                  />
                </label>
              </div>
              <div>
                <label>
                  Branch Name
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={bank?.branchName}
                    name="branchName"
                    onChange={handleBankChnage}
                  />
                </label>
              </div>
              <div>
                <label>
                  UPI Id
                  <input
                    className="w-full px-4 py-1.5 my-2 border rounded-md"
                    value={bank?.upiId}
                    name="upiId"
                    onChange={handleBankChnage}
                  />
                </label>
              </div>
              <div className="my-3 text-white col-span-3 flex justify-end">
                <button
                  type="reset"
                  className="mx-2 px-6 py-1 border rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="mx-2 px-6 py-1  rounded-lg bg-color-1 cursor-pointer"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateEmployeeModal;
