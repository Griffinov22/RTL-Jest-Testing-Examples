import { createContext, useContext, useState, type Dispatch, type ReactElement } from "react";

export type User = {
  firstName?: string;
  lastName?: string;
};

export type UserContextOptions = {
  user: User;
  setUser: Dispatch<User>;
};

export const UserContext = createContext<UserContextOptions>({
  user: {},
  setUser: () => {
    throw Error("Make sure UserProvider is wrapping around your component to access state");
  },
});

export const useUpdateUser = () => {
  const { setUser } = useContext(UserContext);
  return setUser;
};

export const useUser = () => {
  const { user } = useContext(UserContext);
  return user;
};

const UserProvider = ({ children }: { children: ReactElement }) => {
  const [user, setUser] = useState<User>({
    firstName: "defaultfirst",
    lastName: "defaultlast",
  });

  return <UserContext value={{ user, setUser }}>{children}</UserContext>;
};

export default UserProvider;
