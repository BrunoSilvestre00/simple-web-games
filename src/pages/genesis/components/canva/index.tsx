import React, { useCallback, useEffect, useMemo } from 'react';
import { Board, GameButton1, GameButton2, GameButton3, GameButton4, GameContainer, GameStateLabel } from './index.styled';

const wait = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

const Game: React.FC = () => {

    const [realSerie, setRealSerie] = React.useState<number[]>([]);
    const [playerIndex, setPlayerIndex] = React.useState<number>(0);
    const [gamingState, setGamingState] = React.useState<boolean>(true);
    const [loseState, setLoseState] = React.useState<boolean>(false);
    const [score, setScore] = React.useState<number>(0);

    const gamingLoading = useCallback(async () => {
        const random = Math.floor(Math.random() * 4) + 1;
        const series = [...realSerie, random];

        for(let index = 0; index < series.length; index++) {
            const button = document.getElementById(`button-${series[index]}`);
            button?.classList.add('active');
            setTimeout(() => {
                button?.classList.remove('active');
            }, 500);
            await wait(1000);
        }

        setRealSerie(series);
        setGamingState(false);
    }, [realSerie]);

    const play = useCallback(async () => {
        if(loseState) return;
        await wait(1000);
        setGamingState(true);
        await gamingLoading();
    }, [gamingLoading, loseState]);

    const handlePlayerClick = useCallback((index) => {
        const button = document.getElementById(`button-${index}`);
        button?.classList.add('active');
        setTimeout(() => {
            button?.classList.remove('active');
        }, 500);

        if(index === realSerie[playerIndex]) {
            setPlayerIndex(playerIndex + 1);
            if (playerIndex + 1 === realSerie.length) {
                setPlayerIndex(0);
                setScore(score + 1);
                play();
            }
        } else {
            setLoseState(true);
        }
    }, [realSerie, playerIndex, score]);

    const label = useMemo(() => {
        if(loseState) {
            return 'Você perdeu!';
        }

        return gamingState ? 'Atenção...' : 'Sua vez!';
    }, [loseState, gamingState]);

    useEffect(() => {
        play();
    }, []);
    
    return (
        <GameContainer>
            <GameStateLabel>
                {label}
            </GameStateLabel>
            <Board>
                <GameButton1 id="button-1" disabled={gamingState || loseState} onClick={() => handlePlayerClick(1)} />
                <GameButton2 id="button-2" disabled={gamingState || loseState} onClick={() => handlePlayerClick(2)}/>
                <GameButton3 id="button-3" disabled={gamingState || loseState} onClick={() => handlePlayerClick(3)}/>
                <GameButton4 id="button-4" disabled={gamingState || loseState} onClick={() => handlePlayerClick(4)}/>
            </Board>
            <GameStateLabel>
                Pontuação: {score}
            </GameStateLabel>
        </GameContainer>
    )
};

export default Game;
