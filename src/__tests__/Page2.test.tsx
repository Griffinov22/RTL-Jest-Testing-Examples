import { render } from "../configs/utils";
import { useGetUsers } from "../hooks/useGetUsers";
import Page2 from "../Page2";

const mockFunc = jest.fn().mockReturnValue((n: number) => console.log("This might be a dumb example #" + n));

jest.mock("../hooks/useGetUsers.tsx");

describe("Page2 tests", () => {
  let factList: string[] = [];

  beforeEach(() => {
    factList = ["super cool fact", "another cool fact"];

    (useGetUsers as jest.Mock).mockReturnValue({
      loading: false,
      error: false,
      users: [
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
              lat: "-43.9509",
              lng: "-34.4618",
            },
          },
          phone: "010-692-6593 x09125",
          website: "anastasia.net",
          company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
          },
        },
      ],
    });
  });

  test("Page renders correctly", () => {
    const { getByTestId, getByText } = render(<Page2 listOfFacts={factList} />);

    expect(getByTestId("facts").childElementCount).toBe(2);
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
    expect(mockFunc.mock.calls[4][0]).toBe(5);
  });

  test("mocked hook returns correct data", () => {
    const { getByTestId } = render(<Page2 listOfFacts={factList} />);

    expect(getByTestId("users").children[0]).toHaveTextContent(/Ervin Howell/);
  });
});
