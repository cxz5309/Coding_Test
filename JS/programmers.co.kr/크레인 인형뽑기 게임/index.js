let board = [[1,0,0,0,0],[1,0,1,0,3],[1,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
const moves = [1,5,3,5,1,2,1,4]
//--------------------------------------------------------


const play = function(board, moves){
    let stack = [];
    let cnt = 0;
    const end = board.length - 1;

    for(let x of moves){
        x--;
        let y = end;
        while(board[y][x] !== 0){
            y--;
            if(y < 0) break;
        }
        if(y === end) continue;
           
        const top = stack[stack.length-1];
        const now = board[y+1][x];
        board[y+1][x] = 0;

        if(top === now){
            stack.pop();
            cnt += 2;
        }
        else{
            stack.push(now);
        }
    }
    return cnt;
}


function solution() {
    var answer = 0;
    answer = play(board, moves);
    return answer;
}

console.log(solution());