const play_time = "02:03:55"
const adv_time = "00:14:15"
const logs = ["01:20:15-01:45:14", "00:40:31-01:00:00", "00:25:50-00:48:29", "01:30:59-01:53:29", "01:37:44-02:02:30"]
//--------------------------------------------------------

function makeTimeStamp(timeTxt){
    const HMS = timeTxt.split(':').map(Number);
    return HMS[2] + (HMS[1] * 60) + (HMS[0] * 3600)
}
function makeTimeTxt(timeStamp){
    //console.log(timeStamp);
    // let zero = new Date(2020,0,1,9);
    // let dateTime = new Date((timeStamp * 1000) + Number(zero));
    // let h = ("00" + (dateTime.getHours() - 9)).slice(-2);
    // let m = ("00" + dateTime.getMinutes()).slice(-2);
    // let s = ("00" + dateTime.getSeconds()).slice(-2);
    let h = Math.floor(timeStamp/3600);
    h = ("00" + h).slice(-2);
    let m = Math.floor((timeStamp - (3600*h)) / 60);
    m = ("00" + m).slice(-2);
    let s = timeStamp - (3600*h) - (60*m);
    s = ("00" + s).slice(-2);
    return h + ":" + m + ":" + s
}

function solution() {
    var answer = '';
    let logsStartEnd = [];
    const playTime = makeTimeStamp(play_time);
    const advTime = makeTimeStamp(adv_time);
    // console.log(playTime);
    // console.log(advTime);
    //모든 이슈 시간 체크
    for(let i=0; i<logs.length; i++){
        const split = logs[i].split('-');
        logsStartEnd.push([makeTimeStamp(split[0]), makeTimeStamp(split[1])]);
    }
    //재생시간 전부 각각 초 배열에 삽입
    let times = new Array(playTime + 1).fill(0);
    logsStartEnd.forEach((val)=>{
        for(let i = val[0]; i<=val[1]; i++){
            times[i]++;
        } 
    })
    //광고시간만큼 합계 구하기
    let max = 0;
    let timeMin = 987654321
    let accZ = 0;
    for(let z = 0; z<= advTime; z++){
        accZ += times[z];
    }
    if(max < accZ){
        max = accZ;
        answer = 0;
    }
    logsStartEnd.forEach((val)=>{
        let acc = 0;
        let start = val[0];
        for(let j = start; j<= advTime + start; j++){
            acc += times[j];
        }
        if(max < acc){
            max = acc;
            answer = start;
        }
        else if(max === acc){
            if(timeMin>start){
                timeMin = start;
                answer = start;
            }
        }
    })
    answer = makeTimeTxt(answer);
    return answer;
}


console.log(solution());