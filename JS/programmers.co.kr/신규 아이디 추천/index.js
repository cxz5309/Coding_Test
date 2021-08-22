const new_id = "...!@BaT#*..y.abcdefghijklm....";


const parse1 = (str)=>{
    return (str).toLowerCase();
}
const parse2 = (str)=>{
    return (str).replace(/[^\w-_.]/g, '');
}
const parse3 = (str)=>{
    return (str).replace(/[.]+/g, '.');
}
const parse4 = (str)=>{
    return (str).replace(/^[.]|[.]$/g, '');
}
const parse5 = (str)=>{
    return (str) = str === '' ? 'a' : str
}
const parse6 = (str)=>{
    return (str).slice(0, 15);
}
const parse7 = (str)=>{
    while(str.length<3){
        str += str.charAt(str.length-1);
    }
    return (str).slice(0, 15);
}


const logic = (new_id)=>{
    const p1 = parse1(new_id);
    console.log(p1);
    const p2 = parse2(p1);
    console.log(p2);
    const p3 = parse3(p2);
    console.log(p3);
    const p4 = parse4(p3);
    console.log(p4);
    const p5 = parse5(p4);
    console.log(p5);
    const p6 = parse6(p5);
    console.log(p6);
    const p7 = parse7(p6);
    console.log(p7);
    return p7;
}

function solution() {
    var answer = '';
    answer = logic(new_id);
    return answer;
}

console.log(solution());