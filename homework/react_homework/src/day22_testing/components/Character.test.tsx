// import { describe, expect, test } from "vitest";

import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Character from "./Character";

describe("<Character />", () => {
  const character = {
    url: "https://www.anapioficeandfire.com/api/characters/1",
    name: "John",
    gender: "Female",
    culture: "Braavosi",
    born: "",
    died: "",
    titles: [""],
    aliases: ["The Daughter of the Dusk"],
    father: "",
    mother: "",
    spouse: "",
    allegiances: [],
    books: ["https://www.anapioficeandfire.com/api/books/5"],
    povBooks: [],
    tvSeries: [""],
    playedBy: [""],
  };
  test('shows fields for "name" and "culture"', async () => {
    render(<Character character={character} />);
    const { name, culture } = character;
    const characterName = screen.getByText(name); // use to find out the existing value in the dom
    const characerCulture = screen.getByText(culture);
    expect(characterName).toBeInTheDocument();
    expect(characerCulture).toBeInTheDocument();
  });
  test("shows culture if it is present", async () => {
    render(<Character character={character} />);
    const { culture } = character;
    const characerCulture = screen.getByText(culture);
    expect(characerCulture).toBeInTheDocument();
  });
  test("shows alias if no name is present", async () => {
    const characterNoName = { ...character, name: "" };
    render(<Character character={characterNoName} />);
    const { aliases, name } = characterNoName;
    if (name === "") {
      const aliasElement = screen.getByText(aliases[0]);
      expect(aliasElement).toBeInTheDocument();
    } else {
      const nameElement = screen.queryByText(name);
      expect(nameElement).not.toBeInTheDocument();
    }
  });
  test("shows how many books this characters made an appearance in", async () => {
    render(<Character character={character} />);
    const { books } = character;
    if (books.length > 0) {
      const bookCount = screen.getByText(`${books.length}`);
      expect(bookCount).toBeInTheDocument();
    } else {
      const bookCount = screen.queryByText(`${books.length}`);
      expect(bookCount).not.toBeInTheDocument();
    }
  });
});
