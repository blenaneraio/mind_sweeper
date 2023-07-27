
//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (input) => {
  const rows = input.length;
  const cols = input[0].length;

  const minesweepBoard = [];

  for (let r = 0; r < rows; r++) {
    let row = "";

    for (let c = 0; c < cols; c++) {
      if (input[r][c] === "*") {
        row += "*";
        continue;
      }

      let nearByMines = 0;

      
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) {
            continue;
          }

          const newRow = r + dr;
          const newCol = c + dc;

          if (
            newRow >= 0 &&
            newRow < rows &&
            newCol >= 0 &&
            newCol < cols &&
            input[newRow][newCol] === "*"
          ) {
            nearByMines++;
          }
        }
      }
      row += nearByMines > 0 ? nearByMines : " ";
    }

    minesweepBoard.push(row);
  }


  return minesweepBoard;
};
