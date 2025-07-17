import { useEffect, useState } from "react";
import { ModalContext, UserContext } from "./CreateContext";
import { ProtectedAPI } from "../services/action.service";

export const UserContextProvider = ({ children }) => {
  const [appKey, setAppKey] = useState(0);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getprotectecd = async () => {
      try {
        const res = await ProtectedAPI();
        if (res?.status == "OK") {
          setUser(res?.user);
        }
        console.log("protected api ::", res);
      } catch (error) {
        console.log("error protected api ::", error.message);
      } finally {
        setLoading(false);
      }
    };
    getprotectecd();
  }, []);

  return (
    <UserContext.Provider value={{ appKey, setAppKey, user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

// modal context
export const ModalContextProvider = ({ children }) => {
  const [createEmp, setCreateEmp] = useState(false);
  const [updateEmp, setUpdateEmp] = useState("");
  const [currEmp, setCurrEmp] = useState("");
  // console.log(currEmp)

  return (
    <ModalContext.Provider
      value={{
        createEmp,
        setCreateEmp,
        updateEmp,
        setUpdateEmp,
        currEmp,
        setCurrEmp,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
