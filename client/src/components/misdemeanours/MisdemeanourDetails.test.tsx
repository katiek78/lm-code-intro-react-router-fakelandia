import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MisdemeanourDetails from "./MisdemeanourDetails";
import { Misdemeanour } from "../../types/misdemeanours.types";

test("renders appropriate text when component is rendered", () => {
    const misdemeanour: Misdemeanour= {
        citizenId: 2845,
        misdemeanour: 'united',
        date: '03/03/2023',
        forgivenessesNeeded: 10,
        details: 'Come on you reds etc. etc.'
      };
  render(<MisdemeanourDetails misdemeanour={misdemeanour}/>);
  expect(screen.getByText("Come on you reds etc. etc.")).toBeInTheDocument();
});

