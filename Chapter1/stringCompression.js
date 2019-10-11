const stringCompression = string => {
  //travese string and keep track of repeated characters
  //if curr and and next the same increase the count
  let output = "";
  let count = 1;

  for (let i = 0; i < string.length; i++) {
    let current = string[i];
    let next = string[i + 1];
    if (current === next) {
      count++;
    } else {
      output += current + String(count);
      count = 1;
    }
  }
  return output.length < string.length ? output : string;
};

console.log(stringCompression("aaabbbcccaad"));
console.log(stringCompression("aabbbcc"));
console.log(stringCompression(" "));
console.log(stringCompression("aaaBBBccc"));
