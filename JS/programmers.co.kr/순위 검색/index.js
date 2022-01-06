const info = ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"]
const query = ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"]


function solution(info, query) {
  var answer = [];
  const infoSplit = info.map((val) => {
    return val.split(' ');
  });
  const querySplit = query.map((val, idx) => {
    const element = val.split(' and ');
    const last = element.pop();
    element.push(...last.split(' '));
    return element;
  });

  const select = new Map('')

  infoSplit.forEach((val) => {
    select[val[0]][val[1]][val[2]][val[3]].push(val[4]);
  })

  querySplit.forEach((val) => {

    console.log(select[val[0]][val[1]][val[2]][val[3]]);
  })
  console.log(select);
  console.log(infoSplit);
  console.log(querySplit);
  return answer;
}

console.log(solution(info, query));