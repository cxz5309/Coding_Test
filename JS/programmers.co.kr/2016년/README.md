# 2016년

## 문제

2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

## 제한 

- 2016년은 윤년입니다.
- 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

## 입출력 예

input
``` 
5	24	
```
output
``` 
"TUE"
```

## 입출력 예에 대한 설명


## (안할 확률이 높은) 알고리즘 설명

- 구현해서 푸는거도 할 수 있는데 귀찮아서 안했다.
- 조금 주의해야 하는 점
1. Date 조금 다뤄봤으면 한번씩 다 겪는 타임존 문제
   - Date 기본 기준은 UTC + 0 이기 때문에 한국 시간으로 계산하려면 + 9를 해줘야 한다.
   - new Date(Date.UTC()) 로 UTC 시간으로 맞춰서 입력 가능하다.
2. **month는 0부터 시작이다.**
3. dayOfWeek는 getDay()로 숫자 반환하여 구하고 일요일이 0이다.