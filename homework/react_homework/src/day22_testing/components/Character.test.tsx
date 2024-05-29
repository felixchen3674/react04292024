import { describe, expect, test } from "vitest";
import Character from "./Character";
import { generate } from "fast-json-patch";
import { render } from "@testing-library/react";

describe("<Character />", () => {
  test('shows fields for "name" and "culture"', async () => {
    const character = {
      name: 'Jon Snow',
      culture: 'Northmen',
      aliases: 'Lord Snow',
      books:['https://anapioficeandfire.com/api/books/5']
    }
    const { getByTestId } = render(<Character character={character} />)

    const nameTest = getByTestId('name')
    expect(nameTest).toBeInTheDocument()

    const cultureTest = getByTestId('culture')
    expect(cultureTest).toBeInTheDocument()
  });
  test("shows culture if it is present", async () => {
    const character = {
      name: 'Jon Snow',
      culture: 'Northmen',
      aliases: 'Lord Snow',
      books:['https://anapioficeandfire.com/api/books/5']
    }
    const { getByTestId } = render(<Character character={character} />)
  })
  test("shows alias if no name is present", async () => {
      const character = {
        name: 'Jon Snow',
        culture: 'Northmen',
        aliases: 'Lord Snow',
        books:['https://anapioficeandfire.com/api/books/5']
      }
      const { getByText } = render(<Character character={character} />)
      const aliasTest = getByText('Lord Snow', { selector: 'strong' });
      expect(aliasTest).toBeInTheDocument()
  });
  test("shows how many books this characters made an appearance in", async () => {
    const character = {
      name: 'Jon Snow',
      culture: 'Northmen',
      aliases: 'Lord Snow',
      books:['https://anapioficeandfire.com/api/books/5'],
      povBooks:[
        "https://anapioficeandfire.com/api/books/1",
        "https://anapioficeandfire.com/api/books/2",
        "https://anapioficeandfire.com/api/books/3",
        "https://anapioficeandfire.com/api/books/8"
      ]
    }
    const { getByText } = render(<Character character={character} />);
    const totalBooks = character.books.length + character.povBooks.length
    const expectedBookCountText = `Number of Books: ${totalBooks}`;
    const bookCountTest = getByText(expectedBookCountText);
    expect(bookCountTest).toBeInTheDocument();
  });
});
