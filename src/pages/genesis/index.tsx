import React from "react";
import Game from "./components/canva";
import { GameTitle, TitleContainer } from "./components/index.styled";


const Genesis: React.FC = () => {
    return (<>
        <TitleContainer>
            <GameTitle>Genius</GameTitle>
        </TitleContainer>
        <Game />
    </>)
};

export default Genesis;
