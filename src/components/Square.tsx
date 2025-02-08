type SquareProps = { value: string | null; onClick: () => void };

const Square = ({ value, onClick }: SquareProps) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

export default Square;
