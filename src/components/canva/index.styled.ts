import styled, { keyframes, css } from 'styled-components';
import { CellState, theme } from '../constants';

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const BoardContainer = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${theme.colors_1.secondary};
`;

const cellColorAnimation = keyframes`
  0%, 40%, 80% {
    background-color: ${theme.colors_1.primary};
  }

  20%, 60%, 100% {
    background-color: ${theme.colors_1.winner};
  }
`;

const CELL_SIZE = '8rem';

export const Cell = styled.button<{winnerCell: boolean}>`
  width: ${CELL_SIZE};
  height: ${CELL_SIZE};
  background-color: ${({ winnerCell }) => winnerCell
    ? theme.colors_1.winner
    : theme.colors_1.primary
  };

  border-radius: 1rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors_1.background};

  ${({ winnerCell }) => winnerCell && css`
    animation: ${cellColorAnimation} 2s ease-in-out;
  `} 

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const PlayerLabel = styled.span<{ winner: number}>`
  color: ${({ winner }) => winner == CellState.CROSS
    ? theme.colors_1.player_1
    : winner == CellState.CIRCLE
    ? theme.colors_1.player_2
    : theme.colors_1.draw
  };
  font-size: 1.25rem;
  font-weight: bold;
`;

export const RestartButton = styled.button`
  border: 0;
  border-radius: 0.5rem;
  background-color: ${theme.colors_1.primary};
  color: ${theme.colors_1.background};
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.5rem 1rem;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
