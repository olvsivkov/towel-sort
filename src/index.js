// You should implement your task here.

module.exports = function towelSort(matrix) {
    let newArr = [];
    if (matrix == null) return []
    for (let i = 0; i < matrix.length; i++) {
        const arr = matrix[i];
        newArr = newArr.concat(i % 2 ? [...arr].reverse() : arr);
    }
    return newArr;
}