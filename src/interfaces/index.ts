export interface ContextValues {
  isLogged?: boolean;
  setLogged?: Function;
  userData?: UserData;
  setUserData?: Function;
}

export interface LoginValues {
  username: string;
  password: string;
  rememberUser: boolean;
}

export interface RegisterValues {
  email: string;
  username: string;
  password: string;
  repeatPassword: string;
  rememberUser: boolean;
}

export interface Schedule {
  subjects: Subject[];
  days: string[];
}
export interface Subject {
  hours: string[];
  teacher: string;
  name: string;
}
export interface UserData {
  _id: string;
  username: string;
  email: string;
  schedule: Schedule;
}
