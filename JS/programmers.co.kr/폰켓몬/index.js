const nums = [3,3,3,2,2,2]

//--------------------------------------------------------

const logic = (nums)=>{
    const n = Math.floor(nums.length/2);
    let dic = new Map();
    for(let val of nums){
        let cnt = 1;
        if(dic.has(val)) cnt += dic.get(val);
        dic.set(val, cnt);
    }
    console.log(dic);
    const find = dic.size;
    console.log(n);
    console.log(find);
    return (n<find) ? n : find;
}

function solution() {
    var answer = 0;
    answer = logic(nums);
    return answer;
}


console.log(solution());