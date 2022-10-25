import { generateCart, generateName, createCartFragment } from "../src/index.js";
import {ok, equal} from "assert"

describe('cart', () => {
    it('generates a name', () => {
        const name = generateName();
        ok(name)
    })
    it('has a valid number of elements', () => {
		const count = generateCart();
		ok(count >= 0)
        ok(count <= 10)
    })
    it('exports a function', () => {
        equal(typeof createCartFragment, 'function')
    })
})