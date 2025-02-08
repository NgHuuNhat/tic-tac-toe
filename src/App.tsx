import { useState, useEffect } from "react";
import Board from "./components/Board";
import "./App.css";

const App = () => {
  const [history, setHistory] = useState<string[][]>([Array(9).fill(null)]);
  const [step, setStep] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0 });

  const currentBoard = history[step];
  const winner = calculateWinner(currentBoard);

  useEffect(() => {
    if (winner) setScores((prev: any) => ({ ...prev, [winner]: prev[winner] + 1 }));
  }, [winner]);

  const handleClick = (i: number) => {
    if (currentBoard[i] || winner) return;
    const newBoard = [...currentBoard];
    newBoard[i] = xIsNext ? "X" : "O";
    setHistory([...history.slice(0, step + 1), newBoard]);
    setStep(step + 1);
    setXIsNext(!xIsNext);
  };

  const restartGame = () => {
    setHistory([Array(9).fill(null)]);
    setStep(0);
    setXIsNext(true);
  };

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <Board squares={currentBoard} onClick={handleClick} />
      <h2>Scores - X: {scores.X} | O: {scores.O}</h2>
      <h2>{winner ? `Winner: ${winner}` : step === 9 ? "It's a tie!" : `Next: ${xIsNext ? "X" : "O"}`}</h2>
      <button onClick={restartGame}>Restart</button>
    </div>
  );
};

const calculateWinner = (squares: string[]): string | null => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
  }
  return null;
};

export default App;
