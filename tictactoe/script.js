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
        //check that the grip position isnt full and then drop the
        //players mark where they so choose
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
        grid.dropToken(row, column, getActivePlayer().token);

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