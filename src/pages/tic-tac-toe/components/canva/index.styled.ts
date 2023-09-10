import styled, { keyframes, css } from 'styled-components';
import { CellState } from '../../constants';

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
  background-color: #3f8fa5;
`;

const cellColorAnimation = keyframes`
  0%, 40%, 80% {
    background-color: #61dafb;
  }

  20%, 60%, 100% {
    background-color: #61FBCF;
  }
`;

const CELL_SIZE = '12vh';

export const Cell = styled.button<{winnerCell: boolean}>`
  width: ${CELL_SIZE};
  height: ${CELL_SIZE};
  background-color: ${({ winnerCell }) => winnerCell
    ? '#61FBCF'
    : '#61dafb'
  };

  border-radius: 1rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #282c34;

  ${({ winnerCell }) => winnerCell && css`
    animation: ${cellColorAnimation} 2s ease-in-out;
  `} 

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  svg {
    width: 100%;
  }
`;

export const PlayerLabel = styled.span<{ winner: number}>`
  color: ${({ winner }) => winner == CellState.CROSS
    ? '#618dfb'
    : winner == CellState.CIRCLE
    ? '#fb8261'
    : '#dafb61'
  };
  font-size: 1.25rem;
  font-weight: bold;
`;

export const RestartButton = styled.button`
  border: 0;
  border-radius: 0.5rem;
  background-color: #61dafb;
  color: #282c34;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.5rem 1rem;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
