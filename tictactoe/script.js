function gameboard() {
    const rows = 3;
    const columns = 3;
    const grid = [];

    for (let i = 0; i < rows; i++) {
        grid[i] = [];
        for (let j = 0; j < columns; j++) {
            grid[i].push(Cell());
        }
    }
    const getBoard = () => grid;

    const dropToken = (row, column, player) => {
        //check that the grip position isnt full and then drop the
        //players mark where they so choose
        if ((grid[row][column].getValue() === "")) {
            grid[row][column].markCell(player);
        }
    };

    const printGrid = () => {
        const boardWithCellValues = grid.map((row) =>
            row.map((cell) => cell.getValue())
        );
        console.log(boardWithCellValues);
    };



    return { getBoard, dropToken, printGrid }
}

function Cell() {

    let value = "";

    const markCell = (player) => {
        value = player;
    };

    const getValue = () => value;

    return {
        markCell,
        getValue,
    };

}
const board = gameboard();
board.dropToken(0, 0, "X");
board.printGrid();
board.dropToken(0, 0, "O"); // try overwriting the same cell
board.printGrid(); // did it actually get blocked?