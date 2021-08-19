const s = "[{(()())((()))}]"
let stack = [];


const match = (a, b)=>{
    let result = (b === '{' ||  b === '(' ||  b === '[') 
        ? 'false' 
        : 'break';
    switch(a){
        case '{': if(b === '}') result = 'true';
            break;
        case '[': if(b === ']') result = 'true';
            break;
        case '(': if(b === ')') result = 'true';
            break;
    }
    return result;
}

const logic = function(s){
    let max = 0;

    for(let i = 0;i<s.length;i++){
        const sliceFirst = s.slice(0, i);
        const sliceNext = s.slice(i);
        const newS = sliceNext + sliceFirst;
        max = Math.max(max, f(newS));
    }
    return max;
}

const f = function (newS){
    let cnt = 0;

    for(let idx = 0;idx<newS.length;idx++){
        const char = newS.charAt(idx);

        // console.log('f');   
        // console.log(stack);
        if(stack.length>0){
            const matchResult = match(stack[stack.length-1], char);

            if(matchResult === 'true') stack.pop();
            else if(matchResult === 'false') stack.push(char);
            else return 0;
        }
        else{
            if(char === ')' ||char === ']' ||char === '}')
                return 0;
            stack.push(char);
        }
        // console.log('l');
        // console.log(stack);
        if(stack.length===0) cnt++;
    }
    return cnt;
}


function solution() {
    var answer = -1;
    answer = logic(s);
    return answer;
}

console.log(solution());