import useTicTacToe from "../hooks/use-tic-tac-toe";

function TicTacToe() {
  const { board, calculateWinner, handleClick, resetGame, getStatusMessage } =
    useTicTacToe();

  return (
    <div className="game">
      <div className="status">
        <div className="status-message">{getStatusMessage()}</div>
        <button className="reset-button" onClick={resetGame} style={{cursor: 'pointer'}}>
          Reset Game
        </button>
      </div>

      <div className="board">
        {board.map((b, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={()=>handleClick(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TicTacToe;
