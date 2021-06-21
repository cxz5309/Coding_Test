const n = 6;
const times = [7, 10];

function binarySearch(n, times){
    let left = 0;
    let right = n * times[times.length -1];

    let min = right; 
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let count = 0
        console.log(left + " " + right);
        times.forEach(value => {
            // 심사대 하나당 일정 시간(mid)동안 몇명의 인원 심사하는지
            count += Math.floor(mid / value); 
            console.log(count);
            if(count >= n) {
                //최소의 시간 반환
                min = Math.min(mid, min);
            };
        });
        if (count >= n) { 
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return min;
}

function solution(n, times) {
    var answer = 0;
    times.sort((a, b) => {
        return a - b;
    }); 
    
    answer = binarySearch(n, times);
    return answer;
}

console.log(solution(n, times));