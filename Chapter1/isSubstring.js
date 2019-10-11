const isSubstring = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  return (str1 + str1).includes(str2);
};

console.log(isSubstring("waterbottle", "bottlewater"));
console.log(isSubstring("waterbottle", "erbottlewat"));
console.log(isSubstring("waterbottle", "erbotlewatt"));
