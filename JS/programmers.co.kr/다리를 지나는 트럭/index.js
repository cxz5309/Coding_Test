const bridge_length = 100;
const weight = 100;
const truck_weights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]

//문제를 예시가 없으면 못풀게 만들어놨다.

let weightQueue = [];
let timeQueue = [];
let time = 1;
let truckIdx = 0;

const chkPush = (weight, truck_weight) => {
  const sum = weightQueue.reduce((prev, curr) => {
    return prev + curr;
  }, 0)

  if (sum + truck_weight > weight) {
    return false;
  }
  return true;
}

const truckPush = (bridge_length, truck_weight) => {
  weightQueue.push(truck_weight);
  timeQueue.push(bridge_length);
  // console.log(weightQueue);
  // console.log(timeQueue);
  truckIdx++;
}

const timeRun = () => {
  time++;
  timeQueue = timeQueue.map((val) => val - 1);
  if (timeQueue[0] === 0) {
    weightQueue.shift();
    timeQueue.shift();
  }
}

function solution(bridge_length, weight, truck_weights) {
  while (true) {
    // console.log('time : ' + time);
    if (truck_weights.length > 0 && chkPush(weight, truck_weights[0])) {
      truckPush(bridge_length, truck_weights[0]);
      truck_weights.shift();
    }
    timeRun();
    if (truck_weights.length === 0 && weightQueue.length === 0 && timeQueue.length === 0)
      break;
  }
  return time;
}


console.log(solution(bridge_length, weight, truck_weights));