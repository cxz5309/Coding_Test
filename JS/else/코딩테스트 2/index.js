const pattern = '가나다라'
const str = '바나나 드래곤 바나나 드래곤'

function solution(pattern, str) {
    let patternMap = {};
    let strSplit = str.split(' ');
    let answer = (pattern, strSplit)=>{
      for(let i=0;i<4;i++){
        if(patternMap.hasOwnProperty(pattern[i]) && patternMap[pattern[i]] !== strSplit[i])
          return false;
        if(Object.values(patternMap).includes(strSplit[i]) && !patternMap.hasOwnProperty(pattern[i]))
          return false;
        patternMap[pattern[i]] = strSplit[i];
        // console.log(patternMap);
      }
      return true;
    }
    return answer(pattern, strSplit);
}


console.log(solution(pattern, str));