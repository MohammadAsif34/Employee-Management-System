import axios from "axios";
import { useModal, useUser } from "../../context/createContext";
import { useEffect } from "react";
import { useState } from "react";

const ReadEmpModal = () => {
  const { setIsReadEmp } = useModal();
  const { currEmp } = useModal();
  const [emp, setEmp] = useState({});
  const [showLoader, setShowLoader] = useState(true);

  const fetchCurrEmp = async () => {
    try {
      const api = `http://localhost:8800/api/ems/v1/emp/user/${currEmp}`;
      const res = await axios.get(api, { withCredentials: true });
      if (res.data.status === "OK") {
        setEmp(res.data?.emp);
        console.log("curr emp :: ", res.data);
      }
    } catch (error) {
      console.log("error in curr emp fetch :: ", error.message);
    }
  };

  useEffect(() => {
    fetchCurrEmp();
  }, []);

  useEffect(() => {
    setShowLoader(false);
  }, [emp]);
  return (
    <>
      {true && (
        <div className="w-full h-[100vh] px-[15%] pt-12 fixed top-0 left-0 overflow-hidden  bg-black/60 transition duration-300 ease-in-out">
          <div className="w-full h-[90vh] overflow-hidden rounded-xl scroll-smooth relative transition duration-300 ease-in-out">
            <div className="w-full h-full bg-neutral-800 text-white shadow-md p-6  mx-auto overflow-auto  transition duration-300 ease-in-out">
              <button
                className="absolute top-4 right-8 cursor-pointer"
                onClick={() => setIsReadEmp(false)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
              {/* employee avatar  */}
              <div className=" mt-5 mb-8 flex gap-10 justify-center">
                <div className="w-28 h-28 rounded-full bg-purple-400/60 overflow-hidden"></div>
                <div className="w-2/3">
                  <h1 className="py-4 text-3xl font-semibold ">
                    {emp?.personal?.fullname || "Full name"}
                  </h1>

                  <div className="text-xs grid grid-cols-2 gap-3 text-gray-400">
                    <p>
                      <strong>Role: </strong>
                      {emp?.job?.jobRole || "job role"}
                    </p>
                    <p>
                      <strong>Phone: </strong>
                      {emp?.personal?.phone || "phone  number"}
                    </p>
                    <p>
                      <strong>Email: </strong>
                      {emp?.personal?.email || "email"}
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
              <div className="text-neutral-400 grid grid-cols-2 gap-y-4 gap-x-10 text-sm ">
                <div>
                  <p className="  font-medium">Full Name</p>
                  <p>{emp?.personal?.fullname || "full name"}</p>
                </div>
                <div>
                  <p className="  font-medium">Date of Birth</p>
                  <p>{emp?.personal?.dob || "birth date"}</p>
                </div>
                <div>
                  <p className="  font-medium">Gender</p>
                  <p>{emp?.personal?.gender || "gender"}</p>
                </div>
                <div>
                  <p className="  font-medium">Email</p>
                  <p>{emp?.personal?.email || "email"}</p>
                </div>
                <div>
                  <p className="  font-medium">Phone Number</p>
                  <p>{emp?.personal?.phone || "phone number"}</p>
                </div>
                <div>
                  <p className="  font-medium">Address</p>
                  <p>{emp?.personal?.address || "address"}</p>
                </div>
                <div>
                  <p className="  font-medium">City</p>
                  <p>{emp?.personal?.city || "city"}</p>
                </div>
                <div>
                  <p className="  font-medium">State</p>
                  <p>{emp?.personal?.state || "state"}</p>
                </div>
                <div>
                  <p className="  font-medium">Zip Code</p>
                  <p>{emp?.personal?.zipCode || "zip code"}</p>
                </div>
                <div>
                  <p className="  font-medium">Nationality</p>
                  <p>{emp?.personal?.nationality || "nationality"}</p>
                </div>
                <div>
                  <p className="  font-medium">Marital Status</p>
                  <p>{emp?.personal?.maritalStatus || "marital status"}</p>
                </div>
              </div>

              {/* job details  */}
              <h2 className="text-xl font-semibold   my-4 border-b pb-2">
                Job Details
              </h2>
              <div className="text-neutral-400 grid grid-cols-2 gap-y-4 gap-x-10 text-sm ">
                <div>
                  <p className="  font-medium">Employee ID</p>
                  <p>{emp?.job?.employeeId || "employee Id"}</p>
                </div>
                <div>
                  <p className="  font-medium">Job Title</p>
                  <p>{emp?.job?.jobTitle || "job title"}</p>
                </div>
                <div>
                  <p className="  font-medium">Employment Type</p>
                  <p>{emp?.job?.employementType || "employement type"}</p>
                </div>
                <div>
                  <p className="  font-medium">Manager</p>
                  <p>{emp?.job?.manager || "manager Id"}</p>
                </div>
                <div>
                  <p className="  font-medium">Joining Date</p>
                  <p>{emp?.job?.joiningDate || " joinging date"}</p>
                </div>

                <div>
                  <p className="  font-medium">Status</p>
                  <p>{emp?.job?.status || "status"}</p>
                </div>
              </div>

              {/* bank details  */}
              <h2 className="text-xl font-semibold   my-4 border-b pb-2">
                Bank Details
              </h2>
              <div className="text-neutral-400 grid grid-cols-2 gap-y-4 gap-x-10 text-sm ">
                <div>
                  <p className="  font-medium">Account Holder Name</p>
                  <p>{emp?.bank?.accountHolderName || "Account holder name"}</p>
                </div>
                <div>
                  <p className="  font-medium">Bank Name</p>
                  <p>{emp?.bank?.bankName || "bank name"}</p>
                </div>
                <div>
                  <p className="  font-medium">Account Number</p>
                  <p>{emp?.bank?.accountNumber || "account number"}</p>
                </div>
                <div>
                  <p className="  font-medium">IFSC Code</p>
                  <p>{emp?.bank?.IFSCcode || "ifsc code"}</p>
                </div>
                <div>
                  <p className="  font-medium">Branch Name</p>
                  <p>{emp?.bank?.branchName || "branch name"}</p>
                </div>
                <div>
                  <p className="  font-medium">UPI Id</p>
                  <p>{emp?.bank?.upiId || "upi ID"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReadEmpModal;
