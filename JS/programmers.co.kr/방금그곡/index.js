const m = "CC#BCC#BCC#BCC#B"
const musicinfos = ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]

const to = {
  'C': 'a',
  'C#': 'b',
  'D': 'c',
  'D#': 'd',
  'E': 'e',
  'F': 'f',
  'F#': 'g',
  'G': 'h',
  'G#': 'i',
  'A': 'j',
  'A#': 'k',
  'B': 'l'
}

const parseNewMusic = (str) => {
  let parseMusic = '';
  for (let i = 0; i < str.length; i++) {
    if (i < str.length - 1 && str[i + 1] === '#') {
      parseMusic += to[str[i] + '#'];
      i++;
    } else {
      parseMusic += to[str[i]];
    }
  }
  return parseMusic;
}

function solution(m, musicinfos) {
  let answer = '';
  let parsedM = parseNewMusic(m);

  const arr = musicinfos.map((val) => {
    const musicinfoSplit = val.split(',');
    const startTime = musicinfoSplit[0];
    const endTime = musicinfoSplit[1];
    const title = musicinfoSplit[2];
    const parsedMusic = parseNewMusic(musicinfoSplit[3]);

    const time = ((endTime.split(':')[0] * 60) + (endTime.split(':')[1]) * 1)
      - ((startTime.split(':')[0] * 60) + (startTime.split(':')[1] * 1));

    let melody = '';
    const times = Math.floor(time / parsedMusic.length) + 1;

    for (let i = 0; i < times; i++) {
      melody += parsedMusic;
    }
    melody = melody.slice(0, time);

    return { time, title, melody };
  });

  let answerList = arr.filter((val) => {
    return val.melody.includes(parsedM)
  })

  if (answerList.length === 0) {
    return '(None)';
  }
  answerList.sort((a, b) => {
    if (a.time > b.time) {
      return -1;
    } else if (a.time < b.time) {
      return 1;
    } else {
      return 0;
    }
  })
  answer = answerList[0].title;
  return answer;
}

console.log(solution(m, musicinfos))