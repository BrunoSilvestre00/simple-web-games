import React from "react";
import { DeveloperName, GameTitle, RootContainer, TitleContainer } from "./components/index.styled";
import Game from "./components/canva";

const App: React.FC = () => {
  return (
    <RootContainer>
      <TitleContainer>
        <GameTitle>Jogo da Velha</GameTitle>
        <DeveloperName>desenvolvido por Bruno Silvestre</DeveloperName>
      </TitleContainer>
      <Game />
    </RootContainer>
  );
};

export default App;
