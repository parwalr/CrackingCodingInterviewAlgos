const URLify = (string, n = string.length) => {
  let output = "";
  let chars = 0;

  for (let i = 0; i < string.length; i++) {
    let c = string[i];
    if (c !== " ") {
      chars++;
    }
  }
  let spaces = n - chars;

  for (let i = 0; i < string.length; i++) {
    let c = string[i];
    if (c === " " && spaces > 0) {
      output += "%20";
      spaces--;
    } else if (c !== " ") {
      output += c;
    }
  }
  //if n is not yet reached and there are still spaces left
  while (spaces > 0) {
    output += "%20";
    spaces--;
  }
  return output;
};

console.log(URLify("   hi ", 7));
console.log(URLify("Mr John Smith    ", 13));
