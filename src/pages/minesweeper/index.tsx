import React from "react";
import Game from "./components/canva";
import { GameTitle, TitleContainer } from "./components/index.styled";


const MineSweeper: React.FC = () => {
    return (<>
        <TitleContainer>
            <GameTitle>Campo Minado</GameTitle>
        </TitleContainer>
        <Game />
    </>);
};

export default MineSweeper;