export const CellState = {EMPTY: 0, CROSS: 1, CIRCLE: 2, DRAW: 3} as const;
export type CellState = (typeof CellState)[keyof typeof CellState];
