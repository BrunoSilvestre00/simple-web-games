import React from "react";
import {GameTitle} from "../../components/game-title";
import Game from "./components/canva";

const Hangman: React.FC = () => {
    return (
        <>
            <GameTitle>Jogo da Forca</GameTitle>
            <Game />
        </>
    );
};

export default Hangman;
