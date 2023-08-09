import React, { useCallback, useState } from "react";
import { CellState } from "../constants";
import { BoardContainer, Cell, GameContainer, PlayerLabel, RestartButton } from "./index.styled";
import CrossPlayer from "../players/crossPlayer";
import CirclePlayer from "../players/circlePlayer";

const GAME_SIZE = 3;

const initialBoard = Array.from(
  { length: GAME_SIZE }, 
  () => Array.from({ length: GAME_SIZE }, () => CellState.EMPTY)
);

const initialWinnerCells = Array.from(
  { length: GAME_SIZE }, 
  () => Array.from({ length: GAME_SIZE }, () => false)
);

const Game: React.FC = () => {
  const [board, setBoard] = useState<CellState[][]>(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState<CellState>(CellState.CROSS);
  const [gameWinner, setGameWinner] = useState<CellState>(CellState.EMPTY);
  const [winnerCells, setWinnerCells] = useState<boolean[][]>(initialWinnerCells);

  const changePlayer = useCallback(() => {
    setCurrentPlayer((player) =>
      player === CellState.CROSS 
        ? CellState.CIRCLE 
        : CellState.CROSS
    );
  }, []);

  const restartGame = useCallback(() => {
    window.location.reload();
  }, []);

  const checkWinner = useCallback(() => {
    const newWinnerCells = [...winnerCells];
    // Confere as linhas
    for(let i = 0; i < GAME_SIZE; i++) {
      if(
        board[i][0] === board[i][1] && 
        board[i][1] ===  board[i][2] && 
        board[i][0] != CellState.EMPTY
      ) {
        newWinnerCells[i][0] = true;
        newWinnerCells[i][1] = true;
        newWinnerCells[i][2] = true;
        setWinnerCells(newWinnerCells);
        return board[i][0];
      }
    }

    // Confere as colunas
    for(let i = 0; i < GAME_SIZE; i++) {
      if(
        board[0][i] === board[1][i] && 
        board[1][i] ===  board[2][i] &&
        board[0][i] != CellState.EMPTY
      ) {
        newWinnerCells[0][i] = true;
        newWinnerCells[1][i] = true;
        newWinnerCells[2][i] = true;
        setWinnerCells(newWinnerCells);
        return board[0][i];
      }
    }

    // Confere a diagonal principal
    if(
      board[0][0] === board[1][1] && 
      board[1][1] ===  board[2][2] &&
      board[0][0] != CellState.EMPTY
    ) {
      newWinnerCells[0][0] = true;
      newWinnerCells[1][1] = true;
      newWinnerCells[2][2] = true;
      setWinnerCells(newWinnerCells);
      return board[0][0];
    }

    // Confere a diagonal secundária
    if(
      board[0][2] === board[1][1] && 
      board[1][1] ===  board[2][0] &&
      board[0][2] != CellState.EMPTY
    ) {
      newWinnerCells[0][2] = true;
      newWinnerCells[1][1] = true;
      newWinnerCells[2][0] = true;
      setWinnerCells(newWinnerCells);
      return board[0][2];
    }

    // Confere o empate
    for(let i = 0; i < GAME_SIZE; i++) {
      for(let j = 0; j < GAME_SIZE; j++) {
        if(board[i][j] === CellState.EMPTY){
          return CellState.EMPTY;
        }
      }
    }

    return CellState.DRAW;
  }, [board, winnerCells]);

  const handleCellClick = useCallback((row: number, col: number) => {
    const cellState = board[row][col];
    if(cellState !== CellState.EMPTY || gameWinner != CellState.EMPTY) 
      return;

    const newBoard = [...board];
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    const winner = checkWinner();
    if(winner !== CellState.EMPTY) {
      setGameWinner(winner);
    } else {
      changePlayer();
    }
  }, [board, gameWinner, currentPlayer, checkWinner, changePlayer]);

  const renderCell = useCallback((state: number) => {
    switch (state) {
      case CellState.EMPTY:
        return null;
      case CellState.CROSS:
        return <CrossPlayer />;
      case CellState.CIRCLE:
        return <CirclePlayer />;
    }
  }, []);

  return (
    <GameContainer>
      <PlayerLabel winner={currentPlayer}>
        Vez do jogador {currentPlayer}
      </PlayerLabel>
      <BoardContainer>
        {board.map((row, rowIndex) =>
          row.map((cell, columnIndex) => (
            <Cell 
              key={`cell-${rowIndex}-${columnIndex}`}
              onClick={() => handleCellClick(rowIndex, columnIndex)}
              winnerCell={winnerCells[rowIndex][columnIndex]}
              disabled={cell !== CellState.EMPTY}
            >
              {renderCell(cell)}
            </Cell>
          ))
        )}
      </BoardContainer>
      <RestartButton onClick={restartGame}>
        Recomeçar
      </RestartButton>
      {gameWinner !== CellState.EMPTY && (
        <PlayerLabel winner={gameWinner}>
          {gameWinner === CellState.DRAW 
            ? `Empate!`
            : `O jogador ${gameWinner} venceu o jogo!`
          }
        </PlayerLabel>
      )}
    </GameContainer>
  );
};

export default Game;
