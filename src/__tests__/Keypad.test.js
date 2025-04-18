import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Keypad from "../components/Keypad";

beforeEach(() => {
  render(<Keypad />);
});

test("renders buttons for digits 0-9", () => {
  for (let i = 0; i <= 9; i++) {
    expect(screen.getByText(i.toString())).toBeInTheDocument();
  }
});

test("clicking a button logs the digit", () => {
  console.log = jest.fn();

  const button = screen.getByText("5");
  fireEvent.click(button);

  expect(console.log).toHaveBeenCalledWith("5");
});
