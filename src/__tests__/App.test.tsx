import { render } from "../configs/utils";
import App from "../App";

describe("App Tests", () => {
  test("renders hello message", () => {
    const { getByText } = render(<App />);
    const helloElement = getByText("Vite + React");
    expect(helloElement).toBeInTheDocument();
  });

  test("clicking button increases count", async () => {
    const { getByRole, user } = render(<App />);

    const button = getByRole("button", { name: /count is 0/i });
    await user.click(button);

    expect(button).toHaveTextContent(/count is 1/i);
  });
});
