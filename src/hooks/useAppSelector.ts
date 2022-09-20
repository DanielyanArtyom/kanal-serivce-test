import { TypedUseSelectorHook, useSelector } from "react-redux";
import { IRootState } from "../redux/types";

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
