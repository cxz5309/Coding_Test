let s = 'cdcd';

// let makeRegex = function(){
//     let alph = [];
//     let i = "a".charCodeAt(0);
//     let j = "z".charCodeAt(0);
//     for (; i <= j; ++i) {
//         let aa =  String.fromCharCode(i) + String.fromCharCode(i);
//         alph.push(aa);
//     }
//     return alph.join('|');
// }

function solution() {
    var answer = -1;

    let stack = [];
    for(let i = 0;i<s.length;i++){
        stack.push(s.charAt(i));
        // console.log(s.charAt(i));
        if(stack.length>=2){
            //마지막 2개 아이템이 같을 경우 pop
            if(stack[stack.length-1] === stack[stack.length-2])
            {
                // console.log(stack[stack.length-1]);
                // console.log(stack[stack.length-2]);
                stack.pop();
                stack.pop();
            }
        }
    }
    answer = stack.length>0 ? 0 : 1;
    return answer;
}


console.log(solution());