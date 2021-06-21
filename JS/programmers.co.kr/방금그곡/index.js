const KEY = {
    'C':'A',
    'C#':'B',
    'D':'C',
    'D#':'D',
    'E':'E',
    'F':'F',
    'F#':'G',
    'G':'H',
    'G#':'I',
    'A':'G',
    'A#':'k',
    'B':'L'
}

function solution(m, musicinfos) {
    let answerList = [];
    let answer = '';
    let arr = [];
    let newM = [];
    // m을 새로운 문자열로 변환
    for (let i=0; i<m.length; i++){
        if(i<m.length-1 && m[i+1] === '#'){
            newM += KEY[m[i]+'#'];
            i++;
        }else{
           newM += KEY[m[i]];
        }
    }
    // musicinfos를 title, content 속성을 가진 객체의 배열로 변환한다.
    for (let i=0; i<musicinfos.length;i++){
        musicinfos[i] = musicinfos[i].split(',');
        // 총 몇분 재생했는 지 계산
        let time =0;
        let h1 = parseInt(musicinfos[i][0].split(':')[0]);
        let m1 = parseInt(musicinfos[i][0].split(':')[1]);
        let h2 = parseInt(musicinfos[i][1].split(':')[0]);
        let m2 = parseInt(musicinfos[i][1].split(':')[1]);
        if (m2>m1){
            time = 60*(h2-h1) + m2-m1;
        }else{
            time = 60*(h2-h1-1) + 60+m2-m1;
        }
        let totalContent = '';
        let musicContent = '';
        let str = musicinfos[i][3];
        // 노래의 음을 새로운 문자열로 변환
        for (let j=0; j<str.length; j++){
            if (j<str.length-1 && str[j+1]==='#'){
                musicContent += KEY[str[j]+'#'];
                j++;
            }else{
                musicContent += KEY[str[j]];
                
            }
        }
        // 재생된 음을 문자열로 생성
        for (let i=0; i<time; i++){
            totalContent += musicContent[i%musicContent.length];
        }
        arr.push({time:time, title:musicinfos[i][2],content:totalContent});
    }
    // newM을 포함한 문자열을 찾기
    for (let i=0; i<arr.length; i++){
        let content = arr[i].content;
        if(content.includes(newM)){
            answerList.push(arr[i]);
        }
    }
    // 없으면 이렇게 반환
    if(answerList.length===0){
        return "(None)";
    }
    // 있으면 time 순으로 정렬
    answerList.sort((a,b)=>{
        if (a.time>b.time){
            return -1;
        }else if (a.time <b.time){
            return 1;
        }else{
            return 0;
        }
    })
    // 첫 번째의 제목 반환
    answer = answerList[0].title;
    return answer;
}