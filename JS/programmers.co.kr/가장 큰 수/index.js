const numbers = [0, 0, 0, 0]


// const logic = (a, b) => {
//   const aStr = a.toString();
//   const bStr = b.toString();
//   const minIdx = Math.min(aStr.length, bStr.length)
//   for (let i = 0; i < minIdx; i++) {
//     if (bStr[i] !== aStr[i]) return bStr[i] - aStr[i];
//   }
//   const key = aStr.length > bStr.length ? aStr[minIdx] : bStr[minIdx];
//   return aStr[0] - key;
// }

const logic = (a, b) => {
  const aStr = a.toString();
  const bStr = b.toString();
  return (bStr + aStr) - (aStr + bStr);
}

function solution(numbers) {
  var answer = '';
  numbers.sort((a, b) => logic(a, b));
  if (numbers[0] === 0) return '0';
  answer = numbers.join('');
  return answer;
}


console.log(solution(numbers));