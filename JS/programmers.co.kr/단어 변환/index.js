function wordChk(nowW, targetW){
    let cnt = 0;
    for(let i=0;i<nowW.length;i++){
        if(nowW.charAt(i) !== targetW.charAt(i))
        cnt++;
    }
    if(cnt === 1)
        return true;
    return false;
}

function BFS(begin, target, words){
    let unVisited = [];//[[현재 단어, 카운트], ...]
    let visited = [];//[방문한 단어, ...]
    unVisited.push([begin, 0]);
    visited.push(begin);

    while(unVisited.length>0){
        //맨앞 queue pop하여 저장
        let tmp = unVisited.shift();
        
        //console.log(visited)
        //조건체크
        if(tmp[0] === target){
            return tmp[1];
        }
        
        //words에서 방문하지 않은 다음 단어들 추리기
        let nextWords = words.filter((val)=>{
            if(!visited.includes(val))
                return true;
            return false;
        });
        let nextCnt = tmp[1] + 1;
        //다음 단어 제한사항 체크 후 푸시
        nextWords.forEach((nextWord)=>{
            if(!wordChk(tmp[0], nextWord)){
                return;
            }
            unVisited.push([nextWord, nextCnt]);
            if(!visited.includes(nextWord))
                visited.push(nextWord);
        })
    }
    return 0;
}


function solution(begin, target, words) {
    var answer = 0;
    if(!words.includes(target))
        return 0;
    answer = BFS(begin, target, words)
    return answer;
}