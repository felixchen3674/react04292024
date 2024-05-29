import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import CharactersApp from "./CharactersApp";
import { describe, expect, test, vi, beforeEach } from "vitest";
import { getCharacters } from "../api/get-characters";

// Mock the getCharacters API function
vi.mock("../api/get-characters");

describe("<CharactersApp />", () => {
  beforeEach(() => {
    (getCharacters as jest.Mock).mockImplementation(
      async (pageNumber: number) => {
        return Array.from({ length: 10 }, (_, i) => ({
          url: `https://www.anapioficeandfire.com/api/characters/${
            i + 1 + (pageNumber - 1) * 10
          }`,
          name: `Character ${i + 1 + (pageNumber - 1) * 10}`,
          gender: "Male",
          culture: "Culture",
          born: "In 283 AC",
          died: "",
          titles: ["Title"],
          aliases: ["Alias"],
          father: "",
          mother: "",
          spouse: "",
          allegiances: [],
          books: [],
          povBooks: [],
          tvSeries: [],
          playedBy: [],
        }));
      }
    );
  });

  describe("loading character", () => {
    test('renders the title "Characters"', async () => {
      render(<CharactersApp />);
      expect(screen.getByText("Characters")).toBeInTheDocument();
    });

    test("renders a list of 10 characters", async () => {
      render(<CharactersApp />);

      await waitFor(() => {
        const characterElements = screen.getAllByText(/Character \d+/);
        expect(characterElements.length).toBe(10);
      });
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

      await waitFor(() => {
        const characterElements = screen.getAllByText(/Character \d+/);
        expect(characterElements.length).toBe(10);
      });
    });

    test("clicking load more increases the page number", async () => {
      render(<CharactersApp />);
      const button = screen.getByText("Load More Characters");
      fireEvent.click(button);

      await waitFor(() => {
        const nextPage = screen.getByText("Next Page: 2");
        expect(nextPage).toBeInTheDocument();
      });
    });
  });
});
