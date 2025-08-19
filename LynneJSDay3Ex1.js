function numberToWords(number) {
  if (isNaN(number)) {
    return "Invalid input: not a number";
  } else if (number < 0 || number > 999) {
    return "Number out of range (0-999)";
  }
 
  var onesWord = "";
  var tensWord = "";
  var hundredsWord = "";
  var result = "";
 
  // Hundreds
  if (number >= 100) {
    var hundreds = Math.floor(number / 100);
    switch (hundreds) {
      case 1: hundredsWord = "One Hundred"; break;
      case 2: hundredsWord = "Two Hundred"; break;
      case 3: hundredsWord = "Three Hundred"; break;
      case 4: hundredsWord = "Four Hundred"; break;
      case 5: hundredsWord = "Five Hundred"; break;
      case 6: hundredsWord = "Six Hundred"; break;
      case 7: hundredsWord = "Seven Hundred"; break;
      case 8: hundredsWord = "Eight Hundred"; break;
      case 9: hundredsWord = "Nine Hundred"; break;
    }
    number = number % 100; // Remaining part
  }
 
  // Tens and ones
  if (number < 20) {
    switch (number) {
      case 0: onesWord = ""; break;
      case 1: onesWord = "One"; break;
      case 2: onesWord = "Two"; break;
      case 3: onesWord = "Three"; break;
      case 4: onesWord = "Four"; break;
      case 5: onesWord = "Five"; break;
      case 6: onesWord = "Six"; break;
      case 7: onesWord = "Seven"; break;
      case 8: onesWord = "Eight"; break;
      case 9: onesWord = "Nine"; break;
      case 10: onesWord = "Ten"; break;
      case 11: onesWord = "Eleven"; break;
      case 12: onesWord = "Twelve"; break;
      case 13: onesWord = "Thirteen"; break;
      case 14: onesWord = "Fourteen"; break;
      case 15: onesWord = "Fifteen"; break;
      case 16: onesWord = "Sixteen"; break;
      case 17: onesWord = "Seventeen"; break;
      case 18: onesWord = "Eighteen"; break;
      case 19: onesWord = "Nineteen"; break;
    }
  } else {
    var tens = Math.floor(number / 10);
    var ones = number % 10;
 
    switch (tens) {
      case 2: tensWord = "Twenty"; break;
      case 3: tensWord = "Thirty"; break;
      case 4: tensWord = "Forty"; break;
      case 5: tensWord = "Fifty"; break;
      case 6: tensWord = "Sixty"; break;
      case 7: tensWord = "Seventy"; break;
      case 8: tensWord = "Eighty"; break;
      case 9: tensWord = "Ninety"; break;
    }
 
    switch (ones) {
      case 1: onesWord = "One"; break;
      case 2: onesWord = "Two"; break;
      case 3: onesWord = "Three"; break;
      case 4: onesWord = "Four"; break;
      case 5: onesWord = "Five"; break;
      case 6: onesWord = "Six"; break;
      case 7: onesWord = "Seven"; break;
      case 8: onesWord = "Eight"; break;
      case 9: onesWord = "Nine"; break;
    }
  }
 
  if (hundredsWord) result += hundredsWord;
  if (tensWord) result += (result ? " " : "") + tensWord;
  if (onesWord) result += (result ? " " : "") + onesWord;
 
  return result.trim();
}
 
const numberToTranslate = 789;
var converted = numberToWords(numberToTranslate);
console.log(converted);