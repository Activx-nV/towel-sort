
// You should implement your task here.

module.exports = function towelSort(matrix = []) {

  let sortedArray = [];
  for (let f = 0; f < matrix.length; f++) {
    if (f % 2 == 0) {
      continue;
    } else matrix[f].reverse();
  }
  if (matrix.length == 0) {
    return sortedArray;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j <= matrix[i].length - 1; j++) {
      if (i % 2 == 0) {
        sortedArray.push(matrix[i][j]);
      } else {
        sortedArray.push(matrix[i][j]);
      }
    }
  }

  return sortedArray;
}
