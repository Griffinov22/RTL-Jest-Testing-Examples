import { render } from "../configs/utils";
import Page2 from "../Page2";

const mockFunc = jest.fn().mockReturnValue((n: number) => console.log("This might be a dumb example #" + n));

describe("Page2 tests", () => {
  let factList: string[] = [];

  beforeEach(() => {
    factList = ["super cool fact", "another cool fact"];
  });

  test("Page renders correctly", () => {
    const { queryAllByRole, getByText } = render(<Page2 listOfFacts={factList} />);

    expect(queryAllByRole("listitem")).toHaveLength(2);
    expect(getByText(/super cool fact/i)).toBeInTheDocument();
    expect(getByText(/another cool fact/i)).toBeInTheDocument();
  });

  test("mocking prop function works", async () => {
    const { getByRole, user } = render(
      <Page2
        listOfFacts={factList}
        cb={mockFunc}
      />
    );

    const btn = getByRole("button");

    for (let i = 0; i < 5; i++) {
      await user.click(btn);
    }

    expect(mockFunc.mock.calls).toHaveLength(5);
  });
});
