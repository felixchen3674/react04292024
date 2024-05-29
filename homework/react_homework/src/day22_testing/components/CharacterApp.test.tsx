// import { render, fireEvent, screen } from "@testing-library/react";
// import CharactersApp from "./CharactersApp";

// import { describe, expect, test } from "vitest";

// describe("<CharactersApp />", () => {
//   describe("loading character", () => {
//     test('renders the title "Characters"', async () => {});
//     test("renders a list of 10 characters", async () => {});
//   });
//   describe("loading more characters", () => {
//     test('has a "Load More Characters" button', async () => {});
//     test("clicking load more gets 10 more characters", async () => {});
//     test("clicking load more increases the page number", async () => {});
//   });
// });
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import CharactersApp from "./CharactersApp";
import { getCharacters } from "../api/get-characters";
import { CharacterType } from "../types/characterType";

vi.mock("../api/get-characters");

describe("<CharactersApp />", () => {
  const mockCharacters: CharacterType[] = Array.from(
    { length: 10 },
    (_, i) => ({
      url: `https://example.com/${i}`,
      name: `Character ${i}`,
      gender: "Male",
      culture: "Culture",
      born: "Born date",
      died: "",
      titles: ["Title"],
      aliases: [`Alias ${i}`],
      father: "",
      mother: "",
      spouse: "",
      allegiances: ["https://example.com/house/stark"],
      books: ["A Game of Thrones", "A Clash of Kings"],
      povBooks: [],
      tvSeries: ["Season 1", "Season 2"],
      playedBy: ["Actor Name"],
    })
  );

  beforeEach(() => {
    vi.clearAllMocks();
    (getCharacters as jest.Mock).mockResolvedValue(mockCharacters);
  });

  describe("loading character", () => {
    test('renders the title "Characters"', async () => {
      render(<CharactersApp />);
      await waitFor(() =>
        expect(screen.getByText("Characters")).toBeInTheDocument()
      );
    });

    test("renders a list of 10 characters", async () => {
      render(<CharactersApp />);
      await waitFor(() =>
        expect(screen.getAllByText(/Character \d/).length).toBe(10)
      );
    });
  });

  describe("loading more characters", () => {
    test('has a "Load More Characters" button', async () => {
      render(<CharactersApp />);
      await waitFor(() =>
        expect(screen.getByText("Load More Characters")).toBeInTheDocument()
      );
    });

    test("clicking load more gets 10 more characters", async () => {
      render(<CharactersApp />);
      await waitFor(() =>
        expect(screen.getAllByText(/Character \d/).length).toBe(10)
      );

      fireEvent.click(screen.getByText("Load More Characters"));

      // Ensure the mock API call returns 10 more characters for the next page
      const newCharacters = mockCharacters.map((char, i) => ({
        ...char,
        url: `https://example.com/${i + 10}`,
        name: `Character ${i + 10}`,
      }));
      (getCharacters as jest.Mock).mockResolvedValueOnce(newCharacters);

      await waitFor(() =>
        expect(screen.getAllByText(/Character \d/).length).toBe(20)
      );
    });

    test("clicking load more increases the page number", async () => {
      render(<CharactersApp />);
      await waitFor(() =>
        expect(screen.getByText("Next Page: 1")).toBeInTheDocument()
      );

      fireEvent.click(screen.getByText("Load More Characters"));

      await waitFor(() =>
        expect(screen.getByText("Next Page: 2")).toBeInTheDocument()
      );
    });
  });
});
