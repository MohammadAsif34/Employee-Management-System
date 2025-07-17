import { createContext, useContext } from "react";

export const UserContext = createContext();
export const useUser = () => {
  return useContext(UserContext);
};

export const ModalContext = createContext();
export const useModal = () => {
  return useContext(ModalContext);
};
