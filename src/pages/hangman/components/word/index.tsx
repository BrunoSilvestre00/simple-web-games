import React from "react";
import { WordContainer, WordLetter } from "./index.styled";

interface WordProps {
    word: string[];
}
const Word: React.FC<WordProps> = ({ word }) => {
    return (
        <WordContainer>
            {word.map((letter, index) => (
                <WordLetter key={`letter-${index}`}>
                    {letter}
                </WordLetter>
            ))}
        </WordContainer>
    )
};

export default Word;
