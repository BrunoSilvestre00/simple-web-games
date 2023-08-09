import styled from 'styled-components';
import { theme } from './constants';

export const RootContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 5rem 0;
  gap: 3rem;
  background-color: ${theme.colors_1.background};

  * {
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GameTitle = styled.span`
  color: ${theme.colors_1.primary};
  font-size: 2rem;
  font-weight: bold;
`;

export const DeveloperName = styled.span`
  color: ${theme.colors_1.secondary};
  font-size: 1.5rem;
`;
