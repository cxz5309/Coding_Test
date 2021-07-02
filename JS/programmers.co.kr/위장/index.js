const clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]


//--------------------------------------------------------

function solution() {
    let answer = 0;
    let wear = new Map();
    clothes.forEach((val)=>{
        let kinds = wear.get(val[1]);
        kinds = !kinds ? [val[0]] : kinds.concat([val[0]]);
        wear.set(val[1], kinds);
    })
    let combinations = 1;
    wear.forEach((val)=>{
        combinations *= (val.length + 1);
    })
    answer = combinations - 1;

    return answer;
}


console.log(solution());