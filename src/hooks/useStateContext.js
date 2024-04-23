import { useContext } from "react";
import { StateContext } from "../context/ContextProvider";
export const useStateContext = () => useContext(StateContext)