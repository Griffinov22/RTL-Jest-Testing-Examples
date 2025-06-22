import { useState } from "react";

type Page2Props = {
  listOfFacts: string[];
  cb?: (v: string | number) => void;
};

const Page2 = ({ listOfFacts: facts, cb }: Page2Props) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div style={{ padding: "5rem" }}>
      <h1>This is a test to mock props using Jest Mocks</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          if (cb != undefined) cb(count + 1);
        }}
      >
        Call cb
      </button>
      <ul>
        {facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};
export default Page2;
