const rotateMatrix = m => {
  let n = m.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; i < n - 2 * i - 1; j++) {
      let temp = m[i + j][n - 1 - i];
      m[i + j][n - 1 - i] = m[i][i + j];
      m[i][i + j] = temp;

      temp = m[n - 1 - i][n - 1 - i - j];
      m[n - 1 - i][n - 1 - i - j] = m[i][i + j];
      m[i][i + j] = temp;

      temp = m[n - 1 - i - j][i];
      m[n - 1 - i - j][i] = m[i][i + j];
      m[i][i + j] = temp;
    }
  }
  return m;
};
