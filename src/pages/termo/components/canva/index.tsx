import React, { useCallback, useEffect, useMemo, useState } from "react";
import { GameContainer } from "./index.styled";
import Keyboard from "../keyboard";
import { getRandWord } from "../constants";


const Game: React.FC<{ columns: number }> = ({ columns }) => {
    const [typedWords, setTypedWords] = useState<string[]>([]);
    const [typedLetters, setTypedLetters] = useState<string[]>([]);

    const [selectedWord, wordSize] = useMemo(() => {
        const obj = getRandWord(); 
        return [obj, obj.length];
    }, []);

    const handleLetterClick = useCallback((letter: string) => {
        setTypedLetters((prev) => [...prev, letter]);
    }, []);

    return (
        <GameContainer>
            <Keyboard 
                typedLetters={typedLetters}
                onClick={handleLetterClick}
            />
        </GameContainer>
    );
};

export default Game;
