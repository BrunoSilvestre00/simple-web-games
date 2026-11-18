import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>Simple Web Games</h1>
            <p>
                <Link to="/tic-tac-toe">Jogo da Velha</Link>
            </p>
            <p>
                <Link to="/genesis">Genius</Link>
            </p>
            <p>
                <Link to="/hangman">Jogo da Forca</Link>
            </p>
            <p>
                <Link to="/minesweeper">Campo Minado (em desenvolvimento)</Link>
            </p>
        </>
    );
}
