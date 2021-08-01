const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];


//--------------------------------------------------------

const chat = function (record){

    let queue = [];
    let matching = new Map();
    for(const query of record){
        const tmp = query.split(' ');
        const op = tmp[0];
        const uid = tmp[1];
        const name = tmp[2];

        switch(op){
            case 'Enter':
                matching.set(uid, name);
                queue.push([1, uid]);
                break;
            case 'Leave':
                queue.push([0, uid]);
                break;
            case 'Change':
                matching.set(uid, name);
                break;     
            default : 
                console.log('error');
                break;       
        }
    }
    let msgArr = [];
    for(let tmp of queue){
        const inOut = tmp[0] === 1 ? "님이 들어왔습니다." : "님이 나갔습니다.";
        const name = matching.get(tmp[1]);
        msgArr.push(name.concat(inOut));
    }
    return msgArr;
}

function solution() {
    var answer = chat(record);
    
    return answer;
}


console.log(solution());