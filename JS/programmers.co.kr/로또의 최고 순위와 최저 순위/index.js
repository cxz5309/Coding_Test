const lottos = [45, 4, 35, 20, 3, 9]	
const win_nums =[20, 9, 3, 45, 4, 35]	

function solution() {
    var answer = [];
    let score = 7;
    let zero = 0;
    lottos.forEach((val)=>{
        if(val === 0) zero++;
        if(win_nums.includes(val))score--;
    })
    const min = score-zero>6 ? 6 : score-zero;
    const max = score>6 ? 6 : score;
    answer = [min, max]
    return answer;
}


console.log(solution());