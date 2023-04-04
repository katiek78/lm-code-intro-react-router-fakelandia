import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MisdemeanourForgiveness from "./MisdemeanourForgiveness";
import { Misdemeanour } from "../../types/misdemeanours.types";

test("renders appropriate number of 'forgivenesses needed' when component is rendered", () => {
  const misdemeanour: Misdemeanour = {
    citizenId: 2845,
    misdemeanour: "vegetables",
    date: "03/03/2023",
    forgivenessesNeeded: 10,
  };
  render(<MisdemeanourForgiveness misdemeanour={misdemeanour} />);
  expect(screen.getByText("10")).toBeInTheDocument();
});
