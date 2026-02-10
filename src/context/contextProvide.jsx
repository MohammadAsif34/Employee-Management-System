import { useState } from "react";
import { ModalContext, UserContext } from "./createContext";
import { useEffect } from "react";
import axios from "axios";

export const ModalContextProvide = ({ children }) => {
  const [currEmp, setCurrEmp] = useState("");
  const [isCreateEmp, setIsCreateEmp] = useState(false);
  const [isUpdateEmp, setIsUpdateEmp] = useState(false);
  const [isReadEmp, setIsReadEmp] = useState(false);

  useEffect(() => {
    console.log("context currEmp :: ", currEmp);
  }, [currEmp]);

  return (
    <ModalContext.Provider
      value={{
        currEmp,
        setCurrEmp,
        isReadEmp,
        setIsReadEmp,
        isCreateEmp,
        setIsCreateEmp,
        isUpdateEmp,
        setIsUpdateEmp,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// Create context

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ isAuthenticated: false, data: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProtected = async () => {
      try {
        const protectedAPI = "http://localhost:8800/api/ems/v1/emp/me";
        const res = await axios.get(protectedAPI, { withCredentials: true });
        console.log("Protected API Success:");

        console.log("Protected API Success:", res.data);
        setUser({
          isAuthenticated: true,
          data: res.data,
        });
      } catch (error) {
        console.log("Protected API Error:", error.message);
        setUser({ isAuthenticated: false, data: null });
      } finally {
        setLoading(false);
      }
    };

    getProtected();
  }, []);

  if (loading) return <div className="w-screen h-screen flex justify-center items-center text-gray-800 text-3xl">Loading...</div>;

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
