import {describe, expect, test} from "vitest"
import {CharacterType} from "../types/characterType"
import Character from "./Character"
import {render, screen} from "@testing-library/react"
import React from "react"

const mockCharacter: CharacterType = {
  url: "https://www.anapioficeandfire.com/api/characters/583",
  name: "Jon Snow",
  gender: "Male",
  culture: "Northmen",
  born: "In 283 AC",
  died: "",
  titles: ["Lord Commander of the Night's Watch"],
  aliases: [
    "Lord Snow",
    "Ned Stark's Bastard",
    "The Snow of Winterfell",
    "The Crow-Come-Over",
    "The 998th Lord Commander of the Night's Watch",
    "The Bastard of Winterfell",
    "The Black Bastard of the Wall",
    "Lord Crow",
  ],
  father: "",
  mother: "",
  spouse: "",
  allegiances: ["https://www.anapioficeandfire.com/api/houses/362"],
  books: ["https://www.anapioficeandfire.com/api/books/5"],
  povBooks: [
    "https://www.anapioficeandfire.com/api/books/1",
    "https://www.anapioficeandfire.com/api/books/2",
    "https://www.anapioficeandfire.com/api/books/3",
    "https://www.anapioficeandfire.com/api/books/8",
  ],
  tvSeries: [
    "Season 1",
    "Season 2",
    "Season 3",
    "Season 4",
    "Season 5",
    "Season 6",
  ],
  playedBy: ["Kit Harington"],
}

const mockCharacterWithoutName: CharacterType = {
  ...mockCharacter,
  name: "",
}

describe("<Character />", () => {
  test('shows fields for "name" and "culture"', async () => {
    render(<Character character={mockCharacter} />)
    expect(screen.getByText(/Jon Snow/)).toBeInTheDocument()
    expect(screen.getByText(/Northmen/)).toBeInTheDocument()
  })

  test("shows culture if it is present", async () => {
    render(<Character character={mockCharacter} />)
    expect(screen.getByText(/Northmen/)).toBeInTheDocument()
  })

  test("shows alias if no name is present", async () => {
    render(<Character character={mockCharacterWithoutName} />)
    expect(screen.getByText(/Lord Snow/)).toBeInTheDocument()
  })

  test("shows how many books this characters made an appearance in", async () => {
    render(<Character character={mockCharacter} />)
    expect(screen.getByText(/Number of Books:/)).toBeInTheDocument()
    expect(screen.getByText("1")).toBeInTheDocument()
  })
})
