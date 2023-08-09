
interface IColors {
  background: string;
  primary: string;
  secondary: string;
  player_1: string;
  player_2: string;
  draw: string;
  winner: string;
}

interface ITheme {
  colors_1: IColors;
}

export const theme: ITheme = {
  colors_1: {
    background: '#282c34',
    primary: '#61dafb',
    secondary: '#3f8fa5',
    player_1: '#618dfb',
    player_2: '#fb8261',
    draw: '#dafb61',
    winner: '#61FBCF',
  },
}

// eslint-disable-next-line no-shadow
export enum CellState {
  EMPTY=0,
  CROSS=1,
  CIRCLE=2,
  DRAW=3,
}
