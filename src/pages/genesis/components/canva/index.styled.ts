import styled from 'styled-components';

export const PLAYER_1 = '#ff2d05';
export const PLAYER_2 = '#008aff';
export const PLAYER_3 = '#dfff1c';
export const PLAYER_4 = '#5dee2f';

export const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

const BUTTON_SIZE = '15vw';

const GameButton = styled.button`
    width: ${BUTTON_SIZE};
    height: ${BUTTON_SIZE};
    border: 0;

    &:not([disabled]):hover {
        cursor: pointer;
    }
`;

export const GameButton1 = styled(GameButton)`
    background-color: ${PLAYER_1};
    border-top-left-radius: 100%;
`;

export const GameButton2 = styled(GameButton)`
    background-color: ${PLAYER_2};
    border-top-right-radius: 100%;
`;

export const GameButton3 = styled(GameButton)`
    background-color: ${PLAYER_3};
    border-bottom-left-radius: 100%;
`;

export const GameButton4 = styled(GameButton)`
    background-color: ${PLAYER_4};
    border-bottom-right-radius: 100%;
`;

export const Board = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 100%;
    height: 100%;
    gap: 0.5rem;

    ${GameButton1}.active {
        box-shadow: 0 0 1rem ${PLAYER_1};
        filter: brightness(1.2);
    }

    ${GameButton2}.active {
        box-shadow: 0 0 1rem ${PLAYER_2};
        filter: brightness(1.2);
    }

    ${GameButton3}.active {
        box-shadow: 0 0 1rem ${PLAYER_3};
        filter: brightness(1.2);
    }

    ${GameButton4}.active {
        box-shadow: 0 0 1rem ${PLAYER_4};
        filter: brightness(1.2);
    }
`;

export const GameStateLabel = styled.span`
    font-size: 1.25rem;
    font-weight: 700;
    color: #ddd
`;