const s = "1zerotwozero3"

//--------------------------------------------------------

function solution() {
    var answer = 0;
    let result = s;
    result = result.replace(/one/g, "1");
    result = result.replace(/two/g, "2");
    result = result.replace(/three/g, "3");
    result = result.replace(/four/g, "4");
    result = result.replace(/five/g, "5");
    result = result.replace(/six/g, "6");
    result = result.replace(/seven/g, "7");
    result = result.replace(/eight/g, "8");
    result = result.replace(/nine/g, "9");
    result = result.replace(/zero/g, "0");
    answer = +result;
    return answer;
}


console.log(solution());