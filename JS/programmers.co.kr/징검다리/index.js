const distance = 25;
let rocks = [2,14,11,21,17];
const n = 2;


const BinarySearch=(rocks, n)=>{
    let start=0;
    let end=rocks[rocks.length-1];
    
    while(start<=end){
        let mid=Math.floor((start+end)/2);
        let count=0;
        let now=0;
        
        for(let i=1;i<rocks.length;i++){
            if(rocks[i]-now<mid){
                count++;   
            }else{
                now=rocks[i];
            }
        }
        
        if(count>n){
            end=mid-1;
        }else{
            start=mid+1;
        }
    }
    return end;
}

function solution() {
    let answer = 0;
    rocks=[0,...rocks.sort((a,b)=>a-b),distance];
    
    answer = BinarySearch(rocks, n);
    return answer;
}

console.log(solution());