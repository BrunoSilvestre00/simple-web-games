import styled from 'styled-components';

const MAN_COLOR = '#61dafb';
const MAN_THICKNESS = '0.2rem';

export const BodyPart = styled.div<{ show: boolean }>`
    opacity: ${({ show }) => show ? 1 : 0};
    position: absolute;
    transition: opacity 0.3s ease-in-out;
    border-radius: 0.5rem;
`;

export const ManContainer = styled.div`
    position: relative;
    height: 16rem;
    width: 10rem;
    border-left: ${MAN_THICKNESS} solid ${MAN_COLOR};

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: ${MAN_THICKNESS};
        width: 5rem;
        background-color: ${MAN_COLOR};
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 5rem;
        width: ${MAN_THICKNESS};
        height: 1.5rem;
        background-color: ${MAN_COLOR};
    }

    ${BodyPart}.head {
        top: 2rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        border: ${MAN_THICKNESS} solid ${MAN_COLOR};
    }

    ${BodyPart}.body {
        top: 6rem;
        left: 0.125rem;
        right: 0;
        margin: 0 auto;
        width: ${MAN_THICKNESS};
        height: 7rem;
        background-color: ${MAN_COLOR};
    }

    ${BodyPart}.left-arm {
        top: 10rem;
        left: 0;
        right: 0;
        height: ${MAN_THICKNESS};
        width: 4rem;
        transform: rotate(-40deg) translateX(50%);
        background-color: ${MAN_COLOR};
    }

    ${BodyPart}.right-arm {
        top: 5rem;
        left: 0;
        right: 0;
        height: ${MAN_THICKNESS};
        width: 4rem;
        transform: rotate(40deg) translateX(150%);
        background-color: ${MAN_COLOR};
    }

    ${BodyPart}.left-leg {
        top: 15.4rem;
        left: 0;
        right: 0;
        height: ${MAN_THICKNESS};
        width: 4rem;
        transform: rotate(-40deg) translateX(50%);
        background-color: ${MAN_COLOR};
    }

    ${BodyPart}.right-leg {
        top: 10.4rem;
        left: 0;
        right: 0;
        height: ${MAN_THICKNESS};
        width: 4rem;
        transform: rotate(40deg) translateX(150%);
        background-color: ${MAN_COLOR};
    }
`;
