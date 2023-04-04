import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MisdemeanourDisplay from "./MisdemeanourDisplay";

test('renders appropriate text', () => {
  render(<MisdemeanourDisplay />);
  expect(screen.getByText(/Forgiveness for Fakelandia citizens/i)).toBeInTheDocument();

});