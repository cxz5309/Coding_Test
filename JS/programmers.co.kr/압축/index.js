var msg = `ABABABABABABABAB`;

//--------------------------------------------------------

function solution(msg) {
    let answer = [];
    let msgLen = msg.length;

    let dictionary = new Map();
    let ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let dicLast = 1;

    //문자를 키로, 숫자를 값으로 하여 문자 검색 속도 향상?
    for (let i = 1; i < ABC.length + 1; i++) {
        dictionary.set(ABC.charAt(i - 1), i.toString());
        dicLast++;
    }

    let i = 0;
    while (i < msgLen) {
        let subLen = 1;
        let prev = 0;
        let dicNum = -1;
        //console.log("--------------")
        while (true) {
            //console.log("i " + i + " subLen " + subLen);
            //사전에서 찾기
            let msgSlice = msg.substr(i, subLen++);
            //console.log(msgSlice);
            if (dictionary.has(msgSlice)) {
                dicNum = dictionary.get(msgSlice);
                //console.log(dicNum);
                if (i + subLen > msgLen) {
                    break;
                }
            } else //사전에 없는 텍스트일 경우
            {
                prev = -1;
                dictionary.set(msgSlice, (dicLast++).toString());
                //console.log("set " + msgSlice + " " + (dicLast - 1));
                break;
            }
        }
        answer.push(dicNum);
        i += subLen - 1 + prev;

        subLen = 1;
    }
    return answer;
}


console.log(solution(msg).join("\n"));