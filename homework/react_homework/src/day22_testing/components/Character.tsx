import React from "react";
import { CharacterType } from "../types/characterType";

interface CharacterProps {
  character: CharacterType;
}

export default function Character({ character }: CharacterProps) {
  return (
    <div>
      <div data-testid="name">
        <strong>name </strong>
        {character.name ? character.name : character.aliases[0]}
      </div>
      <div data-testid="culture">
        <strong>culture </strong> {character.culture}
      </div>
      <div>
        <strong>Number of Books: </strong> {character.books.length}
      </div>
    </div>
  );
}
