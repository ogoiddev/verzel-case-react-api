import { createContext, ReactNode, useState } from 'react';

type UserContextProps = {
  children: ReactNode;
}

const IUserDataType = {
  userData: {
    name: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    thumb: '',
    },
  token: '',
}

type IUserDataType = {
  userData: {
    name: string;
    lastName: string;
      email: string;
      password: string;
      role: string;
      thumb: string;
    }
    token: string;
}

type UserContextType = {
  userData: IUserDataType;
  setUserData: React.Dispatch<React.SetStateAction<IUserDataType>>,
}

const initialValue = {
  userData: IUserDataType,
  setUserData: () => {}
}

export const UserContext = createContext<UserContextType>(initialValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [userData, setUserData] = useState(initialValue.userData);

  

  return (
    <UserContext.Provider value={ {userData, setUserData} }>
      {children}
    </UserContext.Provider>
  );
};
