export  interface IUser {
    id: number;
    name: string;
    company: string;
  }


  export interface IUserCredentials {
    email:string,
    password:string
  }


  export interface IUserInitialSlice extends IUserCredentials {
    isLoggedIn:boolean
  }