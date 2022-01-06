const movie = ["spy", "ray", "spy", "room", "once", "ray", "spy", "once"]

function solution(movie) {
  const dic = new Map();
  for (let title of movie) {
    const cnt = dic.has(title) ? dic.get(title) : 0;
    dic.set(title, cnt + 1);
  }
  const arr = [...dic].map(([name, value]) => ({ name, value }));

  const answer = arr.sort((a, b) => {
    if (a.value === b.value) {
      return (a.name < b.name) ? -1 : (a.name == b.name) ? 0 : 1;
    }
    return b.value - a.value
  }).map((val) => {
    return val.name;
  })

  return answer;
}

console.log(solution(movie))