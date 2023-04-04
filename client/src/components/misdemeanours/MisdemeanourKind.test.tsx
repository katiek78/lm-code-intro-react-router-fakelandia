import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MisdemeanourKind from "./MisdemeanourKind";
import { Misdemeanour } from "../../types/misdemeanours.types";

test("renders appropriate text when component is rendered", () => {
    const misdemeanour: Misdemeanour= {
        citizenId: 2845,
        misdemeanour: 'vegetables',
        date: '03/03/2023',
        forgivenessesNeeded: 10
      };
  render(<MisdemeanourKind misdemeanour={misdemeanour}/>);
  expect(screen.getByText("vegetables")).toBeInTheDocument();
});

