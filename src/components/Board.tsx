import Square from "./Square";

type BoardProps = { squares: string[]; onClick: (i: number) => void };

const Board = ({ squares, onClick }: BoardProps) => (
  <div className="board">
    {Array(3).fill(null).map((_, row) => (
      <div key={row} className="board-row">
        {Array(3).fill(null).map((_, col) => (
          <Square key={col} value={squares[row * 3 + col]} onClick={() => onClick(row * 3 + col)} />
        ))}
      </div>
    ))}
  </div>
);

export default Board;
