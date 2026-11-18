import {useState} from "react";
import {BoardContainer, Cell, GameContainer, PlayerLabel, RestartButton} from "./index.styled";
import CrossPlayer from "../players/crossPlayer";
import CirclePlayer from "../players/circlePlayer";
import {CellState} from "../../constants";
import {createBoard, getResult} from "../../game";

export default function Game() {
    const [board, setBoard] = useState(createBoard);
    const [currentPlayer, setCurrentPlayer] = useState<CellState>(CellState.CROSS);
    const {winner, cells} = getResult(board);

    function handleCellClick(row: number, column: number) {
        if (board[row][column] !== CellState.EMPTY || winner !== CellState.EMPTY) return;
        setBoard((previous) =>
            previous.map((line, r) =>
                line.map((cell, c) => (r === row && c === column ? currentPlayer : cell))
            )
        );
        setCurrentPlayer((previous) =>
            previous === CellState.CROSS ? CellState.CIRCLE : CellState.CROSS
        );
    }

    function restart() {
        setBoard(createBoard());
        setCurrentPlayer(CellState.CROSS);
    }

    return (
        <GameContainer>
            {winner === CellState.EMPTY && (
                <PlayerLabel $winner={currentPlayer}>Vez do jogador {currentPlayer}</PlayerLabel>
            )}
            <BoardContainer>
                {board.map((row, r) =>
                    row.map((cell, c) => (
                        <Cell
                            key={`${r}-${c}`}
                            aria-label={`Linha ${r + 1}, coluna ${c + 1}`}
                            onClick={() => handleCellClick(r, c)}
                            $winnerCell={cells.some(([wr, wc]) => wr === r && wc === c)}
                            disabled={cell !== CellState.EMPTY || winner !== CellState.EMPTY}
                        >
                            {cell === CellState.CROSS && <CrossPlayer />}
                            {cell === CellState.CIRCLE && <CirclePlayer />}
                        </Cell>
                    ))
                )}
            </BoardContainer>
            <RestartButton onClick={restart}>Recomeçar</RestartButton>
            {winner !== CellState.EMPTY && (
                <PlayerLabel $winner={winner} role="status">
                    {winner === CellState.DRAW ? "Empate!" : `O jogador ${winner} venceu o jogo!`}
                </PlayerLabel>
            )}
        </GameContainer>
    );
}
