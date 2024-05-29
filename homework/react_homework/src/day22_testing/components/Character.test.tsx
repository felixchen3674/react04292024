import { describe, expect, test } from "vitest";
import { CharacterType } from "../types/characterType";
import { getCharacters } from "../api/get-characters";

describe("<Character />", () => {
  test('shows fields for "name" and "culture"', async () => {
    const characters = await getCharacters();
    const character = characters[0];
    expect(character).toHaveProperty("name");
    expect(character).toHaveProperty("culture");
  });

  test("shows culture if it is present", async () => {
    const characters = await getCharacters();
    const character = characters[0];
    if (character.culture) {
      expect(character).not.toBe('');
    }
  });

  test("shows alias if no name is present", async () => {
    const characters = await getCharacters();
    // create a new object with name entities altered to empty to simulate the 
    // situation that no name exists
    const character = {
      ...characters[0],
      name : "",
    }
    if (!character.name) {
      expect(character.aliases.length).greaterThan(0);
    }
  });
  test("shows how many books this characters made an appearance in", async () => {
    const characters = await getCharacters();
    const character = characters[0];
    expect(character.books.length).not.toBe(0);
  });
});
