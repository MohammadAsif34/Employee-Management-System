import { useEffect } from "react";
import { useState } from "react";
import { EmployeeDetailsAPI } from "../../services/action.service";
import { useModal } from "../../context/CreateContext";
import { toast } from "react-toastify";

const EmployeeDetails = () => {
  const { currEmp, setCurrEmp } = useModal();
  const [loading, setLoading] = useState(true);
  const [personal, setPersonal] = useState({});
  const [job, setJob] = useState({});
  const [bank, setBank] = useState({});

  const fetchCurrEmp = async () => {
    try {
      const res = await EmployeeDetailsAPI(currEmp);
      if (res.status === "OK") {
        // toast.success("found");
        setPersonal(res.emp.personal);
        setJob(res.emp.job);
        setBank(res.emp.bank);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrEmp();
  }, []);

  return (
    <>
      {
        <div className="w-full h-[100vh] px-[15%] pt-12 fixed top-0 left-0 overflow-hidden  bg-black/60 transition-transform duration-300 ease-in-out">
          <div className="w-full h-[90vh] overflow-hidden rounded-xl scroll-smooth relative transition duration-300 ease-in-out">
            <div className="w-full h-full bg-neutral-800 text-white shadow-md p-6  mx-auto overflow-y-auto scroll  transition duration-300 ease-in-out">
              {loading && (
                <div className="w-full h-full bg-black/80 absolute top-0 left-0 text-center">
                  <p className="mt-20 inline-block w-8 h-8 border-2 border-t-transparent rounded-full animate-spin"></p>
                </div>
              )}
              <button
                className="absolute top-4 right-8 bg-neutral-800 border border-neutral-700 rounded-full px-2 py-1 cursor-pointer"
                onClick={() => setCurrEmp("")}
              >
                <i className="bi bi-x-lg"></i>
              </button>
              {/* employee avatar  */}
              <div className=" mt-5 mb-8 flex gap-10 justify-center">
                <div className="w-28 h-28 border rounded-full bg-purple-400/60 overflow-hidden">
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
                      {job?.jobRole}
                    </p>
                    <p>
                      <strong>Phone: </strong>
                      {personal?.phone}
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
              <div className="text-neutral-400 grid grid-cols-2 gap-y-4 gap-x-10 text-sm">
                <p className=" font-medium">
                  <strong className="w-32 inline-block">Full Name</strong>
                  {" : "}
                  <span>{personal?.fullname}</span>
                </p>
                <p className=" font-medium">
                  <strong className="w-32 inline-block">Date of Birth</strong>
                  {" : "}
                  <span>{personal?.dob}</span>
                </p>
                <p className=" font-medium">
                  <strong className="w-32 inline-block">Gender</strong> {" : "}
                  <span>{personal?.gender}</span>
                </p>
                <p className=" font-medium">
                  <strong className="w-32 inline-block">Email</strong> {" : "}
                  <span>{personal?.email}</span>
                </p>
                <p className=" font-medium">
                  <strong className="w-32 inline-block">Phone Number</strong>
                  {" : "}
                  <span>{personal?.phone}</span>
                </p>
                <p className=" font-medium">
                  <strong className="w-32 inline-block">Address</strong> {" : "}
                  <span>{personal?.address}</span>
                </p>
                <p className=" font-medium">
                  <strong className="w-32 inline-block">City</strong> {" : "}
                  <span>{personal?.city}</span>
                </p>
                <p className=" font-medium">
                  <strong className="w-32 inline-block">State</strong> {" : "}
                  <span>{personal?.state}</span>
                </p>
                <p className=" font-medium">
                  <strong className="w-32 inline-block">Zip Code</strong>
                  {" : "}
                  <span>{personal?.zipCode}</span>
                </p>
                <p className=" font-medium">
                  <strong className="w-32 inline-block">Nationality</strong>
                  {" : "}
                  <span>{personal?.nationality}</span>
                </p>
                <p className=" font-medium">
                  <strong className="w-32 inline-block">Marital Status</strong>
                  {" : "}
                  <span>{personal?.maritalStatus}</span>
                </p>
              </div>

              {/* job details  */}
              <h2 className="text-xl font-semibold   my-4 border-b pb-2">
                Job Details
              </h2>
              <div className="text-neutral-400 grid grid-cols-2 gap-y-4 gap-x-10 text-sm ">
                <p className=" font-medium">
                  <strong className="w-32 inline-block">Employee ID</strong>
                  {" : "}
                  <span>{job?.employeeId}</span>
                </p>
                <p className=" font-medium">
                  <strong className="w-32 inline-block">Job Title</strong>
                  {" : "}
                  <span>{job?.jobTitle}</span>
                </p>
                <p className=" font-medium">
                  <strong className="w-32 inline-block">Employment Type</strong>
                  {" : "}
                  <span>{job?.employementType}</span>
                </p>
                <p className=" font-medium">
                  <strong className="w-32 inline-block">Manager</strong> {" : "}
                  <span>{job?.manager}</span>
                </p>
                <p className=" font-medium">
                  <strong className="w-32 inline-block">Joining Date</strong>
                  {" : "}
                  <span>{job?.joiningDate}</span>
                </p>
                <p className=" font-medium">
                  <strong className="w-32 inline-block">Status</strong> {" : "}
                  <span>{job?.status}</span>
                </p>
              </div>

              {/* bank details  */}
              <h2 className="text-xl font-semibold   my-4 border-b pb-2">
                Bank Details
              </h2>
              <div className="text-neutral-400 grid grid-cols-2 gap-y-4 gap-x-10 text-sm ">
                <p className=" font-medium">
                  <strong className="w-32 inline-block">
                    Account Holder Name
                  </strong>
                  {" : "}
                  <span>{bank?.accountHolderName}</span>
                </p>
                <p className=" font-medium">
                  <strong className="w-32 inline-block">Bank Name</strong>
                  {" : "}
                  <span>{bank?.bankName}</span>
                </p>
                <p className=" font-medium">
                  <strong className="w-32 inline-block">Account Number</strong>
                  {" : "}
                  <span>{bank?.accountNumber}</span>
                </p>
                <p className=" font-medium">
                  <strong className="w-32 inline-block">IFSC Code</strong>
                  {" : "}
                  <span>{bank?.IFSCcode}</span>
                </p>
                <p className=" font-medium">
                  <strong className="w-32 inline-block">Branch Name</strong>
                  {" : "}
                  <span>{bank?.branchName}</span>
                </p>
                <p className=" font-medium">
                  <strong className="w-32 inline-block">UPI Id</strong> {" : "}
                  <span>{bank?.upiId}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default EmployeeDetails;
