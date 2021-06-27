const play_time = "02:03:55"
const adv_time = "00:14:15"
const logs = ["01:20:15-01:45:14", "00:40:31-01:00:00", "00:25:50-00:48:29", "01:30:59-01:53:29", "01:37:44-02:02:30"]
//--------------------------------------------------------
let HMS = [];
function makeTimeStamp(timeTxt){
    HMS = timeTxt.split(':')
    return HMS[2]*1 + (HMS[1] * 60) + (HMS[0] * 3600)
}
let h, m, s;
function makeTimeTxt(timeStamp){
    h = Math.floor(timeStamp/3600);
    m = Math.floor((timeStamp - (3600*h)) / 60);
    s = timeStamp - (3600*h) - (60*m);

    if(h.length<2) h = "0" + h;
    if(m.length<2) m = "0" + m;
    if(s.length<2) s = "0" + s;
    // h = ("00" + h).slice(-2);
    // m = ("00" + m).slice(-2);
    // s = ("00" + s).slice(-2);
    return h + ":" + m + ":" + s
}


function solution() {
    var answer = '';
    //let logsStartEnd = [];
    let logsStart = [];
    let logsEnd = [];
    const playTime = makeTimeStamp(play_time);
    const advTime = makeTimeStamp(adv_time);
    // console.log(playTime);
    // console.log(advTime);
    //모든 이슈 시간 체크
    let startStamp;
    let endStamp;

    let times = new Array(playTime);
    for(let i=0; i<playTime; i++){
        times[i] = 0;
    }

    for(let i=0; i<logs.length; i++){
        const split = logs[i].split('-');
        startStamp = makeTimeStamp(split[0]);
        endStamp = makeTimeStamp(split[1]);

        times[startStamp]++;
        times[endStamp]--;
        //logsStartEnd.push([startStamp, endStamp]);
        // logsStart.push(startStamp);
        // logsEnd.push(endStamp);
    }
    //재생시간 전부 각각 초 배열에 삽입
    
    // for(let i=0;i<logs.length;i++){
    //     for(let j=logsStart[i]; j<=logsEnd[i]; j++){
    //         times[j + 1]++;
    //     }
    // }
    // logsStartEnd.forEach((val)=>{
    //     for(let i = val[0]; i<=val[1]; i++){
    //         times[i + 1]++;
    //     } 
    // })
    //dp형식으로 변경(구간합 저장)
    for(let i=1; i<=playTime; i++){
        times[i] += times[i-1];
    }
    for(let i=1; i<=playTime; i++){
        times[i] += times[i-1];
    }
    //광고시간만큼 합계 구하기
    let max = 0;
    //let timeMin = 987654321;
    let acc = times[advTime-1];
    for(let i=playTime - 1; i>=advTime-1; i--){
        acc = times[i] - times[i - advTime];
        
        if(max <= acc){
            max = acc;
            //timeMin = i;
            answer = i - advTime + 1;
        }
    }
    
    answer = makeTimeTxt(answer);
    return answer;
}

console.log(solution());