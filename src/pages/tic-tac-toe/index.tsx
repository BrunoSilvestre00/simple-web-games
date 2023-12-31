import React from "react";
import Game from "./components/canva";
import { GameTitle, TitleContainer } from "./components/index.styled";


const TicTacToe: React.FC = () => {
    return (<>
        <TitleContainer>
            <GameTitle>Jogo da Velha</GameTitle>
        </TitleContainer>
        <Game />
    </>);
};

export default TicTacToe;
