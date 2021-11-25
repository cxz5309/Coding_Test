const arr1 = [[1, 4], [3, 2], [4, 1]];
const arr2 = [[3, 3], [3, 3]];

const horiSum = (idx, arr) => {
  return arr[idx].reduce((prev, curr) => {
    return prev + curr
  }, 0)
}

const vertSum = (idx, arr) => {
  const filterArr = arr.map((val) => {
    return val[idx];
  });
  let sum = 0;
  for (let val of filterArr) {
    sum += val;
  }
  return sum;
}

function solution(arr1, arr2) {
  var answer = [[]];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {

    }
  }
  return answer;
}


console.log(solution(arr1, arr2));