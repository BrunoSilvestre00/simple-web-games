import assert from "node:assert/strict";
import {test} from "node:test";
import {createBoard, getResult} from "../src/pages/tic-tac-toe/game.ts";
import {CellState} from "../src/pages/tic-tac-toe/constants.ts";

const winningLines = [
    [
        [0, 0],
        [0, 1],
        [0, 2]
    ],
    [
        [1, 0],
        [1, 1],
        [1, 2]
    ],
    [
        [2, 0],
        [2, 1],
        [2, 2]
    ],
    [
        [0, 0],
        [1, 0],
        [2, 0]
    ],
    [
        [0, 1],
        [1, 1],
        [2, 1]
    ],
    [
        [0, 2],
        [1, 2],
        [2, 2]
    ],
    [
        [0, 0],
        [1, 1],
        [2, 2]
    ],
    [
        [0, 2],
        [1, 1],
        [2, 0]
    ]
];

for (const player of [CellState.CROSS, CellState.CIRCLE]) {
    winningLines.forEach((line, index) => {
        test(`detects winning line ${index + 1} for player ${player}`, () => {
            const board = createBoard();
            line.forEach(([r, c]) => {
                board[r][c] = player;
            });
            assert.deepEqual(getResult(board), {winner: player, cells: line});
        });
    });
}

test("empty cells cannot win", () => {
    assert.deepEqual(getResult(createBoard()), {winner: CellState.EMPTY, cells: []});
});

test("detects a draw", () => {
    assert.deepEqual(
        getResult([
            [1, 2, 1],
            [1, 2, 2],
            [2, 1, 1]
        ]),
        {winner: CellState.DRAW, cells: []}
    );
});

test("a win on the final move takes precedence over a draw", () => {
    assert.equal(
        getResult([
            [1, 2, 1],
            [2, 1, 2],
            [1, 2, 1]
        ]).winner,
        CellState.CROSS
    );
});

test("new games have independent rows and boards", () => {
    const board = createBoard();
    board[0][0] = CellState.CROSS;
    assert.equal(board[1][0], CellState.EMPTY);
    assert.equal(createBoard()[0][0], CellState.EMPTY);
});
