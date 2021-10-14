const genres = ["classic", "pop", "classic", "classic", "pop"]
const plays = [500, 600, 150, 800, 2500]


function solution(genres, plays) {
  var answer = [];
  let allMap = new Map();


  genres.forEach((val, idx) => {
    //현재 노래의 플레이 숫자
    const thisPlays = plays[idx];

    const genreMap = new Map();
    //장르 전체 카운트에 이미 있는지 확인 후 전체 카운트에 추가해준다.
    const cnt = allMap.has(val) ? allMap.get(val).get('total') + thisPlays : thisPlays;
    genreMap.set('total', cnt);
    //각각 수록곡을 리스트에 푸시
    let list = allMap.has(val) ? allMap.get(val).get('list') : [];
    list.push([idx, thisPlays]);
    genreMap.set('list', list);

    console.log(genreMap);

    allMap.set(val, genreMap);
  })
  console.log('---');

  console.log(allMap);
  console.log('-----sorting...')
  const sortedMap = new Map([...allMap.entries()].sort((a, b) => {
    //속한 노래가 많이 재생된 장르가 같은 경우가 안나와있다....
    return b[1].get('total') - a[1].get('total')
  }))
  console.log(sortedMap);

  for (let val of sortedMap.entries()) {
    console.log(val);
    console.log('-------------------------');
    let array = val[1].get('list');
    const thisArray = array
      .sort((a, b) => {// 2, 3번째 조건을 위해 같은 장르 내에서도 sort해준다.
        if (b[1] === a[1]) a[0] - b[0];
        return b[1] - a[1];
      })
      .reduce((prev, current) => {//2차원 배열을 1차원으로 만들기 위해 reduce를 사용한다.
        prev.push(current[0]);
        return prev;
      }, [])
      .filter((val, idx) => {//두개씩 모으라는 조건이 잘 안보임..
        return idx < 2;
      })
    answer = [...answer, ...thisArray];//두 배열을 합치기 위해 스프레드 문법 사용
  };

  return answer;
}


console.log(solution(genres, plays));