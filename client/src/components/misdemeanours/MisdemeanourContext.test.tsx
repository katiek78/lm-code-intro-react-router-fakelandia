import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MisdemeanourContext from "./MisdemeanourContext";
import { Misdemeanour } from "../../types/misdemeanours.types";
import MisdemeanourDisplay from "./MisdemeanourDisplay";

test('provides expected MisdemeanourContext object to child elements', () => {
    const misdemeanours: Misdemeanour[] = [{
        citizenId: 2845,
        misdemeanour: 'united',
        date: '2023-03-03',
        forgivenessesNeeded: 10
    }]
    const { container } = render(
        <MisdemeanourContext.Provider value={{misdemeanours, setMisdemeanours: jest.fn()}}>
          <MisdemeanourDisplay />
        </MisdemeanourContext.Provider>,
    );
              
    expect(screen.getByText(2845)).toBeInTheDocument();
})