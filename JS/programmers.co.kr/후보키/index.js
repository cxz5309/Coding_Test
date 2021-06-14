
const input = [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]];

//--------------------------------------------------------

// 조합 배열 생성
function comb(list, arr, idx, n, r, target){
    if (r===0){
        list.push(Object.assign([], arr));
    }else if (target === n){
        return ;
    }else{
        arr[idx] = target;
        comb(list, arr, idx + 1, n, r - 1, target + 1);
        comb(list, arr, idx, n, r, target + 1);
    }
}

function solution(relation) {
    var answer = 0;
    let relNum = relation.length;
    let tupleNum = relation[0].length;
    let combList = [];
    let KeyList = [];
    //전체 조합 생성
    for (let i=1; i<=tupleNum; i++){
        comb(combList, [], 0, tupleNum, i, 0);
    }
    console.log()
    //유일성 유지하기
    combList.forEach((arr) =>{
        const set = new Set();
        for (let i=0; i<relNum; i++){
            let tmp = ""
            arr.forEach((val)=>{
                tmp+=relation[i][val];
            });
            
            set.add(tmp);
        }
        // console.log(set);
        // console.log(set.size);
        // console.log(relNum);
        if(set.size == relNum){
            KeyList.push(arr);
        }
    })
    console.log(KeyList);
    
    //최소성 유지하기
    let exceptList = [];
    for(let i = 0;i<KeyList.length;i++){
        if(exceptList.includes(i))continue;

        for(let j = i + 1; j<KeyList.length; j++){
            if(exceptList.includes(j))continue;

            if(KeyList[i].reduce((pre,cur)=>{
                if(!KeyList[j].includes(cur)){
                    pre = false;
                }
                return pre;
            }, true)){
                exceptList.push(j);
            }
        }
    }
    //console.log(exceptList);
    answer = KeyList.length-exceptList.length;
    return answer
}

console.log(solution(input));