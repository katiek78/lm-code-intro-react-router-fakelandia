import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Statistics from "./Statistics";
import MisdemeanourContext from "../misdemeanours/MisdemeanourContext";
import { Misdemeanour } from "../../types/misdemeanours.types";

test("renders appropriate text when component is rendered", () => {
  render(<Statistics />);
  expect(screen.getByText(/Total misdemeanours so far:/i)).toBeInTheDocument();
});

test("renders 0 when no misdemeanours are provided in the context", () => {
  render(
    <MisdemeanourContext.Provider
      value={{ misdemeanours: [], setMisdemeanours: jest.fn() }}
    >
      <Statistics />
    </MisdemeanourContext.Provider>
  );
  expect(screen.getByText(/0/i)).toBeInTheDocument();
});

test("renders 2 when 2 misdemeanours are provided in the context", () => {
  const misdemeanourArray: Misdemeanour[] = [
    {
      citizenId: 334,
      misdemeanour: "rudeness",
      date: "2023/03/03",
      details: "I was mildly rude in public",
      forgivenessesNeeded: 10,
    },
    {
      citizenId: 335,
      misdemeanour: "vegetables",
      date: "2023/03/05",
      details: "I ate no vegetables for a week",
      forgivenessesNeeded: 10,
    },
  ];
  render(
    <MisdemeanourContext.Provider
      value={{ misdemeanours: misdemeanourArray, setMisdemeanours: jest.fn() }}
    >
      <Statistics />
    </MisdemeanourContext.Provider>
  );
  expect(screen.getByText(/2/i)).toBeInTheDocument();
});
