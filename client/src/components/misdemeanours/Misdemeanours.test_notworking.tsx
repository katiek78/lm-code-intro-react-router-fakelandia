import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MisdemeanourContext from "./MisdemeanourContext";
import { Misdemeanour } from "../types/misdemeanours.types";
import MisdemeanourDisplay from "./MisdemeanourDisplay";
import Misdemeanours from "./Misdemeanours";
import { rest } from 'msw';
import { setupServer } from 'msw/node'
import loadMisdemeanours from './loadMisdemeanour';

const server = setupServer(
    rest.get('http://localhost:8080/api/misdemeanours/5', (req, res, ctx) => {
  
      return res(ctx.json({
          "misdemeanours": [
            {
              citizenId: 2845,
              misdemeanour: 'united',
              date: '2023-03-03'
            }
          ]
      }));
    }));
  
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

//NOTE: Could not get this to work
// test('calls loadMisdemeanours', async () => {
//     const loadMisdemeanours = jest.fn();
//     render(<Misdemeanours />);
//     expect(loadMisdemeanours).toHaveBeenCalledTimes(1);
//   });

