import { render, fireEvent, screen } from "@testing-library/react";
import CharactersApp from "./CharactersApp";

import { describe, expect, test } from "vitest";

describe("<CharactersApp />", () => {
  describe("loading character", () => {
    test('renders the title "Characters"', async () => {});
    test("renders a list of 10 characters", async () => {});
  });
  describe("loading more characters", () => {
    test('has a "Load More Characters" button', async () => {});
    test("clicking load more gets 10 more characters", async () => {});
    test("clicking load more increases the page number", async () => {});
  });
});
