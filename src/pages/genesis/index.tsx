import React from "react";
import Game from "./components/canva";
import {GameTitle} from "../../components/game-title";

const Genesis: React.FC = () => {
    return (
        <>
            <GameTitle>Genius</GameTitle>
            <Game />
        </>
    );
};

export default Genesis;
