import {useState} from "react";
import Button from "@mui/material/Button";

export function TicTacToe() {
  const [board, setBoard] = useState([
    null, null, null, null, null, null, null, null, null
  ]);

  const[isXTurn, setIsXTurn] = useState(true);

  const handClick = (index) => {
    console.log(index);
    if(!winner && board[index] === null){
      const boardCopy = [...board];
      boardCopy[index] = isXTrue ? 'X' : 'O';
      setBoard(boardCopy);
      // Toggle turn / Alternate turn
      setIsXTurn(!isXTurn);
    }
  }

  const decideWinner = (board) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i=0; i<lines.length; i++){
      const [a,b,c] = lines[i];
      if (board[a] != null && board[a] === board[b] && board[b] === board[c]){
        console.log("Winner", board[a]);
        return board[a];
      }
    }
    return null;
  };

  const winner = decideWinner(board);

const restartGame = () => {
  setBoard(Array(9).fill(null));
  setIsXTurn(true);
};

  return (
    <div className='tic-tac-toe'>
      {winner ? ( <Confetti width={width} height={height} gravity={0.2}/>) : null}
      <h1>TicTacToe Game</h1>
      <div className='board'>
        {board.map((Val, index) => (
          <GameBox Val={Val} onPlayerClick={() => handClick(index)}/>
        ))}
      </div>
      <Button onClick={restartGame} varient='contained'>RESTART</Button>
      {winner ? <h1>The winner is {winner}</h1> : null}
    </div>
  );
}

function GameBox({Val, onPlayerClick}){
  // const [Val, newVal] = useState('');

  const styling = {
    color: Val === 'X' ? 'green' : 'red',
  };

  return(
    <div style={styling} onClick={onPlayerClick} className='game-box'> {/* onClick={()=> newVal("X")} */}
    {/* <div style={styling} onClick={() => handClick(index)} className='game-box'></div> */}
       {Val}
    </div>
  )
}
