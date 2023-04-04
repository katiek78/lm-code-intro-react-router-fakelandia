import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MisdemeanourPunishment from "./MisdemeanourPunishment";
import { Misdemeanour } from "../../types/misdemeanours.types";

test("renders appropriate image when misdemeanour is 'united'", () => {
    const misdemeanourUnited: Misdemeanour= {
        citizenId: 2845,
        misdemeanour: 'united',
        date: '03/03/2023',
        forgivenessesNeeded: 10,
        details: 'Come on you reds etc. etc.'
      };
  render(<MisdemeanourPunishment misdemeanour={misdemeanourUnited}/>);
  expect(screen.getByAltText("Liverpool FC flag")).toBeInTheDocument();
});

test("renders appropriate image when misdemeanour is not 'united'", () => {
    const misdemeanour: Misdemeanour= {
        citizenId: 2845,
        misdemeanour: 'vegetables',
        date: '03/03/2023',
        forgivenessesNeeded: 10,
        details: 'I never eat vegetables'
      };
  render(<MisdemeanourPunishment misdemeanour={misdemeanour}/>);
  expect(screen.queryByAltText("Liverpool FC flag")).not.toBeInTheDocument();
});

