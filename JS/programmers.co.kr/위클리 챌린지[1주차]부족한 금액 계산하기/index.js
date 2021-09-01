const price = 3;
const money = 20;
const count = 4;


const logic = (_price) => {
    let greedy = 0;
    for(let i=1;i<=_count;i++){
        greedy += i;
    }
    return greedy;
}

function solution() {
    var answer = -1;
    const greedy = logic(price);
    const result = greedy - (money/price);

    answer = result < 0 ? 0 : result * price;
    return answer;
}

console.log(solution());