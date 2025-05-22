import { useState } from "react";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
];

export default function GameBoard({ onSelectSquare }) {

	// const [gameBoard, setGameBoard] = useState(initialGameBoard);

	// const handleSelectSquare = (rowIndex, colIndex) => {
	// 	setGameBoard((prevGameBoard) => {
	// 		const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
	// 		updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
	// 		return updatedBoard;
	// 		// this way can lead to bugs if the app has many places scheduling updates
	// 		// prevGameBoard[rowIndex][colIndex] = 'X';
	// 		// return prevGameBoard;
	// 	});
	// 	onSelectSquare();
	// }

	return <ol id="game-board">
		{gameBoard.map((row, rowIndex) =>
			<li key={rowIndex}>
				<ol>
					{row.map((playerSymbol, colIndex) =>
						<li key={colIndex}>
							<button onClick={onSelectSquare}>
								{playerSymbol}
							</button></li>)}
				</ol>
			</li>)}

	</ol>
}