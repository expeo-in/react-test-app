import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("Greeting should render welcome message", () => {
  render(<Greeting />);
  const element = screen.getByText("Hi Guest");
  expect(element).toBeInTheDocument();
});

test("Greeting should render welcome with given name", () => {
  render(<Greeting name="Raju" />);
  const element = screen.getByText("Hi Raju");
  expect(element).toBeInTheDocument();
});
