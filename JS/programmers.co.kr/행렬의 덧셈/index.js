const arr1 = [[1, 2], [2, 3]]
const arr2 = [[3, 4], [5, 6]]

function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    const inner = [];
    for (let j = 0; j < arr1[0].length; j++) {
      inner.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(inner);
  }
  return answer;
}


console.log(solution(arr1, arr2));