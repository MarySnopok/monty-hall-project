import { End } from "../components/End";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("reducers/game", function () {
  const originalModule = jest.requireActual("reducers/game");

  return {
    __esModule: true,
    ...originalModule,
    selectWinCount: () => 500,
    selectSimulations: () => 1000,
  };
});

jest.mock("react-redux", function () {
  return {
    useSelector: (selector) => {
      return selector();
    },
    useDispatch: () => {},
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

describe("Test end screen", () => {
  it("should render and not crash", () => {
    const testRenderer = render(<End />);
    expect(screen.getByText("Run new simulation!")).toBeInTheDocument();
  });
});

describe("Test game results rendering", () => {
  it("should render game results", () => {
    const testRender = render(<End />);
    const titleValue = screen.getByTestId("test-id");
    const winCount = screen.getByTestId("win-count");
    const simulations = screen.getByTestId("simulations-count");
    expect(winCount).toHaveTextContent("500");
    expect(simulations).toHaveTextContent("1000");
  });
});
