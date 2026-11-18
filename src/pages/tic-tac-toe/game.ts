import {CellState} from "./constants.ts";

export type Board = CellState[][];
type Position = [number, number];

const lines: Position[][] = [
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

export const createBoard = (): Board =>
    Array.from({length: 3}, () => Array<CellState>(3).fill(CellState.EMPTY));

export function getResult(board: Board): {winner: CellState; cells: Position[]} {
    for (const cells of lines) {
        const [row, column] = cells[0];
        const player = board[row][column];
        if (player !== CellState.EMPTY && cells.every(([r, c]) => board[r][c] === player)) {
            return {winner: player, cells};
        }
    }
    return {
        winner: board.every((row) => row.every((cell) => cell !== CellState.EMPTY))
            ? CellState.DRAW
            : CellState.EMPTY,
        cells: []
    };
}
