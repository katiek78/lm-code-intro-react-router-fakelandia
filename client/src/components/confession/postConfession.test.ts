import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { ConfessionType } from "../../types/confession.types";
import postConfession from "./postConfession";

const server = setupServer(
  rest.post("http://localhost:8080/api/confess", (req, res, ctx) => {
    return res(
      ctx.json({
        success: true,
        justTalked: false,
        message: "Confession received",
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("posts a confession when API call is made", async () => {
  const confession: ConfessionType = {
    subject: "Bla",
    reason: "rudeness",
    details: "I was mildly rude in public",
  };
  const result = await postConfession(confession);
  expect(result).toEqual({
    success: true,
    justTalked: false,
    message: "Confession received",
  });
});
