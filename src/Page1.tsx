import { useUpdateUser, useUser } from "./contexts/UserContext";

const Page1 = () => {
  const user = useUser();
  const setUser = useUpdateUser();

  const buttonClick = () => {
    const firstInput: string = document.querySelector<HTMLInputElement>("[name='firstName']")!.value;
    const lastInput: string = document.querySelector<HTMLInputElement>("[name='lastName']")!.value;

    setUser({ firstName: firstInput, lastName: lastInput });
  };

  return (
    <div style={{ padding: "5rem" }}>
      <h1>This is a test for my understanding on how to mock contexts in Jest</h1>
      <div>
        <label htmlFor="firstName">First name: {user.firstName}</label>
        <input
          name="firstName"
          style={{ display: "block", marginTop: "0.5rem" }}
          placeholder="change first name..."
        />
      </div>
      <div style={{ marginTop: "2rem" }}>
        <label htmlFor="LastName">Last name: {user.lastName}</label>
        <input
          name="lastName"
          style={{ display: "block", marginTop: "0.5rem" }}
          placeholder="change last name..."
        />
      </div>
      <button
        style={{ marginTop: "2rem" }}
        onClick={buttonClick}
      >
        Change user names
      </button>
    </div>
  );
};
export default Page1;
