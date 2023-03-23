import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MisdemeanourContext from "./MisdemeanourContext";
import { Misdemeanour } from "../../types/misdemeanours.types";
import MisdemeanourDisplay from "./MisdemeanourDisplay";

test('renders filter select box', () => {
    const misdemeanours: Misdemeanour[] = [];
    const { container } = render(
        <MisdemeanourContext.Provider value={misdemeanours}>
          <MisdemeanourDisplay />
        </MisdemeanourContext.Provider>,
    );          
    const filterMisdemeanourKind = screen.getByRole('combobox');
    expect(filterMisdemeanourKind).toBeInTheDocument();
})

//expect(screen.getByRole('option', { name: 'Select a country' }).selected).toBe(true)

test('placeholder option is selected', () => {
    const misdemeanours: Misdemeanour[] = [];
    const { container } = render(
        <MisdemeanourContext.Provider value={misdemeanours}>
          <MisdemeanourDisplay />
        </MisdemeanourContext.Provider>,
    );
          
    const filterMisdemeanourKind : HTMLSelectElement = screen.getByRole('combobox');
    const options: HTMLOptionsCollection = filterMisdemeanourKind.options;
    expect(options[0].selected).toBeTruthy();

})

test('filter box has six options', () => {
    const misdemeanours: Misdemeanour[] = [];
    const { container } = render(
        <MisdemeanourContext.Provider value={misdemeanours}>
          <MisdemeanourDisplay />
        </MisdemeanourContext.Provider>,
    );
              
    expect(screen.getAllByRole('option').length).toBe(6);
})