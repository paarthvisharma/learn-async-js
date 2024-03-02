function sum2DArray(arr, rowInd) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        setTimeout(() => {
            if(arr.length > rowInd) {
                let sum = 0;
                for (let i = 0; i < arr[rowInd].length; i++) {
                    sum += arr[rowInd][i];
                }
                console.log('resolving ... ');
                resolve(sum);
            }
            else {
                console.log('rejecting ... ');
                reject('BAD INPUT: Expected array as input');
            }
            console.log('returning from sum');
        }, 0);
    });
}
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let sumPromises = [];
for (let i = 0; i < array2D.length; i++) {
    sumPromises.push(sum2DArray(array2D, i));
}


Promise.all(sumPromises)
    .then((results) => console.log(results))
    .catch((error) => console.log(error));