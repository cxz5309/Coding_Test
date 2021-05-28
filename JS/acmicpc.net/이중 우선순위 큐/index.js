const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `2
7
I 16
I -5643
D -1
D 1
D 1
I 123
D -1
9
I -45
I 653
D 1
I -642
I 45
I 97
D 1
D -1
I 333`
).split('\n');

var testCase;
var calculateNum = [];
var lineSplit;
var op = [];
var nums = [];
let shiftNum = 0;
let except = new Array(1000001).fill(false);

testCase = Number(stdin[shiftNum]);
shiftNum++;

class priorityQueue{
    heap = [];
    count = 0;
    qType = 'Max';

    init(){
        while(this.count>0){
            this.pop_pq();
        }
    }

    opInequ(num1, num2){
        switch(this.qType){
            case "Max" :
                if(num1 > num2){
                    return true;
                }
                return false;
            case "Min" :
                if(num1 < num2){
                    return true;
                }
                return false;
        }
    }

    opWithEq(num1, num2){
        switch(this.qType){
            case "Max" :
                if(num1 >= num2){
                    return true;
                }
                return false;
            case "Min" :
                if(num1 <= num2){
                    return true;
                }
                return false;
        }
    }

    push_pq(item){
        this.count++;
        let now = this.count; // 마지막 노드를 가리킨다.
        //인터넷에서 찾은 스왑 없이 삽입하는 방법
        while(this.opWithEq(item, this.heap[Math.floor(now/2)]) && now != 1){
            this.heap[now] = this.heap[Math.floor(now/2)]
            now = Math.floor(now/2);
        }
        this.heap[now] = item; 
    }

    pop_pq(){

        while(except[this.heap[1]]){
            except[this.heap[1]] = false;
            this.heap.shift();
            this.count--;
        }
        let remove = this.heap[1];
        let temp = this.heap.pop();
        this.heap[1] = temp; 
        this.count--;

        let parent = 1; 
        let child = 2;
        //이것도 스왑 없이 자식을 부모에 대입만 하다가 최종 위치에 temp를 대입한다
        while(child <= this.count){
            // 두 자식중 큰 노드와 부모노드랑 비교 
            if(this.opInequ(this.heap[child + 1], this.heap[child]) && child < this.count){
                child += 1; 
            }

            if(this.opWithEq(temp, this.heap[child])) {
                break; // 만약 자식 노드와 비교해서 크다면 해당 반복문 멈춤 
            }
            this.heap[parent] = this.heap[child]; 
            parent = child;
            child *= 2;
        }
        this.heap[parent] = temp;
        
        // console.log(this.heap);
        // console.log(this.qType);
        // console.log(this.count);
        return remove;
    }
}

    var maxQ = new priorityQueue();
    maxQ.qType = "Max";
    var minQ = new priorityQueue();
    minQ.qType = "Min";

for(let i=0; i<testCase; i++){
    calculateNum.push(Number(stdin[shiftNum]));
    shiftNum++;

    op = [];
    nums = [];

    for(let j = 0; j < calculateNum[i]; j++){
        lineSplit = stdin[shiftNum].split(' ');
        shiftNum++;

        op.push(lineSplit[0]);
        nums.push(Number(lineSplit[1]));
    }

//--------------------------------------------------------
    maxQ.init();
    minQ.init();

    for(let j = 0; j < calculateNum[i]; j++){
        //console.log(op[j] + " " + nums[j]);
        if(op[j] === 'I'){
            maxQ.push_pq(nums[j]);
            minQ.push_pq(nums[j]);
        }
        else if(op[j] === 'D'){
            if(nums[j] == 1){
                if(maxQ.count <= 0){
                    minQ.init();
                }
                else{
                    var tmp = maxQ.pop_pq();
                    //console.log("pop " + tmp);
                    except[tmp] = true;
                }
            }
            else if(nums[j] == -1){
                if(minQ.count <= 0){
                    maxQ.init();
                }
                else{
                    var tmp = minQ.pop_pq();
                    //console.log("pop " + tmp);
                    except[tmp] = true;
                }
            }
        }
    }
    if(maxQ.count == 0 || minQ.count == 0){
        console.log("EMPTY");
    }
    else{
        console.log(maxQ.pop_pq() + " " + minQ.pop_pq());
    }
}
