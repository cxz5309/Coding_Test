const n = 2;
const s = 1;
//--------------------------------------------------------

const makeNums = (n, s) => {
    const division = Math.floor(s/n);
    if(division === 0){
        return [-1];
    }
    const adderCnt = s % n;
    const noAdderCnt = n - adderCnt;

    const noAddArr = Array(noAdderCnt).fill(division);
    const addArr = Array(adderCnt).fill(division + 1);

    return [...noAddArr, ...addArr];
}

function solution() {
    let answer = [];
    answer = makeNums(n, s);

    return answer;
}


console.log(solution());