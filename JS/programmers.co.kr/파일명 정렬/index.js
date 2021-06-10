const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `F-15
F-16
F-18
F-12
F-1
F-5`
).split('\n');

const files = stdin;

let wordAtt = [];
let numIdx, wordIdx;

let split;
let head_, body_, tail_;

function solution() {
    var answer = [];

    for(let i = 0; i < files.length; i++){
        numIdx = files[i].search(/[0-9]+/);
        head_ = files[i].slice(0, numIdx);

        split = files[i].slice(numIdx);
        wordIdx = split.search(/[^0-9]+/);
        if(wordIdx > 5) wordIdx = 5;
        if(wordIdx === -1) wordIdx = split.length;

        body_ = split.slice(0, wordIdx);
        tail_ = split.slice(wordIdx);

        wordAtt.push({
            head: head_,
            body: body_,
            tail: tail_,
            idx: i
        })
    }
    
    
    wordAtt.sort((a, b)=>{
        if(a.head.toLowerCase() === b.head.toLowerCase()){
            if(Number(a.body) === Number(b.body)){
                return a.idx - b.idx;
            }
            return Number(a.body) - Number(b.body);
        }
        return a.head.toLowerCase() < b.head.toLowerCase() ? -1 : 1;
    })
    
    console.log(wordAtt);   
    wordAtt.forEach((att)=>{
        answer.push(att.head + att.body + att.tail);
    });
    return answer;
}

console.log(solution());