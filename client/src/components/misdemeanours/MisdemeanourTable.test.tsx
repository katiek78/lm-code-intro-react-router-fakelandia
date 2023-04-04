import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event"
import MisdemeanourTable from "./MisdemeanourTable";
import { Misdemeanour } from "../../types/misdemeanours.types";
import MisdemeanourContext from "./MisdemeanourContext";

test('renders table headings', () => {
    const misdemeanours: Misdemeanour[] = [];
    render(
        <MisdemeanourTable />,
    );              
    expect(screen.getByText(/Citizen ID/i)).toBeInTheDocument();
    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Misdemeanour/i)).toBeInTheDocument();
    expect(screen.getByText(/Punishment idea/i)).toBeInTheDocument();
})

test('changing selection in filter box updates misdemeanours on screen', async () => {
const user = userEvent.setup();
const misdemeanour: Misdemeanour = {
  citizenId: 2845,
  misdemeanour: "vegetables",
  date: "03/03/2023",
  forgivenessesNeeded: 10,
};

render(<MisdemeanourContext.Provider value={{misdemeanours:[misdemeanour], setMisdemeanours: jest.fn()}}><MisdemeanourTable /></MisdemeanourContext.Provider>)

expect(screen.getByText("2845")).toBeInTheDocument();
const kindSelect = screen.getByRole('combobox');
fireEvent.change(kindSelect, {target: {value: 'rudeness'}});    

expect(screen.queryByText("2845")).not.toBeInTheDocument();
})

