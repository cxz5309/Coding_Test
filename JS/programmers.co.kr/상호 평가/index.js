let scores = [[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]]	;

const makeScore = (scores)=>{
    const myScores = scores.map((score, scoreIdx)=>{
        const myScore = scores.map((val)=>{
            return val[scoreIdx];
        })
        const myself = myScore[scoreIdx];
        myScore.sort((a,b)=>{
            return a-b;
        });
        if(myScore[0] == myself){
            if(myScore[0] != myScore[1])
                myScore.shift();
        }
        if(myScore[myScore.length-1] == myself){
            if(myScore[myScore.length-1] != myScore[myScore.length-2])
                myScore.pop();
        }
        return myScore;
    })
    return myScores;
}

const makeGrade = (scores)=>{
    const evals = scores.map((score)=>{
        return score.reduce((sum,val)=>{
            return sum + val;
        }) / score.length;
    })
    
    const grades = evals.map((val)=>{
        switch(Math.floor(val/10)){
            case 10:
            case 9:
                return 'A';
            case 8:
                return 'B';
            case 7:
                return 'C';
            case 6:
            case 5:
                return 'D';
            default:
                return 'F';
        }
    })
    return grades;
}

const logic = (scores)=>{
    const myScores = makeScore(scores);
    const myGrades = makeGrade(myScores);
    // console.log(myScores);
    // console.log(myGrades);
    return myGrades.join('');
}

function solution() {
    var answer = '';
    answer = logic(scores);
    return answer;
}

console.log(solution());