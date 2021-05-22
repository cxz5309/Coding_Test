function solution(msg) {
    let answer = [];
    let msgLen = msg.length;

    let dictionary = new Map();
    let ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let dicLast = 1;

    //���ڸ� Ű��, ���ڸ� ������ �Ͽ� ���� �˻� �ӵ� ���?
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
            //�������� ã��
            let msgSlice = msg.substr(i, subLen++);
            //console.log(msgSlice);
            if (dictionary.has(msgSlice)) {
                dicNum = dictionary.get(msgSlice);
                //console.log(dicNum);
                if (i + subLen > msgLen) {
                    break;
                }
            }
            else //������ ���� �ؽ�Ʈ�� ���
            {
                prev = -1;
                dictionary.set(msgSlice, (dicLast++).toString());
                //console.log("set " + msgSlice + " " + (dicLast - 1));
                break;
            }
        }
        answer.push(Number(dicNum));
        i += subLen - 1 + prev;

        subLen = 1;
    }
    return answer;
}