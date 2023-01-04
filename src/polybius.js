// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polyArray = {
  11: "a",
  21: "b",
  31: "c",
  41: "d",
  51: "e",
  12: "f",
  22: "g",
  32: "h",
  42: "(i/j)",
  52: "k",
  13: "l",
  23: "m",
  33: "n",
  43: "o",
  53: "p",
  14: "q",
  24: "r",
  34: "s",
  44: "t",
  54: "u",
  15: "v",
  25: "w",
  35: "x",
  45: "y",
  55: "z",
};
/*
When encoding, your output should still be a string.
When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.
Spaces should be maintained throughout.
Capital letters can be ignored.
The letters "I" and "J" share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.
*/
const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const polyChar = Object.values(polyArray);
    const polyId = Object.keys(polyArray);
    if (encode) {
      const encodedMessage = input
        .toLowerCase()
        .split("")
        .map((char) => {
          let output = "";
          if (char === " ") {
            output += char;
          } else if (char === "i" || char === "j") {
            output += "42";
          } else {
            if (polyChar.includes(char)) {
              const inputIndex = polyChar.indexOf(char);
              output += polyId[inputIndex];
            }
          }
          return output;
        });
      return encodedMessage.join("");
    }
    //DECODE
    else {
      //string length, excluding spaces should be even
      const checkForEven = input.split(" ").join("");
      if (checkForEven.length % 2 !== 0) {
        return false;
      } else {
        //converts the input into an array of number pairs
        let output = "";
        let pairArray = [];
        for (let i = 0; i < input.length; i += 2) {
          //if any of the 2 chars is a space, push space to array
          if (input.charAt(i) === " " || input.charAt(i + 1) === " ") {
            i -= 1;
            pairArray.push(" ");
          } else {
            let pair = input.slice(i, i + 2);
            pairArray.push(pair);
          }
        }

        //loop through each number pair, return corresponding letter
        const match = pairArray.map((char) => {
          if (char === " ") {
            output = char;
          } else {
            if (polyId.includes(char)) {
              let index = polyId.indexOf(char);
              output = polyChar[index];
            }
          }
          return output;
        });
        //join array to create a string
        return match.join("");
      }
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

