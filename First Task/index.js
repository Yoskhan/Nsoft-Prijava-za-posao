const matrix = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
]

function getSum(selectedNumber) {
    const {rowIndex, columnIndex} = findIndexOf(selectedNumber);
    
    let sum = 0;
    // index "i" and "j" will go from -1 to 1
    // so you can iterate just row and columns you need.

    for (let i = -1; i <= 1; i++) {
        if (matrix[rowIndex + i]) {
            for (let j = -1; j <= 1; j++) {
                if (matrix[rowIndex + i][columnIndex + j]) {
                    sum += matrix[rowIndex + i][columnIndex + j];
                }
            }
        }
    }
    return sum;
}

function findIndexOf(selectedNumber) {
    if (selectedNumber > 0 && selectedNumber <= 100) {
        for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
            for (let columnIndex = 0; columnIndex < matrix[rowIndex].length; columnIndex++) {
                if (matrix[rowIndex][columnIndex] === selectedNumber) {
                    return {rowIndex, columnIndex};
                }
            }
        }
    } else{
        (console.log('Invalid input.'));
    }
}

console.log(getSum(56));


//This function would work in this situation, maybe it is more performative 
//because it doesn't have loops. I would love to know that.
//But first function would work on random numbers, other than 1 to 100 strictly.

// function findIndexOf(selectedNumber) {
//     const numberPosition = {};

//     if ((selectedNumber % 10) !== 0) {
//         numberPosition.rowIndex = parseInt(selectedNumber / 10);
//         numberPosition.numberIndex = ((selectedNumber % 10) - 1);
//     } else {
//         numberPosition.rowIndex = parseInt(selectedNumber / 10) - 1;
//         numberPosition.numberIndex = 9;
//     }
//     return numberPosition;
// }

// console.log(getSum(10));
