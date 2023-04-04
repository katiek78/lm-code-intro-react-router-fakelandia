import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MisdemeanourCitizenID from "./MisdemeanourCitizenID";
import { Misdemeanour } from "../../types/misdemeanours.types";

test("renders appropriate text when component is rendered", () => {
    const misdemeanour: Misdemeanour= {
        citizenId: 2845,
        misdemeanour: 'united',
        date: '2023-03-03',
        forgivenessesNeeded: 10
      };
  render(<MisdemeanourCitizenID misdemeanour={misdemeanour}/>);
  expect(screen.getByText("2845")).toBeInTheDocument();
});

