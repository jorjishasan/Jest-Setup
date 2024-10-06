// src/__tests__/Header.test.js

import { expect, test } from "@jest/globals";
import Header from "../component/Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Check Header load with specific text 'Hey, Good Developers 😜'", () => {
  // render
  render(<Header />);

  // assertion
  const targetElement = screen.getByText("Hey, Good Developers 😜");

  // expect
  expect(targetElement).toBeInTheDocument();
});
