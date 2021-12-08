const arr1 = [[2, 3, 2], [4, 2, 4], [3, 1, 4]]
const arr2 = [[5, 4, 3], [2, 4, 1], [3, 1, 1]]

// const horiSum = (idx, arr) => {
//   return arr[idx].reduce((prev, curr) => {
//     return prev + curr
//   }, 0)
// }

// const vertSum = (idx, arr) => {
//   const filterArr = arr.map((val) => {
//     return val[idx];
//   });
//   let sum = 0;
//   for (let val of filterArr) {
//     sum += val;
//   }
//   return sum;
// }

function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    const inner = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      inner.push(sum);
    }
    answer.push(inner);
  }
  return answer;
}


console.log(solution(arr1, arr2));