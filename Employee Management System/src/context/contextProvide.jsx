import { useState } from "react";
import { ModalContext, UserContext } from "./createContext";
import { useEffect } from "react";

export const ModalContextProvide = ({ children }) => {
  //   const createEmpRef = useRef("false");
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

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ isAuthenticated: false });
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
