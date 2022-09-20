import { rootReducer } from "./rootReducer";
import { store } from "./store";

export interface IRootState extends ReturnType<typeof rootReducer> {}


export type TAppDispatch = typeof store.dispatch;

export interface IAsyncThunkConfig {
    state: IRootState;
    dispatch: TAppDispatch;
    extra: any;
    rejectValue: any;
    serializedErrorType: any;
  }