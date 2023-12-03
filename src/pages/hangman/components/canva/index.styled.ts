import styled from 'styled-components';
import { GameState } from '../constants';

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

export const GameInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const State = styled.span<{ state: GameState }>`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ state }) => {
    switch (state) {
      case 'win':
        return '#00ff00';
      case 'lose':
        return '#ff0000';
    }
  }};
`;

export const Tip = styled.span`
    background-color: #61dafb;
    color: #000;
    font-size: 1.25rem;
    font-weight: bold;
    padding: 0.5rem 0.75rem;
    border-radius: 1rem;
`;

export const WordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 4rem;
`;

export const RestartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #61dafb;
  border-radius: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: #61dafb;
  margin-top: 2rem;

  &:hover {
    background-color: #61dafb33;
    cursor: pointer;
  }
`;
