import React from "react";
import { WordContainer, WordLetter } from "./index.styled";

interface WordProps {
    word: (string | boolean)[][];
}
const Word: React.FC<WordProps> = ({ word }) => {
    return (
        <WordContainer>
            {word.map((letter, index) => (
                <WordLetter include={letter[0]} key={`letter-${index}`}>
                    {letter[1]}
                </WordLetter>
            ))}
        </WordContainer>
    )
};

export default Word;
