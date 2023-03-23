import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MisdemeanourContext from "./MisdemeanourContext";
import { Misdemeanour } from "../../types/misdemeanours.types";
import MisdemeanourDisplay from "./MisdemeanourDisplay";

test('provides expected MisdemeanourContext object to child elements', () => {
    const misdemeanours: Misdemeanour[] = [{
        citizenId: 2845,
        misdemeanour: 'united',
        date: '2023-03-03'
    }]
    const { container } = render(
        <MisdemeanourContext.Provider value={misdemeanours}>
          <MisdemeanourDisplay />
        </MisdemeanourContext.Provider>,
    );
          
    const misdemeanourTable = container.getElementsByClassName('container')[1];
    expect(misdemeanourTable.childNodes.length).toBeGreaterThanOrEqual(8);
})