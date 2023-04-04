import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event"
import MisdemeanourList from "./MisdemeanourList";
import MisdemeanourContext from "./MisdemeanourContext";
import { Misdemeanour } from "../../types/misdemeanours.types";

test("decreases number of 'forgivenesses needed' when pigeon is clicked", async () => {
    const user = userEvent.setup();
    const misdemeanour: Misdemeanour = {
      citizenId: 2845,
      misdemeanour: "vegetables",
      date: "03/03/2023",
      forgivenessesNeeded: 10,
    };

    render(<MisdemeanourContext.Provider value={{misdemeanours:[misdemeanour], setMisdemeanours: jest.fn()}}><MisdemeanourList /></MisdemeanourContext.Provider>)
    const pigeon = screen.getByAltText('peace pigeon icon');
    await userEvent.click(pigeon);
    expect(await screen.findByText("9")).toBeInTheDocument();

    //ALTERNATIVE VERSION HERE WHICH WORKED, BUT MESSED UP OTHER TESTS
    //render(<MisdemeanourList />, {wrapper: MisdemeanourContextProvider})    
    // const pigeons = await screen.findAllByAltText("peace pigeon icon");
    // if (pigeons.length) {
    //     const pigeon = pigeons[0];
    //     expect(screen.getAllByText("10").length).toBeGreaterThan(0);
    //     await userEvent.click(pigeon);             
    //   //  expect(await screen.findByText("9")).toBeInTheDocument();   
    // } 
  });

//NOTE - this isn't working (I expect to find "9" in the document after clicking the pigeon, because it reduces forgivenessesNeeded by 1)
//It doesn't seem to actually update the state - setMisdemeanours is set to jest.fn(), which could be the problem, but I don't know how to rectify it
//I was able to make this test work by replacing MisdemeanourContext.Provider with a component MisdemeanourContextProvider that loads the misdemeanours into state
//But then I didn't have any control over the misdemeanours passed in, so it messed up all my other tests