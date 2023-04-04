import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MisdemeanourFilter from "./MisdemeanourFilter";
import { Misdemeanour } from "../../types/misdemeanours.types";

test("renders filter select box", () => {
  const misdemeanours: Misdemeanour[] = [];
  render(<MisdemeanourFilter filterKind="" setFilterKind={jest.fn()} />);
  const filterMisdemeanourKind = screen.getByRole("combobox");
  expect(filterMisdemeanourKind).toBeInTheDocument();
});

test("placeholder option is selected", () => {
  render(<MisdemeanourFilter filterKind="" setFilterKind={jest.fn()} />);
  const filterMisdemeanourKind: HTMLSelectElement =
    screen.getByRole("combobox");
  const options: HTMLOptionsCollection = filterMisdemeanourKind.options;
  expect(options[0].selected).toBeTruthy();
});

test("filter box has six options with required values and text content", () => {
  render(<MisdemeanourFilter filterKind="" setFilterKind={jest.fn()} />);

  expect(screen.getAllByRole("option").length).toBe(6);
  expect(screen.getAllByRole("option")[0]).toHaveValue("");
  expect(screen.getAllByRole("option")[0]).toHaveTextContent("Filter");
  expect(screen.getAllByRole("option")[1]).toHaveValue("rudeness");
  expect(screen.getAllByRole("option")[1]).toHaveTextContent("rudeness");
  expect(screen.getAllByRole("option")[2]).toHaveValue("vegetables");
  expect(screen.getAllByRole("option")[2]).toHaveTextContent("vegetables");
  expect(screen.getAllByRole("option")[3]).toHaveValue("lift");
  expect(screen.getAllByRole("option")[3]).toHaveTextContent("lift");
  expect(screen.getAllByRole("option")[4]).toHaveValue("united");
  expect(screen.getAllByRole("option")[4]).toHaveTextContent("united");
  expect(screen.getAllByRole("option")[5]).toHaveValue("all");
  expect(screen.getAllByRole("option")[5]).toHaveTextContent("** show all **");
});
