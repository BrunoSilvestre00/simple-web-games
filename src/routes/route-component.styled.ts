import styled from 'styled-components';

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
  padding: 0;
  gap: 0;
  background-color: #282c34;

  * {
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace;
  }
`;

