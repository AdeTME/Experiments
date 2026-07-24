function Gamegrid() {
    const rows = 3;
    const columns = 3;
    const grid = [];

    for (let i = 0; i < rows; i++) {
        grid[i] = [];
        for (let j = 0; j < columns; j++) {
            grid[i].push(Cell());
        }
    }
    const getGrid = () => grid;

    const dropToken = (row, column, player) => {

        if ((grid[row][column].getValue() === "")) {
            grid[row][column].markCell(player);
        }
    };

    const printGrid = () => {
        const gridWithCellValues = grid.map((row) =>
            row.map((cell) => cell.getValue())
        );
        console.log(gridWithCellValues);
    };


    return { getGrid, dropToken, printGrid }
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

function GameController(
    playerOneName = "Player One",
    playerTwoName = "Player Two"
) {
    const grid = Gamegrid();
    let round = 0;

    const players = [
        {
            name: playerOneName,
            token: "X",
        },
        {
            name: playerTwoName,
            token: "O",
        },
    ];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };
    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        grid.printGrid();
        console.log(`${getActivePlayer().name}'s turn.`);
    };

    const playRound = (row, column) => {
        console.log(
            `Dropping ${getActivePlayer().name}'s token into cell ${row},${column}...`
        );
        console.log(round++);//need to check that the round actually held... but ill do the rest for now
        grid.dropToken(row, column, getActivePlayer().token);

        const winGame = () => {
            let success = false;
            //on the 5th round, start checking if the win condition has been fulfilled
            if (round >= 5) {
                // first check if there is a row that fulfills the conditions

                for (let i = 0; i < 3; i++) {
                    if (grid[i][0].getValue() === grid[i][1].getValue() && grid[i][1].getValue() === grid[i][2].getValue() && grid[i][0].getValue() !== "") {//check if there is a row with equal cells, that arent "" empty
                        console.log(`${getActivePlayer().name} Wins this round`);
                        return true;
                    }
                }

                if ([0, 1, 2].some((col) => {
                    return grid[0][col].getValue() === grid[1][col].getValue() &&
                        grid[1][col].getValue() === grid[2][col].getValue() &&
                        grid[0][col].getValue() !== "";
                })) {
                    return true;
                }


                //now for the diagonals
                if ((grid[0][0].getValue() === grid[1][1].getValue() && grid[1][1].getValue() === grid[2][2].getValue()) || (grid[0][2].getValue() === grid[1][1].getValue() && grid[1][1].getValue() === grid[2][0].getValue()))
                    return true;
            }
            return false;
        };

        switchPlayerTurn();
        printNewRound();
    };

    printNewRound();
    return {
        playRound,
        getActivePlayer,
    };

}

const game = GameController("Alice", "Bob");
game.playRound(0, 0);
game.playRound(1, 1);
game.playRound(1, 1);
game.playRound(1, 1);