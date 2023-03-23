import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainLayout from "./MainLayout";
import { BrowserRouter } from "react-router-dom";

test("renders main tag when component is rendered", () => {
  render(<MainLayout />, { wrapper: BrowserRouter });
  expect(screen.getByRole("main")).toBeInTheDocument();
});
