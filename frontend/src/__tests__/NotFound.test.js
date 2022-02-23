import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NotFound } from "../components/NotFound";

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

test("should render the back link on notfound screen correctly", () => {
  const testRender = render(<NotFound />);
  const linkElement = screen.getByText(/Go back/i);
  expect(linkElement).toBeInTheDocument(testRender);
});

describe("results render", () => {
  it("should render text with page not found", () => {
    const testRender = render(<NotFound />);
    const titleValue = screen.getByText(/Page not found./i);
    expect(titleValue).toBeInTheDocument(testRender);
  });
});
