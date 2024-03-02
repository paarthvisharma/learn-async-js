function sum2DArray(arr, rowInd) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(arr.length > rowInd) {
                for (let i = 0; i < arr[rowInd].length; i++) {
                    if (arr[rowInd][i] < 0) {
                        resolve(arr[rowInd]);
                    }
                }
                reject('No negative numbers found');
            }
            else {
                reject('BAD INPUT: Expected array as input');
            }
        }, 0);
    });
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

let sumPromises = [];
for (let i = 0; i < array2D.length; i++) {
    sumPromises.push(sum2DArray(array2D, i));
}


Promise.any(sumPromises)
    .then((results) => console.log(results))
    .catch((error) => console.log(error));