const s = "abcdcba";

//--------------------------------------------------------

const logic = (str)=>{
    const length = str.length;
    const reverseStr = str.split("").reverse().join("");

    let max = 0;

    for(let i=0;i<length;i++){
        const charI = str.charAt(i);
        let charJ;

        for(let j=length-1;j>=i;j--){
            charJ = str.charAt(j);

            //왼쪽, 오른쪽 인덱스부터 시작해서 같은게 있으면 트리거
            if(charI == charJ){
                const len = j-i;
                const sub = str.substr(i, Math.floor(len/2) + 1);
                const revSub = reverseStr.substr(length-1 - j, Math.floor(len/2) + 1);
                // console.log(i + " " + j);
                console.log(sub + " " +  revSub);
                if(sub == revSub){
                    //console.log("!");
                    max = Math.max(max, len + 1);
                    break;
                }
            }
        }
    }
    return max;
}

function solution()
{
    var answer = 0;
    answer = logic(s);
    return answer;
}

console.log(solution());