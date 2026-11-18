import {useEffect, useState} from "react";
import {
    Board,
    GameButton1,
    GameButton2,
    GameButton3,
    GameButton4,
    GameContainer,
    GameStateLabel,
    RestartButton
} from "./index.styled";

const randomButton = () => Math.floor(Math.random() * 4) + 1;

export default function Game() {
    const [series, setSeries] = useState(() => [randomButton()]);
    const [playerIndex, setPlayerIndex] = useState(0);
    const [playingSequence, setPlayingSequence] = useState(true);
    const [lost, setLost] = useState(false);
    const [activeButton, setActiveButton] = useState<number | null>(null);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const timers: ReturnType<typeof setTimeout>[] = [];
        series.forEach((button, index) => {
            const delay = (index + 1) * 1000;
            timers.push(setTimeout(() => setActiveButton(button), delay));
            timers.push(setTimeout(() => setActiveButton(null), delay + 500));
        });
        timers.push(setTimeout(() => setPlayingSequence(false), (series.length + 1) * 1000));
        return () => timers.forEach(clearTimeout);
    }, [series]);

    function handlePlayerClick(button: number) {
        if (playingSequence || lost) return;
        if (button !== series[playerIndex]) {
            setLost(true);
            return;
        }
        if (playerIndex + 1 === series.length) {
            setPlayingSequence(true);
            setPlayerIndex(0);
            setScore((previous) => previous + 1);
            setSeries((previous) => [...previous, randomButton()]);
        } else {
            setPlayerIndex((previous) => previous + 1);
        }
    }

    function restart() {
        setPlayingSequence(true);
        setLost(false);
        setPlayerIndex(0);
        setScore(0);
        setActiveButton(null);
        setSeries([randomButton()]);
    }

    const buttons = [GameButton1, GameButton2, GameButton3, GameButton4];

    return (
        <GameContainer>
            <GameStateLabel aria-live="polite">
                {lost ? "Você perdeu!" : playingSequence ? "Atenção..." : "Sua vez!"}
            </GameStateLabel>
            <Board>
                {buttons.map((Button, index) => (
                    <Button
                        key={index}
                        aria-label={`Cor ${index + 1}`}
                        className={activeButton === index + 1 ? "active" : undefined}
                        disabled={playingSequence || lost}
                        onClick={() => handlePlayerClick(index + 1)}
                    />
                ))}
            </Board>
            <GameStateLabel>Pontuação: {score}</GameStateLabel>
            {lost && <RestartButton onClick={restart}>Recomeçar</RestartButton>}
        </GameContainer>
    );
}
