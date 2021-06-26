const tc = ["INT", "INT", "BOOL", "SHORT", "LONG"]
//--------------------------------------------------------
function solution(param0) {
    let answer = [];
    let size = 0;
    for (let i = 0; i < tc.length; i++) {
        let adder;
        let dot = 1;
        let dots;

        switch (tc[i]) {
            case "BOOL":
                adder = 1;
                dot = 0;
                break;
            case "SHORT":
                adder = 2;
                break;
            case "FLOAT":
                adder = 4;
                break;
            case "INT":
                adder = 8;
                dot = 0;
                break;
            case "LONG":
                adder = 16;
                dot = 0;
                break;
        }
        if((answer.length % 9) > (adder + dot)){
            for(let j = 0;j < adder; j++){
                answer = answer + '#'
            }
            answer = answer + '.';
        }
        else{
            dots = 8 - (answer.length % 9);
            if(dots<8){
                for(let j = 0; j<dots;j++){
                    answer = answer + '.';
                }
            }
            for(let j = 0; j < adder; j++){
                if(j === 9){
                    answer = answer + ','
                }
                answer = answer + '#'
            }
        }
        answer = answer + ',';
        size += adder;
    }

    if(size>128){
        answer = "HALT";
    }
    return answer;
}


console.log(solution());