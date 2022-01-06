const expression = "100-200*300-500+20";

//--------------------------------------------------------

function makeMap(array) {
  let op = new Map();
  op.set('+', [0, []]);
  op.set('-', [0, []]);
  op.set('*', [0, []]);
  for (let i = 0; i < array.length; i++) {
    let tmpArr = [];
    switch (array[i]) {
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

function makeOpPriority(opNum, ops) {
  if (opNum === 1) {
    return [[ops[0]]];
  }
  if (opNum === 2) {
    return [ops[0], ops[1]], [ops[1], ops[0]];
  }
  if (opNum === 3) {
    return [[ops[0], ops[1], ops[2]],
    [ops[0], ops[2], ops[1]],
    [ops[1], ops[0], ops[2]],
    [ops[1], ops[2], ops[0]],
    [ops[2], ops[0], ops[1]],
    [ops[2], ops[1], ops[0]]]
  }
}

function solution() {
  var answer = 0;
  const expressionSplit = expression.split(/(\*|\-|\+)/)
  //현재 연산자 [연산자가 들어간 개수, [각각 연산자의 위치 idx]]
  const op = makeMap(expressionSplit);
  const opNum = op.size;
  const opPriority = makeOpPriority(opNum, [...op.keys()]);

  let maximum = 0;
  //생성된 우선순위 조합의 개수만큼
  for (let i = 0; i < opPriority.length; i++) {
    //구간배열 임시 구간에 복사  
    let tmpExSplit = expressionSplit.slice();
    for (let j = 0; j < opPriority[i].length; j++) {
      //nowOp = 현재 우선으로 처리할 연산자 정보
      const nowOp = op.get(opPriority[i][j]);
      for (let k = 0; k < nowOp[0]; k++) {
        const itor = nowOp[1][k];
        let ne = 0;
        let po = 0;
        while (itor + ne > 0 && itor + ne < tmpExSplit.length - 1) {
          ne--;
          if (tmpExSplit[itor + ne])
            break;
        }
        while (itor + po >= 0 && itor + po < tmpExSplit.length + 1) {
          po++;
          if (tmpExSplit[itor + po])
            break;
        }

        let exString = tmpExSplit[itor + ne] + tmpExSplit[itor] + tmpExSplit[itor + po];
        //String 수식 -> 실제 연산
        resultNum = eval(exString);

        tmpExSplit[itor + ne] = "";
        tmpExSplit[itor + po] = "";
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