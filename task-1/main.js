let matrix = [
  [4, -2, 5],
  [1, -4, -12],
  [0, 1, -3],
];
let n = 3;
let counter = 0;
for (let i = 0; i < n; i++) {
  matrix.push(new Array(n));
}
let sum = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (matrix[i][j] < 0 && matrix[i][j] % 2 == 0) {
      sum = sum + matrix[i][j];
      counter++;
    }
  }
}
console.log("" + counter + " " + sum);
