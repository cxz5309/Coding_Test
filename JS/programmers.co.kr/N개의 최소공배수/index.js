const arr = [2, 6, 8, 14];

function solution(arr) {
  var tmp = 0;
  let i = Math.max(...arr);
  while (true) {
    for (let val of arr) {
      if (i % val === 0) {
        tmp++;
      }
      else {
        tmp = 0;
        break;
      }
    }
    if (tmp === arr.length) {
      return i;
    }
    i++;
  }
}


console.log(solution(arr));