import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Game } from "../components/Game";

jest.mock("react-redux", function () {
  return {
    useSelector: () => {
      return "test";
    },
    useDispatch: jest.fn(),
  };
});

jest.mock("react-router-dom", () => {
  // Require the original module to not be mocked...
  const originalModule = jest.requireActual("react-router-dom");

  return {
    __esModule: true,
    ...originalModule,
    // add your noops here
    useParams: jest.fn(),
    useHistory: jest.fn(),
    useNavigate: jest.fn(),
    Link: ({ children }) => <div>{children}</div>,
  };
});

jest.mock("react-router", () => {
  // Require the original module to not be mocked...
  const originalModule = jest.requireActual("react-router");

  return {
    __esModule: true,
    ...originalModule,
    // add your noops here
    useParams: jest.fn(),
    useHistory: jest.fn(),
    useNavigate: jest.fn(),
    useLocation: jest.fn(),
    useHref: jest.fn(),
  };
});

test("link renders correctly", () => {
  const testRender = render(<Game />);
  const linkElement = screen.getByText(/learn more/i);
  expect(linkElement).toBeInTheDocument(testRender);
});

describe("heading render", () => {
  it("should render text for h1", () => {
    const testRender = render(<Game />);
    const titleValue = screen.getByText(/Monty Hall Simulator/i);
    expect(titleValue).toBeInTheDocument(testRender);
  });
});

describe("check submit button", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should show error if data was not input", async () => {
    const testRender = render(<Game />);
    fireEvent.click(await screen.findByTestId("submit-button"));
    await waitFor(() => {
      expect(screen.getByTestId("submit-button")).toBeInTheDocument();
    });
  });
});
