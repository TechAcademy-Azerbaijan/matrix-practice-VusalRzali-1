
let x1 = 4;
let x2 = 5;
let matrix = [
  [2, 5, 3, 1, 4],
  [3, 5, 2, 3, 4],
  [4, 6, 1, 2, 3],
  [4, 5, 6, 7, 7],
];
let min = matrix[0][0];
for (let i = 0; i < x1; i++) {
  for (let j = 0; j < x2; j++) {
    if (matrix[i][j] < min) {
      min = matrix[i][j];
    }
  }
}
let ch = "";
for (let i = 0; i < x1; i++) {
  for (let j = 0; j < x2; j++) {
    if (matrix[i][j] == min) {
      ch = ch + (i + 1) + " ";
    }
  }
}
console.log(ch);
