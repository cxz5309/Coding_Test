const participant = ["mislav", "stanko", "mislav", "ana"]
const completion = ["stanko", "ana", "mislav"]


function solution(participant, completion) {
  let allParticipants = new Map();

  //전체 인원을 allParicipants에 등록하고 값으로 1을 추가합니다.
  participant.forEach((val) => {
    const cnt = allParticipants.has(val) ? allParticipants.get(val) + 1 : 1;
    allParticipants.set(val, cnt);
  })
  console.log(allParticipants);
  //완주한 인원을 순차적으로 값에서 빼줍니다. 이미 확실하게 있는 인원이므로 has과정 생략
  completion.forEach((val) => {
    const cnt = allParticipants.get(val) - 1;
    allParticipants.set(val, cnt);
  })
  console.log(allParticipants);

  //마지막 남아있는 인원을 리턴합니다.
  for (let value of allParticipants.entries()) {
    if (value[1] !== 0)
      return value[0];
  }
}


console.log(solution(participant, completion));