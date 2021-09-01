const table = ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"]
const languages = ["JAVA", "JAVASCRIPT"]
const preference = [7, 5]	

let names = {};

const makeTable = (arr)=>{
  const table = new Map();
  arr.forEach((val, idx)=>{
    let lineSplit = val.split(' ');
    names[idx] = lineSplit.shift(); 
    const newMap = lineSplit.reduce((mapping, value, idx)=>{
      mapping.set(value, 5-idx);
      return mapping;
    }, new Map());
    table.set(names[idx], newMap);
  })
  return table;
}

function solution(table, languages, preference) {
    let answer = '';
    const allTable = makeTable(table);
    // console.log(allTable);
    const result = Object.values(names).map((job)=>{
      let score = 0;
      languages.forEach((lang, idx)=>{
        // console.log('job : ' + job + ' lang : '+ lang + ' get : ' + allTable.get(job).get(lang) + ' pre: ' +  preference[idx])
        const getVal = allTable.get(job).has(lang) ? allTable.get(job).get(lang) : 0;
        score += getVal * preference[idx];
      });
      return [job, score];
    });

    result.sort((a,b)=>{
      if(a[1] === b[1]) {
        return a[0] < b[0] ? -1 : 1
      }
      return b[1] - a[1];
    })
    // console.log(result);
    answer = result[0][0];
    return answer;
}


console.log(solution(table, languages, preference));