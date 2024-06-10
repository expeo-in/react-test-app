import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("Counter should render default value", () => {
  render(<Counter />);
  //screen.debug();
  //const element = screen.getByText("0");
  const element = screen.getByTestId("counter-value");
  expect(element.innerHTML).toBe("0");
  //expect(element).toBeInTheDocument();
});

test("Counter should increment the count when increment button is clicked", () => {
  render(<Counter />);
  fireEvent.click(screen.getByRole("button"));
  const element = screen.getByTestId("counter-value");
  //screen.debug();
  expect(element.innerHTML).toBe("1");
});
