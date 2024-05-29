// import { describe, expect, test } from "vitest";

// describe("<Character />", () => {
//   test('shows fields for "name" and "culture"', async () => {});
//   test("shows culture if it is present", async () => {});
//   test("shows alias if no name is present", async () => {});
//   test("shows how many books this characters made an appearance in", async () => {});
// });
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Character from "./Character";
import { CharacterType } from "../types/characterType";

describe("<Character />", () => {
  const character: CharacterType = {
    url: "https://example.com",
    name: "Jon Snow",
    gender: "Male",
    culture: "North",
    born: "In Winterfell",
    died: "",
    titles: ["Lord Commander of the Night's Watch"],
    aliases: ["The Bastard of Winterfell"],
    father: "",
    mother: "",
    spouse: "",
    allegiances: ["https://example.com/house/stark"],
    books: ["A Game of Thrones", "A Clash of Kings"],
    povBooks: [],
    tvSeries: ["Season 1", "Season 2"],
    playedBy: ["Kit Harington"],
  };

  test('shows fields for "name" and "culture"', () => {
    render(<Character character={character} />);
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/culture/i)).toBeInTheDocument();
  });

  test("shows culture if it is present", () => {
    render(<Character character={character} />);
    expect(screen.getByText("North")).toBeInTheDocument();
  });

  test("shows alias if no name is present", () => {
    const characterWithoutName: CharacterType = { ...character, name: "" };
    render(<Character character={characterWithoutName} />);
    expect(screen.getByText("The Bastard of Winterfell")).toBeInTheDocument();
  });

  test("shows how many books this character made an appearance in", () => {
    render(<Character character={character} />);
    expect(screen.getByText("Number of Books: 2")).toBeInTheDocument();
  });
});
