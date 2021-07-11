const d	= [1,3,2,5,4];
const budget = 9;

function solution(d, budget) {
    var answer = 0;
    d.sort((a,b)=>{
        return a-b;
    });
    let cnt = 0;
    for(let i=0;i<d.length; i++){
        budget-=d[i];
        if(budget<0)
           break;
        cnt++;
    };
    answer = cnt;
    return answer;
}


console.log(solution(d, budget));