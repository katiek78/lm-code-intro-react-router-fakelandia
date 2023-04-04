import '@testing-library/jest-dom';
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

test('loads a misdemeanour when API call is made', async () => {
    const misdemeanour = {
        citizenId: 2845,
        misdemeanour: 'united',
        date: '2023-03-03'
      };
    const result = await loadMisdemeanours();   
    expect(result).toEqual(
        expect.objectContaining({
            misdemeanours: expect.arrayContaining(
                [misdemeanour]
            )
        })
    );
  });