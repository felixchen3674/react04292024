import {describe, expect, test} from "vitest"
import {CharacterType} from "../types/characterType"
import Character from "./Character"
import {render, screen} from "@testing-library/react"
import characters from "../../testing/mock/day22Mock/characters"

const mockCharacter: CharacterType = characters[1]
const mockCharacterWithoutName: CharacterType = characters[0]

describe("<Character />", () => {
  test('shows fields for "name" and "culture"', async () => {
    render(<Character character={mockCharacter} />)
    expect(screen.getByText(/Walder/)).toBeInTheDocument()
  })

  test("shows culture if it is present", async () => {
    render(<Character character={mockCharacterWithoutName} />)
    expect(screen.getByText(/Braavosi/)).toBeInTheDocument()
  })

  test("shows alias if no name is present", async () => {
    render(<Character character={mockCharacterWithoutName} />)
    expect(screen.getByText(/The Daughter of the Dusk/)).toBeInTheDocument()
  })

  test("shows how many books this characters made an appearance in", async () => {
    render(<Character character={mockCharacter} />)
    expect(screen.getByText(/Number of Books:/)).toBeInTheDocument()
    expect(screen.getByText("5")).toBeInTheDocument()
  })
})
