import { useState } from "react";
import { useGetUsers } from "./hooks/useGetUsers";

type Page2Props = {
  listOfFacts: string[];
  cb?: (v: string | number) => void;
};

const Page2 = ({ listOfFacts: facts, cb }: Page2Props) => {
  const [count, setCount] = useState<number>(0);
  const { users, loading, error } = useGetUsers();

  return (
    <div style={{ padding: "5rem" }}>
      <h1>This is a test to mock props and hooks using Jest Mocks</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          if (cb != undefined) cb(count + 1);
        }}
      >
        Call cb
      </button>
      <h3>Our Users</h3>
      {error ? (
        <p>Error Fetching users!</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <ul data-testid="users">
          {users ? (
            users.map((user) => <li key={user.id}>{user.name + "  - " + user.phone}</li>)
          ) : (
            <li>No users available</li>
          )}
        </ul>
      )}

      <h3>Facts</h3>
      <ul data-testid="facts">
        {facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};
export default Page2;
