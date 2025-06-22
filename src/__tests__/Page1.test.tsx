import { render } from "../configs/utils";
import UserProvider from "../contexts/UserContext";
import Page1 from "../Page1";

describe("Page1 Tests", () => {
  test("Page1 can't access surrounding context", () => {
    const { queryByText } = render(<Page1 />);

    // this pulls from context state that isn't surrounding the component
    expect(queryByText(/defaultfirst/i)).not.toBeInTheDocument();
  });

  test("Page1 renders default name if has surrounding context", () => {
    const { queryByText } = render(
      <UserProvider>
        <Page1 />
      </UserProvider>
    );

    expect(queryByText(/defaultfirst/i)).toBeInTheDocument();
  });

  test("Page1 user name updates correctly", async () => {
    const { getByPlaceholderText, user, getByRole } = render(
      <UserProvider>
        <Page1 />
      </UserProvider>
    );

    const firstNameInput = getByPlaceholderText(/change first name.../i);
    const lastNameInput = getByPlaceholderText(/change last name.../i);

    expect(firstNameInput).toHaveValue("");
    expect(lastNameInput).toHaveValue("");

    await user.type(firstNameInput, "Rob");
    await user.type(lastNameInput, "Bob");
    await user.click(getByRole("button"));

    expect(firstNameInput).toHaveValue("Rob");
    expect(lastNameInput).toHaveValue("Bob");
  });
});
