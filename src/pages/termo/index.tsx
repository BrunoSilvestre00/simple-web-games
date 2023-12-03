import React from "react";
import { GameTitle, GameSubtitle, TitleContainer } from "./components/index.styled";
import Game from "./components/canva";

const TERMO_LINK = "https://term.ooo/";

const getComponent = (title: string, columns: number) => {
    return (<>
        <TitleContainer>
            <GameTitle>{title}</GameTitle>
            <GameSubtitle>
                Um jogo baseado em <a href={TERMO_LINK}>Termo</a>
            </GameSubtitle>
        </TitleContainer>
        <Game columns={columns} />
    </>);
};

export const Termo: React.FC = () => {
    return getComponent("Termo", 1);
};

export const Dueto: React.FC = () => {
    return getComponent("Dueto", 2);
};

export const Quarteto: React.FC = () => {
    return getComponent("Quarteto", 4);
};
