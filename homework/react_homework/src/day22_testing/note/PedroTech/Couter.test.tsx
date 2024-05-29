import { describe, expect, it } from "vitest";
import Counter from "./Counter";
import { fireEvent, render } from "@testing-library/react";

describe(Counter, ()=>{
    it("Couter displays correct initial count", ()=>{
        const {getByTestId} = render(<Counter initialCount={0}/>)
        const countValue = Number(getByTestId('count').textContent)
        expect(countValue).toEqual(0)
    })
    it("Couter displays correct increment count", ()=>{
        const {getByTestId, getByRole} = render(<Counter initialCount={0}/>)
        const incrementBttn = getByRole('button', {name: 'Increment'})
        const countValue1 = Number(getByTestId('count').textContent)
        expect(countValue1).toEqual(0)
        fireEvent.click(incrementBttn)
        const countValue2 = Number(getByTestId('count').textContent)
        expect(countValue2).toEqual(1)
    })
})