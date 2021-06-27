let jobs = [[0, 3], [1, 9], [2, 6]];

function solution() {
    let answer = 0;
    let order = jobs.map(([a, b], idx) =>{
        return [a, idx];
    })
    order.sort((a,b)=>{
        return a[0] - b[0];
    })
    let prev = 0;
    let sum = 0;
    let allTime = 0;
    let heap = [];
    heap.push(order.shift());
    let idx;
    while(heap.length>0){
        idx = heap[0][1];
        while(order.shift()[1])
        if(jobs[idx][0]>prev){

        }
    }

    order.forEach((val)=>{
        if(jobs[val[1]][0] > prev){
            sum += jobs[val[1]][0] - prev
        }
        sum += jobs[val[1]][1];
        allTime += (sum - jobs[val[1]][0]);
        prev = sum;
        // console.log(sum);
        // console.log(allTime);
    })
    answer = allTime / jobs.length;
    return answer;
}


console.log(solution());