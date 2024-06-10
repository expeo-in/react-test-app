import { render, screen } from "@testing-library/react";
import Posts from "./Posts";

test("posts component should render list of items", async () => {
  fetch = jest.fn();
  fetch.mockResolvedValueOnce({
    json: async () => [
      { id: 1, title: "post1" },
      { id: 2, title: "post2" },
    ],
  });

  render(<Posts />);
  const elements = await screen.findAllByRole("listitem");
  screen.debug();
  expect(elements.length).toBeGreaterThan(0);
});
