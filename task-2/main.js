let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 1, 2, 3],
    [4, 5, 6, 7]
];
let matrix1 = [];
let r = 3;
let c = 2;
for (let i = 0; i < r; i++) {
  matrix1.push(new Array(c));
}
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    matrix1[i][j] = matrix[i][j];
  }
}
console.log(matrix1);
