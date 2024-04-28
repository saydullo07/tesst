// //2

// function rangeSum(arr, K, L) {
//   return arr.slice(K, L + 1).reduce((sum, num) => sum + num, 0);
// }

// console.log(rangeSum([1, 6, 9, 5, 8, 10, 15], 2, 5));




// //Array4

// function rangeSum(arr, K, L) {
//     let sum = 0;
//     for (let i = K; i <= L; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(rangeSum([1, 6, 9, 5, 8, 10, 15], 2, 5));






// console.log(getInitialOdds(5));

// //Array7

// function shiftArray(arr) {
//     let shift = arr.slice(1);
//     shift.push(arr[0]);
//     return shift;
// }

// console.log(shiftArray([5, 1, 9, 8, 10]));

// //3

// function getInitialOdds(s) {
//     return [...Array(s).keys()].map(x => 2 * x + 1);
// }

// console.log(getInitialOdds(5));

// //Array6

// function MinMax(arr) {
//     let minIndex = arr.indexOf(Math.min(...arr));
//     let maxIndex = arr.indexOf(Math.max(...arr));
    
//     let a = arr[minIndex];
//     arr[minIndex] = arr[maxIndex];
//     arr[maxIndex] = a;

//     console.log("Max:", Math.max(...arr));
//     console.log("Min:", Math.min(...arr));
//     return arr;
// }

// let arr = [7, 8, 9, 9, 39, 10, 1,];
// console.log("Output:");
// console.log(MinMax(arr));

// function getInitialOdds(n) {
//     let natija = [];
//     for (let i = 1; i <= 2 * n; i += 2) {
//         natija.push(i);
//     }
//     return natija;