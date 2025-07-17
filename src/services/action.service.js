import axios from "axios";

export const ProtectedAPI = async () => {
  try {
    const api = `${import.meta.env.VITE_BASE_URL}/emp/me`;
    const res = await axios.get(api, { withCredentials: true });
    return res.data;
  } catch (error) {
    return "error logout api ::" + error.message;
  }
};

export const LoginAPI = async (data) => {
  try {
    const api = `${import.meta.env.VITE_BASE_URL}/auth/login`;
    const res = await axios.post(api, data, { withCredentials: true });
    return res.data;
  } catch (error) {
    return "error logout api ::" + error.message;
  }
};

export const LogoutAPI = async () => {
  const logoutApi = `${import.meta.env.VITE_BASE_URL}/auth/logout`;
  try {
    const res = await axios.post(logoutApi, {}, { withCredentials: true });
    return res.data;
  } catch (error) {
    return "error logout api ::" + error.message;
  }
};

export const EmployeeDetailsAPI = async (id) => {
  console.log("id", id);
  try {
    const logoutApi = `${import.meta.env.VITE_BASE_URL}/emp/user/${id}`;
    const res = await axios.get(logoutApi, { withCredentials: true });
    return res.data;
  } catch (error) {
    return "error logout api ::" + error.message;
  }
};

export const EmployeeCreateAPI = async ({ personal, job, bank }) => {
  try {
    const api = `${import.meta.env.VITE_BASE_URL}/emp/user`;
    const res = await axios.post(
      api,
      { personal, job, bank },
      { withCredentials: true }
    );
    return res.data;
  } catch (error) {
    return "error logout api ::" + error.message;
  }
};

export const EmployeeUpdateAPI = async (data) => {
  try {
    const api = `${import.meta.env.VITE_BASE_URL}/emp/user`;
    const res = await axios.put(api, data, { withCredentials: true });
    return res.data;
  } catch (error) {
    return "error logout api ::" + error.message;
  }
};

export const EmployeeDeleteAPI = async (id) => {
  try {
    const api = `${import.meta.env.VITE_BASE_URL}/emp/user/${id}`;
    const res = await axios.delete(api, { withCredentials: true });
    return res.data;
  } catch (error) {
    return "error logout api ::" + error.message;
  }
};

export const EmployeeListAPI = async () => {
  try {
    const api = `${import.meta.env.VITE_BASE_URL}/emp/get-all`;
    const res = await axios.get(api, { withCredentials: true });
    return res.data;
  } catch (error) {
    return "error logout api ::" + error.message;
  }
};
