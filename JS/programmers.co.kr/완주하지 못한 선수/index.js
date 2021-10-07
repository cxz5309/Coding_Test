const participant = ["mislav", "stanko", "mislav", "ana"]
const completion = ["stanko", "ana", "mislav"]


function solution(participant, completion) {
  let allParticipants = new Map();

  participant.forEach((val) => {
    const cnt = allParticipants.has(val) ? allParticipants.get(val) + 1 : 1;
    allParticipants.set(val, cnt);
  })
  completion.forEach((val) => {
    const cnt = allParticipants.get(val) - 1;
    allParticipants.set(val, cnt);
  })
  for (let value of allParticipants.entries()) {
    if (value[1] !== 0)
      return value[0];
  }
}


console.log(solution(participant, completion));