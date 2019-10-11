const matrix1 = [[4, 1, 3], [2, -4, 0], [5, 9, 2]];
const matrix2 = [[5, 2, 1, 0], [4, 3, 2, 1], [6, 0, 3, 2], [7, 8, 9, 1]];

const zeroMatrix = (matrix, n) => {
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (matrix[r][c] === 0) {
        matrix[r][c] = true;
      }
    }
  }
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (matrix[r][c] === true) {
        for (let i = 0; i < n; i++) {
          matrix[r][i] = 0;
        }
        for (let i = 0; i < n; i++) {
          matrix[i][c] = 0;
        }
      }
    }
  }
  return matrix;
};

console.log(zeroMatrix(matrix1, 3));
console.log(zeroMatrix(matrix2, 4));
