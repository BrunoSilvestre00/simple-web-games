import React from "react";
import Game from "./components/canva";
import {GameTitle} from "../../components/game-title";

const MineSweeper: React.FC = () => {
    return (
        <>
            <GameTitle>Campo Minado</GameTitle>
            <Game />
        </>
    );
};

export default MineSweeper;
