import React, { useCallback, useMemo } from "react";
import { KeyboadContainer, LetterButton, LettersContainer } from "./index.styled";
import { getAlphabet } from "../constants";

const LETTERS_COUNT = [10, 9, 7];
const ALPHABET = getAlphabet();

interface KeyboardProps {
    selectedLetters: string[];
    onClick: (letter: string) => void;
}
const Keyboard: React.FC<KeyboardProps> = ({ onClick, selectedLetters }) => {
    const letterRows = useMemo(() => {
        return [
            ALPHABET.slice(0, LETTERS_COUNT[0]),
            ALPHABET.slice(LETTERS_COUNT[0], LETTERS_COUNT[0] + LETTERS_COUNT[1]),
            ALPHABET.slice(LETTERS_COUNT[0] + LETTERS_COUNT[1], LETTERS_COUNT[0] + LETTERS_COUNT[1] + LETTERS_COUNT[2])
        ]
    }, []);

    const isSelected = useCallback((letter: string) => {
        return selectedLetters.includes(letter);
    }, [selectedLetters]);

    return (
        <KeyboadContainer>
            {letterRows.map((letters, index) => (
                <LettersContainer key={`letter-row-${index}`}>
                    {letters.map((letter) => (
                        <LetterButton 
                            key={`letter-btn-${letter}`} 
                            onClick={() => onClick(letter)}
                            disabled={isSelected(letter)}
                        >
                            {letter}
                        </LetterButton>
                    ))}
                </LettersContainer>
            ))}
        </KeyboadContainer>
    )
};

export default Keyboard;
