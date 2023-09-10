import React from "react";
import Game from "./components/canva";
import { DeveloperName, GameTitle, TitleContainer } from "./components/index.styled";


const TicTacToe: React.FC = () => {
    return (<>
        <TitleContainer>
            <GameTitle>Jogo da Velha</GameTitle>
            <DeveloperName>desenvolvido por Bruno Silvestre</DeveloperName>
        </TitleContainer>
        <Game />
    </>);
};

export default TicTacToe;
