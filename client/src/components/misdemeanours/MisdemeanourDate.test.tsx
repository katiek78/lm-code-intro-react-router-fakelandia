import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MisdemeanourDate from "./MisdemeanourDate";
import { Misdemeanour } from "../../types/misdemeanours.types";

test("renders appropriate text when component is rendered", () => {
    const misdemeanour: Misdemeanour= {
        citizenId: 2845,
        misdemeanour: 'united',
        date: '03/03/2023',
        forgivenessesNeeded: 10
      };
  render(<MisdemeanourDate misdemeanour={misdemeanour}/>);
  expect(screen.getByText("03/03/2023")).toBeInTheDocument();
});

