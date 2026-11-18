import React from "react";
import Game from "./components/canva";
import {GameTitle} from "../../components/game-title";

const TicTacToe: React.FC = () => {
    return (
        <>
            <GameTitle>Jogo da Velha</GameTitle>
            <Game />
        </>
    );
};

export default TicTacToe;
