# 퍼즐 조각 채우기

## 문제

테이블 위에 놓인 퍼즐 조각을 게임 보드의 빈 공간에 적절히 올려놓으려 합니다. 게임 보드와 테이블은 모두 각 칸이 1x1 크기인 정사각 격자 모양입니다. 이때, 다음 규칙에 따라 테이블 위에 놓인 퍼즐 조각을 게임 보드의 빈칸에 채우면 됩니다.  

- 조각은 한 번에 하나씩 채워 넣습니다.
- 조각을 회전시킬 수 있습니다.
- 조각을 뒤집을 수는 없습니다.
- 게임 보드에 새로 채워 넣은 퍼즐 조각과 인접한 칸이 비어있으면 안 됩니다.

다음은 퍼즐 조각을 채우는 예시입니다.

![image](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/ab4d8aa2-f282-4764-bb46-84d405464b90/puzzle_5.png)
위 그림에서 왼쪽은 현재 게임 보드의 상태를, 오른쪽은 테이블 위에 놓인 퍼즐 조각들을 나타냅니다. 테이블 위에 놓인 퍼즐 조각들 또한 마찬가지로 [상,하,좌,우]로 인접해 붙어있는 경우는 없으며, 흰 칸은 퍼즐이 놓이지 않은 빈 공간을 나타냅니다. 모든 퍼즐 조각은 격자 칸에 딱 맞게 놓여있으며, 격자 칸을 벗어나거나, 걸쳐 있는 등 잘못 놓인 경우는 없습니다.  
이때, 아래 그림과 같이 3,4,5번 조각을 격자 칸에 놓으면 규칙에 어긋나므로 불가능한 경우입니다.  
![image](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/70e371ad-4306-412b-b53b-25208e52a513/puzzle_6.png)
- 3번 조각을 놓고 4번 조각을 놓기 전에 위쪽으로 인접한 칸에 빈칸이 생깁니다.
- 5번 조각의 양 옆으로 인접한 칸에 빈칸이 생깁니다.
다음은 규칙에 맞게 최대한 많은 조각을 게임 보드에 채워 넣은 모습입니다.
![image](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/dadd0bc1-8e38-4689-a480-26afa799a5a3/puzzle_7.png)
최대한 많은 조각을 채워 넣으면 총 14칸을 채울 수 있습니다.  
현재 게임 보드의 상태 game_board, 테이블 위에 놓인 퍼즐 조각의 상태 table이 매개변수로 주어집니다. 규칙에 맞게 최대한 많은 퍼즐 조각을 채워 넣을 경우, 총 몇 칸을 채울 수 있는지 return 하도록 solution 함수를 완성해주세요.

## 제한 

- 3 ≤ game_board의 행 길이 ≤ 50
- game_board의 각 열 길이 = game_board의 행 길이
  - 즉, 게임 보드는 정사각 격자 모양입니다.
  - game_board의 모든 원소는 0 또는 1입니다.
  - 0은 빈칸, 1은 이미 채워진 칸을 나타냅니다
  - 퍼즐 조각이 놓일 빈칸은 1 x 1 크기 정사각형이 최소 1개에서 최대 6개까지 연결된 형태로만 주어집니다.
- table의 행 길이 = game_board의 행 길이
- table의 각 열 길이 = table의 행 길이
  - 즉, 테이블은 game_board와 같은 크기의 정사각 격자 모양입니다.
  - table의 모든 원소는 0 또는 1입니다.
  - 0은 빈칸, 1은 조각이 놓인 칸을 나타냅니다.
  - 퍼즐 조각은 1 x 1 크기 정사각형이 최소 1개에서 최대 6개까지 연결된 형태로만 주어집니다.
- game_board에는 반드시 하나 이상의 빈칸이 있습니다.
- table에는 반드시 하나 이상의 블록이 놓여 있습니다.

## 입출력 예

input
``` 
[[1,1,0,0,1,0],[0,0,1,0,1,0],[0,1,1,0,0,1],[1,1,0,1,1,1],[1,0,0,0,1,0],[0,1,1,1,0,0]]   
[[1,0,0,1,1,0],[1,0,1,0,1,0],[0,1,1,0,1,1],[0,0,1,0,0,0],[1,1,0,1,1,0],[0,1,0,0,0,0]]	
```
output
``` 
14
```

input
``` 
[[0,0,0],[1,1,0],[1,1,1]]	
[[1,1,1],[1,0,0],[0,0,0]]	
```
output
``` 
0
```

## 입출력 예 설명


## (안할 확률이 높은) 알고리즘 설명

(임시)
1. table에서 bfs를 도는데 경로를 완벽하게 저장한다
2. [상, 우, 하, 좌] 순서이므로 1을 추가한 경로는 [우, 하, 좌, 상]이 된다.
3. 즉 0,1,2,3 을 추가한 경로는 0회전, 1회전, 2회전, 3회전된 경로와 같다
4. game_board에서도 bfs를 돌고 위의 경로와 같은 것이 있는지 확인, 같다면 정확하게 들어맞는 상태인 것으로 추측된다......과연...?
5. 경로가 하나라도 다르면 안맞거나 인접한곳에 빈 공간이 있는것

- -> 문제점
시작위치에 따라 경로가 완전히 달라질 수 있음 => game_board의 bfs 시작 위치를 가능한 모든 위치에서 시작하도록 하면 경로가 완전히 같아지게 될 수는 있으나 시간적으로 매우 손해를 보게 된다. -> 일단 진행해봄  

- -> 또다른 문제점
game_board의 bfs시작 위치를 가능한 모든 위치에서 하게 되는데 만약 일치하는게 있으면 그 조각은 카운팅되고 더 카운팅되지 않도록 bfs를 더 돌리면 안되는데 체크배열을 계속 초기화하기 때문에 이미 카운팅된 조각도 계속 들어감  
ex) 십자모양  
010  
111  
010  
일때 동일 경로가 4번이나 있기 때문에 4카운팅됨  


- ~~ -> 해결..? ~~
동일한 체크배열_init을 하나 더 만들고 진입시는 무시하고 체크는 기존 체크배열과 같이 한다, 만약 카운팅되었다면 기존 체크배열을 init으로 교체  
교체된 체크배열은 카운팅된 체크배열의 체크가 그대로 남아있기 때문에 bfs에 진입하지 않는다! 이렇게 하면 시간 효율 문제도 어느정도 해결될듯!  

- --->>> 많은 문제 중 핵심 : 상우하좌로 움직이는데 회전하여 이동한 경로는 상우하좌도 같이 회전시켜야 동일한 경로를 만들 수 있음  


- ~~ -> 해결 ~~
game_board bfs()한번  
table * 4회전 bfs() 총 4번  
각 조각은 start(x, y)와 전체 좌표[(x,y), (x,y), ...] 를 가지고 있다.  
game_board의 그것과 table * 4 의 그것이 일치하면 === 같다!  
당연히 start는 다르겠지만 전체좌표를 start의 차이만큼 빼면 전체 좌표를 일치시키는 것이 가능  
table * 4 는 하나 일치시켰을 때 4개가 같이 없어져야 하는데......이게 문제네
bfs돌릴때 map의 숫자를 바꿔주면 해결  
그러면 숫자가 같을 때 동일한 조각이니 숫자를 같이 저장해주어야 한다  
```
[{
  index : 1,
  start : [x, y],
  shape : [[x, y], [x, y], [x, y], ...]
}, { }, ...]
```
아마 이런식으로 될듯?  
이게 4개 만들어지고 index가 같으면 같은 조각  

- -->> 또 문제점...
굳이 회전하지 않고 좌표를 90도 돌린 값으로 수정할 수는 있어졌으나 bfs돌아가는 순서까지 돌려야됨 -> start 좌표가 의미가 없음;;;  

- -> 그러나 좌표를 잡을 수 있어졌으므로 좌표끼리 비교한다면 어떨까
- -> 좌표배열들을 비교하기 쉽지 않으나 일단 
  1. 좌표배열중에서 크기가 같은것끼리 filter
  2. 정렬 후 모든 좌표 비교, 일정 좌표만큼 차이나 나게 됨
  3. 이때 모든 x좌표의 차이와 y좌표의 차이는 같아야 한다
  4. 하나라도 다르다면 다른 모양인 것

----------
- 현재까지 72.7점.....

- -->>>오류 해결하여 100점 종료!!!!!!!
- 쓸데없는 코드 제거 및 코드 효율 올리기 종료