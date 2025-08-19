const totalRows = 5;
 
if (typeof totalRows !== 'number' || totalRows <= 0) {
  console.error("Invalid input: 'totalRows' must be a positive number.");
} else {
  let row = totalRows;
 
  while (row > 0) {
    const spaces = totalRows - row;
 
    let spaceStr = "";
    let i = 0;
    while (i < spaces) {
      spaceStr += " ";
      i++;
    }
 
    let starStr = "";
    let j = 0;
    while (j < row) {
      starStr += "*";
      j++;
    }
 
    console.log(spaceStr + starStr);
    row--;
  }
}