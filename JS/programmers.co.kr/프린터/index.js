const priorities = [2, 3, 3, 2, 9, 3, 3]
const location = 3;

function solution(priorities, location) {
  var answer = 0;
  const locationNum = priorities[location];
  const biggerPriorities = priorities
    .map((val, idx) => {
      return [val, idx];
    }).filter((val) => {
      return locationNum < val[0];
    });
  const samePriorities = priorities
    .map((val, idx) => {
      return [val, idx];
    }).filter((val) => {
      return locationNum === val[0];
    });
  let startIdx = biggerPriorities.length === 0 ? priorities.length : biggerPriorities[biggerPriorities.length - 1][1];
  let count = 1;
  for (let val of samePriorities) {
    if (val[1] > startIdx) {
      count++;
    }
    else {
      if (val[1] < location) {
        count++;
      }
    }
  }
  console.log('biggerPriorities.length', biggerPriorities.length)
  console.log('count', count)
  answer = biggerPriorities.length + count;
  return answer;
}


console.log(solution(priorities, location));