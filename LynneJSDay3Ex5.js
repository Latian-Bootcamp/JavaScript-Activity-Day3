function ordinal(n) {
    var rem100 = n % 100;
    if (rem100 >= 11 && rem100 <= 13) return n + o[0]; // "th"
 
    // 1 -> "st", 2 -> "nd", 3 -> "rd", others -> "th"
    var rem10 = n % 10;
    if (rem10 === 1) return n + o[1];
    if (rem10 === 2) return n + o[2];
    if (rem10 === 3) return n + o[3];
    return n + o[0];
  }
 
 
  var colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
  var o = ["th", "st", "nd", "rd"];
 
  for (var i = 0; i < colors.length; i++) {
    var num = i + 1;
    var result = ordinal(num) + " choice is " + colors[i] + ".\n";
    console.log(result);
  }