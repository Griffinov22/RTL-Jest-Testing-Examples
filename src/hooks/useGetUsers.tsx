import { useEffect, useState } from "react";

export type JsonUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  Address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type GetUserOptions = {
  users: JsonUser[] | null;
  loading: boolean;
  error: boolean;
};

export const useGetUsers = () => {
  const [userOptions, setUserOptions] = useState<GetUserOptions>({
    users: null,
    loading: true,
    error: false,
  });

  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) setUserOptions({ error: true, loading: false, users: null });

      const data = await res.json();

      setUserOptions({ error: false, loading: false, users: data });
    })();
  });

  return userOptions;
};
