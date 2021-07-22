// const n = 8;
// const k = 2;
// const cmd = ["D 2","C","U 3","C","D 4","C","U 2","Z","Z","U 1","C"]

// //--------------------------------------------------------

// const autoIdx = (arr, idx, num)=>{
//     while(num<0){
//         while(arr[idx]>0){
//             idx--;
//         }
//         num++;
//         idx--;
//     }
//     while(num>0){
//         while(arr[idx]>0){
//             idx++;
//         }
//         num--;
//         idx++;
//     }
//     if(idx<arr.length){
//         if(num === 0 && arr[idx]>0){
//             idx++;
//         }
//     }
//     if(idx>=arr.length){
//         idx = autoIdx(arr, idx, -1)
//     }
//     if(idx<0){
//         idx = 0;
//     }
//     return idx;
// }

// const query = (str, arr, idx, removeQ) =>{
//     let num;
//     switch(str.charAt(0)){
//         case 'D':
//             num = str.charAt(str.length - 1);
//             idx = autoIdx(arr, idx, num);
//             break;
//         case 'U':
//             num = str.charAt(str.length - 1);
//             idx = autoIdx(arr, idx, num * -1);
//             break;
//         case 'C':
//             arr[idx] = 1;
//             removeQ.push(idx);
//             idx = autoIdx(arr, idx, 0);
//             break;
//         case 'Z': 
//             arr[removeQ.pop()] = 0;
//             // console.log(removeQ);
//             // console.log(arr);
//             //console.log(idx);
//             break;
//         default:
//             break;
//     }
//     return idx;
// }

// function solution() {
//     var answer = '';

//     let arr = new Array(n);
//     arr.fill(0);
//     let idx = k;
//     let removeQ = [];

//     for(let val of cmd){
//         idx = query(val, arr, idx, removeQ);
//         console.log(idx);
//     }
//     // console.log(arr);
//     // console.log(removeQ);
//     // console.log(idx);
//     const resultArr = arr.map((val)=>{
//         if(val === 0){
//             return 'O';
//         }
//         else{
//             return 'X';
//         }
//     })
//     answer = resultArr.join("");
//     return answer;
// }

// console.log(solution());