import styled from 'styled-components';

export const KeyboadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`;

export const LettersContainer = styled.div`
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

const LETTER_BUTTON_SIZE = '3rem';

export const LetterButton = styled.button`
    width: ${LETTER_BUTTON_SIZE};
    height: ${LETTER_BUTTON_SIZE};
    border: 0;
    border-radius: 0.5rem;
    background-color: #61dafb;
    color: #282c34;
    font-size: 1.5rem;
    font-weight: bold;
    transition: opacity 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;
