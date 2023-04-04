import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MisdemeanourTable from "./MisdemeanourTable";
import { Misdemeanour } from "../../types/misdemeanours.types";


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