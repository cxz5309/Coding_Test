let s = "{{4,2,3},{3},{2,3,4,1},{2,3}}"	

function solution() {
    var answer = [];
    const arr1 = s.slice(1, s.length-1).split('},');
    const arr2 = arr1.map((val)=>{
        return val.replace(/[{}]/g, '').split(',');
    });
    arr2.sort((a, b)=>{
        return a.length - b.length;
    });
    let dic = new Map();
    arr2.forEach((val, idx)=>{
        val.forEach((element)=>{
            if(dic.has(element)) return;
            dic.set(Number(element), idx);
        })
    })
    console.log(dic);
    answer = Array.from(dic.keys());
    return answer;
}

console.log(solution());