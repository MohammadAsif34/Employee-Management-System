import { useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "./Context";

// USER_CONTEXT_PROVIDER
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const api = `${import.meta.env.VITE_BASE_SERVER_API}user`;
        console.log("server start :: ", api);
        const res = await axios.get(api, {
          withCredentials: true,
        });
        console.log("protected api :: ", res.data);
        setUser(res.data.info);
      } catch (error) {
        console.error("User fetch failed:", error.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
      console.log("server end");
    };
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
