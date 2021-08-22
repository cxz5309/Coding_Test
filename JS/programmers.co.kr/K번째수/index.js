const array = [1, 5, 2, 6, 3, 7, 4]
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]	


const logic = (array, commands)=>{
    const i = commands[0];
    const j = commands[1];
    const k = commands[2];
    const sliceArr = array.slice(i-1, j);
    sliceArr.sort((a,b)=>a-b);
    return sliceArr[k-1];
}

function solution() {
    var answer = [];
    answer = commands.map((com)=>{
        return logic(array, com);
    });
    return answer;
}

console.log(solution());