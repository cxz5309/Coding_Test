const sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];

function solution(sizes) {
  var answer = 0;
  let hori = 0;
  let vert = 0;

  const newSizes = sizes.map((val) => {
    return val.sort((a, b) => a - b);
  });

  newSizes.forEach((val) => {
    hori = Math.max(hori, val[0]);
    vert = Math.max(vert, val[1]);
  });
  answer = hori * vert;
  return answer;
}


console.log(solution(sizes));