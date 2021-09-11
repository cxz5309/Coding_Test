const num = 5;

// 1 2 3 4 5 6 7 8
// f t t t f t t t

function solution(num){
    let answer = (num)=>{
      if((num + 3) % 4 === 0)
        return false;;
      return true;
    }
    return answer(num);
}


console.log(solution(num));