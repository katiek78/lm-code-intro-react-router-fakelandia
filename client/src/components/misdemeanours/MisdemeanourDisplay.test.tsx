import { render, screen, act, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import MisdemeanourContext from "./MisdemeanourContext";
import { Misdemeanour } from "../types/misdemeanours.types";
import MisdemeanourDisplay from "./MisdemeanourDisplay";

test('renders filter select box', () => {
    const misdemeanours: Misdemeanour[] = [];
    render(
        <MisdemeanourContext.Provider value={misdemeanours}>
          <MisdemeanourDisplay />
        </MisdemeanourContext.Provider>,
    );          
    const filterMisdemeanourKind = screen.getByRole('combobox');
    expect(filterMisdemeanourKind).toBeInTheDocument();
})

test('renders table headings', () => {
    const misdemeanours: Misdemeanour[] = [];
    render(
        <MisdemeanourContext.Provider value={misdemeanours}>
          <MisdemeanourDisplay />
        </MisdemeanourContext.Provider>,
    );              
    expect(screen.getByText(/Citizen ID/i)).toBeInTheDocument();
    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Misdemeanour/i)).toBeInTheDocument();
    expect(screen.getByText(/Punishment idea/i)).toBeInTheDocument();
})

test('placeholder option is selected', () => {
    const misdemeanours: Misdemeanour[] = [];
    render(
        <MisdemeanourContext.Provider value={misdemeanours}>
          <MisdemeanourDisplay />
        </MisdemeanourContext.Provider>,
    );          
    const filterMisdemeanourKind : HTMLSelectElement = screen.getByRole('combobox');
    const options: HTMLOptionsCollection = filterMisdemeanourKind.options;
    expect(options[0].selected).toBeTruthy();
})

test('filter box has six options with required values and text content', () => {
    const misdemeanours: Misdemeanour[] = [];
    render(
        <MisdemeanourContext.Provider value={misdemeanours}>
          <MisdemeanourDisplay />
        </MisdemeanourContext.Provider>,
    );
              
    expect(screen.getAllByRole('option').length).toBe(6);
    expect(screen.getAllByRole('option')[0]).toHaveValue("");
    expect(screen.getAllByRole('option')[0]).toHaveTextContent("Filter");
    expect(screen.getAllByRole('option')[1]).toHaveValue("rudeness");
    expect(screen.getAllByRole('option')[1]).toHaveTextContent("rudeness");
    expect(screen.getAllByRole('option')[2]).toHaveValue("vegetables");
    expect(screen.getAllByRole('option')[2]).toHaveTextContent("vegetables");
    expect(screen.getAllByRole('option')[3]).toHaveValue("lift");
    expect(screen.getAllByRole('option')[3]).toHaveTextContent("lift");
    expect(screen.getAllByRole('option')[4]).toHaveValue("united");
    expect(screen.getAllByRole('option')[4]).toHaveTextContent("united");
    expect(screen.getAllByRole('option')[5]).toHaveValue("all");
    expect(screen.getAllByRole('option')[5]).toHaveTextContent("** show all **");
})

//NOTE: Could not get this test to work properly (testing onChange of select box)
// test('changing selection in filter box calls changeFilter', async () => {
//     const misdemeanours: Misdemeanour[] = [];   
//     const changeFilter = jest.fn(); 
//     render(
//         <MisdemeanourContext.Provider value={misdemeanours}>
//           <MisdemeanourDisplay />
//         </MisdemeanourContext.Provider>,
//     );
//     //await userEvent.selectOptions(screen.getByRole('combobox'), 'vegetables');              
//     // fireEvent.change(screen.getByRole('combobox'), { target: { value: 'vegetables' } });
//     //await userEvent.type(screen.getByRole('combobox'), 'vegetables');
//     const user = userEvent.setup();
//     const select = screen.getByRole('combobox');
       
//     // await act(async () => userEvent.click(select));

//     // const selectedItem = screen.getByText('vegetables');
//     // await act(async () => userEvent.click(selectedItem));
    
//     await user.click(screen.getByText(/Filter/i));
//     await waitFor(() => expect(screen.getByText(/vegetables/i)).toBeInTheDocument());
//     await user.click(screen.getByText(/vegetables/i))

//     expect(changeFilter).toHaveBeenCalledTimes(1);
//     expect(changeFilter).toHaveBeenCalledWith('united');   
// })