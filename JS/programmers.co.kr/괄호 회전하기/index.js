const s = "[](){}";
let stack = [];

const correct = (a, b)=>{
    switch(a){
        case '[':
            if(b===']') return true;
            break;
        case '{':
            if(b==='}') return true;
            break;
        case '(':
            if(b===')') return true;
            break;
    }
    return false;
}

const pass = (a, b)=>{
    switch(a){
        case '[':
            if(b===']') return true;
            break;
        case '{':
            if(b==='}') return true;
            break;
        case '(':
            if(b===')') return true;
            break;
    }
    return false;
}

const logic = function(s){
    let cnt = 0;
    if(correct(s.charAt(0), s.charAt(s.length-1))){
        cnt++;
    }

    for(let i=0; i<s.length; i++){
        if(stack.length === 0){
            stack.push(s.charAt(i));
            continue;
        }
        console.log(stack[stack.length-1]);
        console.log(s.charAt(i));
        if(correct(stack[stack.length-1], s.charAt(i))){
            stack.pop();
            cnt++;
        }
        else{
            return -1;
        }
    }
    return cnt;
}

function solution() {
    var answer = -1;
    answer = logic(s);
    return answer;
}

console.log(solution());