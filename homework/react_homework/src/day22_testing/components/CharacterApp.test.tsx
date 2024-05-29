import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import CharactersApp from "./CharactersApp";

import { describe, expect, test } from "vitest";

describe("<CharactersApp />", () => {
  describe("loading character", () => {
    test('renders the title "Characters"', async () => {
      render(<CharactersApp />);
      expect(screen.getByText("Characters")).toBeInTheDocument();

    });
    test("renders a list of 10 characters", async () => {
      render(<CharactersApp />);
      
      await waitFor(() => {
        const characters = screen.getAllByText('Character \d+');
        expect(characters.length).toBe(10);
      })
      
    });
  });
  describe("loading more characters", () => {
    test('has a "Load More Characters" button', async () => {
      render(<CharactersApp />);
      expect(screen.getByText("Load More Characters")).toBeInTheDocument();
    });
    test("clicking load more gets 10 more characters", async () => {
      render(<CharactersApp />);
      const button = screen.getByText("Load More Characters");
      fireEvent.click(button);

      await waitFor (() => {
        const characters = screen.getAllByText("Character \d+");
        expect(characters.length).toBe(10);
      })
    });
    test("clicking load more increases the page number", async () => {
      render(<CharactersApp />);
      const button = screen.getByText("Load More Characters");
      fireEvent.click(button);

      await waitFor(() => {
        const nextPage = screen.getByText("Next Page: 2");
        expect(nextPage).toBeInTheDocument();
      })
    });
  });
});
