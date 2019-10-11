const isUnique = string => {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
};

console.log(isUnique("abcd"));
console.log(isUnique("abccd"));
console.log(isUnique("bhjjb"));
console.log(isUnique("ritu"));
