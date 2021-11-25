function solution(s) {
  var answer = '';
  const arr = s.split('');
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  arr.sort((a, b) => {
    if (upper.includes(a) && !upper.includes(b)) {
      return 1
    }
    if (!upper.includes(a) && upper.includes(b)) {
      return -1;
    }
    return -a.localeCompare(b);
  })
  return answer = arr.join('');
}