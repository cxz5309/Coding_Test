const expression = "100-200*300-500+20";

//--------------------------------------------------------

function makeMap(array){
    let op = new Map();
    op.set('+', [0,[]]);
    op.set('-', [0,[]]);
    op.set('*', [0,[]]);
    for(let i=0;i<array.length;i++){
        let tmpArr = [];
        switch(array[i]){
            case '+':
                tmpArr = op.get('+');
                tmpArr[0]++;
                tmpArr[1].push(i);
                op.set('+', tmpArr);
                break;
            case '-':
                tmpArr = op.get('-');
                tmpArr[0]++;
                tmpArr[1].push(i);
                op.set('-', tmpArr);    
                break;
            case '*':
                tmpArr = op.get('*');
                tmpArr[0]++;
                tmpArr[1].push(i);
                op.set('*', tmpArr);        
                break;
        }
    }
    return op;
}

function makeOpPriority(opNum, ops){
    if(opNum === 1){
        return [[ops[0]]];
    }
    if(opNum === 2){
        return [ops[0],ops[1]], [ops[1],ops[0]];
    }
    if(opNum === 3){
        return [[ops[0],ops[1],ops[2]],
                [ops[0],ops[2],ops[1]],
                [ops[1],ops[0],ops[2]],
                [ops[1],ops[2],ops[0]],
                [ops[2],ops[0],ops[1]],
                [ops[2],ops[1],ops[0]]]
    }
}

function solution() {
    var answer = 0;
    const expressionSplit = expression.split(/(\*|\-|\+)/)
    const op = makeMap(expressionSplit);    
    const opPriority = makeOpPriority(op.size, [...op.keys()]);
    
    let maximum = 0;
    //생성된 우선순위 조합의 개수만큼
    for(let i=0; i<opPriority.length; i++){      
        //구간배열 임시 구간에 복사  
        let tmpExSplit = expressionSplit.slice();
        for(let j=0; j<opPriority[i].length; j++){
            //현재 연산자 [연산자가 들어간 개수, [각각 연산자의 위치 idx]]
            const nowOp = op.get(opPriority[i][j]);
            //console.log(nowOp);
            for(let k=0; k<nowOp[0]; k++){
                const itor = nowOp[1][k];
                //console.log(itor);
                let tmpNe = 0;
                let tmpPo = 0;
                while(itor+tmpNe>0 && itor+tmpNe < tmpExSplit.length-1){
                    tmpNe--;
                    if(tmpExSplit[itor+tmpNe])
                        break;
                }
                while(itor+tmpPo>=0 && itor+tmpPo<tmpExSplit.length+1){
                    tmpPo++;
                    if(tmpExSplit[itor+tmpPo])
                        break;
                }
    
                //console.log(tmpNe);
                //console.log(tmpPo);
                //console.log('--');
                
                let exString = tmpExSplit[itor + tmpNe] + tmpExSplit[itor] + tmpExSplit[itor + tmpPo];
                //console.log(exString);
                resultNum = eval(exString);
                //console.log(resultNum);

                tmpExSplit[itor + tmpNe] = "";
                tmpExSplit[itor + tmpPo] = "";
                tmpExSplit[itor] = resultNum.toString();
            }
        }
        const result = Math.abs(Number(tmpExSplit.join('')));
        //console.log("max " + result);
        maximum = maximum < result ? result : maximum;
        answer = maximum;
    }
    return answer;
}


console.log(solution());