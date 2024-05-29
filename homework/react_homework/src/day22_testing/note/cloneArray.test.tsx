import { expect, test } from "vitest";
import cloneArray from "./cloneArray";

test.only('test clone', ()=>{
    const array = [1,2,3]
    expect(cloneArray(array)).toEqual(array)
})