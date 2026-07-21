function gameboard(){
    const rows = 3;
    const columns = 3;
    const cells =[];

    for (let i = 0; i < rows; i++) {
    cells[i] = [];
    for (let j = 0; j < columns; j++) {
      cells[i].push(Cell());
    }
    }
      const getBoard = () => cells;

      const fillCell = (rows,column, player) => {
        const availableCell = cells
            .filter((row)=>)
  }
}