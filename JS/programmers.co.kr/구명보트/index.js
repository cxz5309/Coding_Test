let people = [70, 50, 80, 10, 10, 10, 10, 10, 10];
let limit = 100;
//--------------------------------------------------------

function solution() {
    let answer;
    let cnt = 0;
    people.sort((a, b) => {
        return a - b;
    })

    let startIdx = 0;
    let endIdx = people.length - 1;

    while(startIdx <= endIdx){
        if(endIdx === startIdx){
            cnt++;
            break;
        }
        if(people[startIdx] + people[endIdx] > limit){
            endIdx--;
            cnt++;
        }
        else{
            startIdx++;
            endIdx--;
            cnt++;
        }
    }

    answer = cnt;
    return answer;
}


console.log(solution());