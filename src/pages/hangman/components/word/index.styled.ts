import styled from 'styled-components';


export const WordContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

const WORD_LETTER_SIZE = '3rem';

export const WordLetter = styled.span<{ include: boolean }>`
    position: relative;
    display: flex;
    justify-content: center;
    color: ${({ include }) => include ? '#61dafb' : '#fa0'};
    font-size: 2rem;
    font-weight: bold;
    width: ${WORD_LETTER_SIZE};
    height: ${WORD_LETTER_SIZE};

    &::after {
        content: '';
        position: absolute;
        bottom: 0rem;
        left: 0;
        width: ${WORD_LETTER_SIZE};
        height: 0.2rem;
        border-radius: 0.5rem;
        background-color: #61dafb;
        transition: transform 0.3s ease-in-out;
    }
`;
