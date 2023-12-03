import React, { useCallback, useEffect, useMemo, useState } from "react";
import { GameContainer, GameInfoContainer, State, Tip, WordContainer } from "./index.styled";
import Keyboard from "../keyboard";
import Word from "../word";
import { GameState, getRandTipWord } from "../constants";
import Man from "../man";


const Game: React.FC = () => {
    const [errors, setErrors] = useState<number>(0);
    const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
    const [gameState, setGameState] = useState<GameState>('playing');

    const [selectedTip, selectedWord] = useMemo(() => {
        const obj = getRandTipWord(); 
        return [obj.tip, obj.word];
    }, []);

    const showWord = useMemo(() => {
        return selectedWord.split('').map((letter) => {
            return selectedLetters.includes(letter) ? letter : ' ';
        });
    }, [selectedWord, selectedLetters]);

    const handleLetterClick = useCallback((letter: string) => {
        if (gameState !== 'playing') return;
        if (!selectedWord.includes(letter)){
            setErrors(errors + 1);
        }
        setSelectedLetters([...selectedLetters, letter]);
    }, [selectedLetters, selectedWord, errors, gameState]);

    useEffect(() => {
        if (errors >= 6) {
            setGameState('lose');
        }
    }, [errors]);

    useEffect(() => {
        if (selectedWord.split('').every((letter) => selectedLetters.includes(letter))) {
            setGameState('win');
        }
    }, [selectedWord, selectedLetters]);

    const stateLabel = useMemo(() => {
        if (gameState === 'lose') return 'Você perdeu!';
        if (gameState === 'win') return 'Você ganhou!';
        return 'Jogando';
    }, [gameState]);

    return (
        <GameContainer>
            <GameInfoContainer>
                {gameState !== 'playing' && (<State>{stateLabel}</State>)}
                <Tip>Dica: {selectedTip}</Tip>
            </GameInfoContainer>
            <WordContainer>
                <Man errors={errors} />
                <Word word={showWord}/>
            </WordContainer>
            <Keyboard 
                selectedLetters={selectedLetters} 
                onClick={handleLetterClick}
            />
        </GameContainer>
    );
};

export default Game;
