const enter = [1,4,2,3]
const leave = [2,1,4,3]	


function solution(enter, leave) {
  var answer = [];
  let leavedPeople = Array(enter.length + 1).fill(0);
  
  let hashMap = new Map();
  
  for(let i=0;i<enter.length;i++){
    const size = hashMap.size - 1;
    hashMap.set(enter[i], size);

    const keysIterator = hashMap.keys();
    for ( let key of keysIterator ) {
      hashMap.set(key, hashMap.get(key) + 1);  
    }
  
    while(hashMap.has(leave[0])){
      leavedPeople[leave[0]] = hashMap.get(leave[0]);
      hashMap.delete(leave[0]);
      leave.shift();
    }
  }
  answer = leavedPeople.filter((val, idx)=> idx>0);
  return answer;
}


console.log(solution(enter, leave));