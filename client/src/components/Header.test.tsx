import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

test("renders header tag when component is rendered", () => {
  render(<Header />, { wrapper: BrowserRouter });
  expect(screen.getByRole("banner")).toBeInTheDocument();
});
