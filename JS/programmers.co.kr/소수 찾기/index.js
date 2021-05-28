const nums = [];
let check = [];
let sosu = Array(10000000).fill(-1);
let cnt = 0;

//소수인지 판별하기
//아마 에라토스테네스의 체 써야할듯
//숫자범위가 크므로 해쉬 검색 써야할듯
function makeSosu(){
    sosu[0] = 0; sosu[1] = 0;
    for(let testNum = 2; testNum < 10000000; testNum++){
        let tmp = testNum;
        
        if(sosu[tmp] !== -1){
            continue;
        }
        sosu[tmp] = 1;
        while(tmp < 10000000){
            tmp += testNum;

            if(tmp>10000000){
                break;
            }

            sosu[tmp] = 0;
        }
    }   
}

function isSosu(num){
    return sosu[num];
}


function DFS(nums, prev, now, idx, depth){
    let tmp = prev + "" + now;
    check[idx] = true;

    if(depth >= nums.length){
        return;
    }
    if(isSosu(Number(tmp))){
        //console.log("issosu " + tmp);
        sosu[Number(tmp)] = 0;
        cnt++;
    }
    //console.log("prev " + prev + " now " + now + " idx " + idx);
    //console.log(tmp);
    for(let i = 0; i<nums.length; i++){
        if(check[i] === true){
            continue;
        }
        DFS(nums, Number(tmp), nums[i], i, ++depth);
        check[i] = false;
    }
}

function solution(numbers) {
    var answer = 0;
    const nums = numbers.split('').map(Number);

    makeSosu();
    for(let i = 0; i < nums.length; i++){
        check = Array(nums.length).fill(false);
        DFS(nums, 0, nums[i], i);
    }
    answer = cnt;
    return answer;
}