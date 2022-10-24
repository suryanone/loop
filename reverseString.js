let text = "texting first";
let textLength = text.length;

let reverseText = "";
for (i = 0; i < textLength; i++) {
  let getChar = text[textLength - (i + 1)];
  reverseText += getChar;
}
// const reverseString = function (string) {
//   return string.split("").reverse().join("");
// };
console.log(reverseText);
