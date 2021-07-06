let s = 'baabaa';

let makeRegex = function(){
    let alph = [];
    let i = "a".charCodeAt(0);
    let j = "z".charCodeAt(0);
    for (; i <= j; ++i) {
        let aa =  String.fromCharCode(i) + String.fromCharCode(i);
        alph.push(aa);
    }
    return alph.join('|');
}

function solution() {
    let answer = [];

    let regex = new RegExp( makeRegex(), 'g');
    console.log(regex);
    while(s.length>0)
    {
        console.log(s);
        if(!s.search(regex)){
            console.log(0);
            break;
        }
        else{
            console.log(1);
        }
        s = s.replace(regex, "");
        console.log(s);
    }
    console.log(s);
    return answer;
}


console.log(solution());