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

export const State = styled.span<GameState>`
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
    color: #61dafb;
    font-size: 1.25rem;
    font-weight: bold;
`;

export const WordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 4rem;
`;
