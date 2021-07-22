const a = 5;
const b = 24;

//--------------------------------------------------------

const makeDayOfWeek = (a, b) =>{
    const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    date = new Date(Date.UTC(2016, a - 1, b));
    return week[date.getDay()];
}

function solution() {
    var answer;
    answer = makeDayOfWeek(a,b);
    return answer;
}

console.log(solution());