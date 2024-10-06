import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("Check Header load with specific text: 'Hey, Good Developers 😜'", () => {
  // render
  render(<Header />);

  // assertion
  const targetElement = screen.getByText("Hey, Good Developers 😜");

  // expect
  expect(targetElement).toBeInTheDocument();
});
