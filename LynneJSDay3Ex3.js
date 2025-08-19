var height = 5;
var i = 0;
 
while (i < height) {
  var line = '';
  var j = 0;
  while (j < height) {
    if (j === i || j === height - 1 - i) {
      line += '*';
    } else {
      line += ' ';
    }
    j++;
  }
  console.log(line);
  i++;
}