const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `13
0
1
2
0
0
3
2
1
0
0
0
0
0`
).split('\n');
 

var testCase;
var query = [];

testCase = Number(stdin[0]);
stdin.shift();

for(let i=0; i<testCase; i++){
    query.push(Number(stdin[i]));
}


//--------------------------------------------------------



class priorityQueue{
    heap = [];
    count = 0;

    push_pq(num){
        console.log(this.heap);
        this.heap.push(num);//맨 마지막(heap[count])에 넣기

        if(this.heap[this.count !== num]){
            console.log("오류");
            return;
        }

        let now = this.count;
        let parent = Math.floor((this.count - 1)/2);
        this.count++;

        if(now == 0){
            return;
        }
        var ten = 0;
        while(this.heap[now] > this.heap[parent])//부모가 현재 들어온것보다 큰 상태(정상) 까지 올린다
        {
            console.log("push---------------")
            console.log("now" + now);
            console.log("now" + this.heap[now]);
            console.log("parent" + parent);
            console.log("parent" + this.heap[parent]);
            console.log("count" + this.count);
            console.log("---------------")
            if(ten++ == 10){
                return;
            }
            [this.heap[now] , this.heap[parent]] = [this.heap[parent], this.heap[now]];
        }
    }

    pop_pq(){
        console.log(this.heap);
        if(this.count == 0){
            return 0;
        }
        this.count--;

        let now = 0;
        let left = 1;
        let right = 2;
        let priority = this.heap[now];

        this.heap[now] = this.heap.pop();
        let target = now;

        var ten = 0;

        //맨 뒤 아이템을 맨 위로 올리고 정상 상태까지 내린다
        while(left < this.count){
            console.log("pop---------------")
            console.log("now" + now);
            console.log("now" + heap[now]);
            console.log("target" + target);
            console.log("target" + heap[target]);
            console.log("count" + this.count);
            console.log("---------------")
            if(ten++ == 10){
                return 999;
            }

            if(this.heap[target]<this.heap[left]) target = left;
            if(this.heap[target]<this.heap[right] && right<this.count) target = right;
            if(target == now) break;
            else{
                [this.heap[now], this.heap[target]] = [this.heap[target], this.heap[now]];
                now = target;
                left = (now * 2) + 1;
                right = (now * 2) + 2;
            }
        }
        return priority;
    }
}

function solution(){
    let answer = [];
    pq = new priorityQueue();
    pq.count = 0;
    for(var i = 0; i < testCase; i++){
        console.log(query[i] + "~~~~~~~~~~~`");
        if(query[i] === 0){
            var a = pq.pop_pq();
            console.log(a);
            answer.push(a);
            continue;
        }
        pq.push_pq(query[i]);
    }

    return answer;
}


console.log(solution().join("\n"));