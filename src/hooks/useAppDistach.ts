import { useDispatch } from "react-redux";
import { TAppDispatch } from "../redux/types";

export const useAppDispatch = () => useDispatch<TAppDispatch>();
 