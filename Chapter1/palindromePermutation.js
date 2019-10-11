const palindromePermutation = string => {
  let hash = {};
  let charCount = 0;

  for (let i = 0; i < string.length; i++) {
    let c = string[i];
    if (c === " ") {
      continue;
    }
    if (hash[c]) {
      delete hash[c];
    } else {
      hash[c] = true;
    }
    charCount++;
  }
  if (charCount % 2 === 0) {
    return Object.keys(hash).length === 0;
  } else {
    return Object.keys(hash).length === 1;
  }
};

console.log(palindromePermutation("taco cat"));
console.log(palindromePermutation("tac taco"));
