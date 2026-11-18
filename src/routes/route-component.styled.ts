import styled from "styled-components";

export const RootContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 1rem;
    gap: 0;
    background-color: #282c34;
    color: #fff;

    a {
        color: #61dafb;
    }

    * {
        box-sizing: border-box;
        font-family: "Courier New", Courier, monospace;
    }
`;
