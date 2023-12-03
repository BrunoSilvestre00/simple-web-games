import React from "react";
import { GameTitle, TitleContainer } from "./components/index.styled";
import Game from "./components/canva";


const Hangman: React.FC = () => {
    return (<>
        <TitleContainer>
            <GameTitle>Jogo da Forca</GameTitle>
        </TitleContainer>
        <Game />
    </>);
};

export default Hangman;
