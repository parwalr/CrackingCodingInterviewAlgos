const oneAway = (s1, s2) => {
  let edits = 1;
  //   let long = s1.length > s2.length ? s1 : s2;
  //   let short = s1.length < s2.length ? s1 : s2;

  let maxLen = Math.max(s1.length, s2.length);
  let diff = Math.abs(s1.length - s2.length);

  if (diff > edits) {
    return false;
  }
  for (let i = 0, j = 0; i < maxLen || j < maxLen; i++, j++) {
    let c1 = s1[i];
    let c2 = s2[j];
    if (c1 !== c2) {
      edits--;
      if (edits < 0) {
        return false;
      }
      if (c1 === s2[j + 1]) {
        //insert
        j++;
      } else if (s1[i + i] === c2) {
        //remove
        i++;
      }
    }
  }
  return true;
};

console.log(oneAway("pale", "ple"));
console.log(oneAway("pales", "pale"));
console.log(oneAway("pale", "bake"));
console.log(oneAway("male", "bake"));
