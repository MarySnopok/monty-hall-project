import { End } from "../components/End";
import { render, screen } from "@testing-library/react";
import CardContent from "@mui/material/CardContent";
import "@testing-library/jest-dom";

jest.mock("react-redux", function () {
  return {
    useSelector: () => {
      return "test";
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
  it("it should render and not crash", () => {
    const testRenderer = render(<End />);

    expect(screen.getByText("Play again!")).toBeInTheDocument();
  });
});
