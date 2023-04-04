import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import MisdemeanourContext from "./MisdemeanourContext";
import { Misdemeanour } from "../../types/misdemeanours.types";
import Misdemeanours from "./Misdemeanours";

test("shows Loading message when no misdemeanours have been loaded", async () => {
  const user = userEvent.setup();

  render(<MisdemeanourContext.Provider value={{misdemeanours:[], setMisdemeanours: jest.fn()}}><Misdemeanours /></MisdemeanourContext.Provider>)
  expect(screen.getByText("Loading misdemeanours...")).toBeInTheDocument();
});

test("renders MisdemeanourDisplay when misdemeanours have been loaded", async () => {
  const user = userEvent.setup();
  const misdemeanour: Misdemeanour = {
    citizenId: 2845,
    misdemeanour: "vegetables",
    date: "03/03/2023",
    forgivenessesNeeded: 10,
  };

  render(<MisdemeanourContext.Provider value={{misdemeanours:[misdemeanour], setMisdemeanours: jest.fn()}}><Misdemeanours /></MisdemeanourContext.Provider>)
  expect(screen.getByText(/Forgiveness for Fakelandia citizens/i)).toBeInTheDocument();
});

