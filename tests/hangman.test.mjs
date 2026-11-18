import assert from "node:assert/strict";
import {test} from "node:test";
import {getAlphabet, getRandTipWord} from "../src/pages/hangman/components/constants.ts";

test("the alphabet contains all 26 playable letters", () => {
    assert.equal(getAlphabet().join(""), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
});

test("selected words with accents can be typed on the game keyboard", (context) => {
    const values = [1 / 15, 1 / 15];
    context.mock.method(Math, "random", () => values.shift());
    assert.deepEqual(getRandTipWord(), {tip: "Frutas", word: "MACA"});
});
