#include<vector>
#include<queue>
#include<iostream>

using namespace std;

int height;
int width;

int xMove[4] = { 0, 1, 0, -1 };
int yMove[4] = { 1, 0, -1, 0 };

vector<vector<int> > newMaps;
int visitedMaps[101][101];

bool range(int x, int y) {
    if (x < 0 || x >= width || y < 0 || y >= height) {
        return false;
    }
    return true;
}

struct node {
    int x, y, cnt;
};

int BFS() {
    queue <node> unVisited;
    unVisited.push({ 0, 0, 1 });
    visitedMaps[0][0] = 0;

    while (unVisited.size() > 0) {
        node tmp = unVisited.front();
        unVisited.pop();

        if (tmp.x == width - 1 && tmp.y == height - 1) {
            return tmp.cnt;
        }

        //cout << tmp.x << " " << tmp.y << " " << tmp.cnt << endl;
        //console.log(visitedMaps);
        node next;
        for (int i = 0; i < 4; i++) {
            next.x = tmp.x + xMove[i];
            next.y = tmp.y + yMove[i];
            next.cnt = tmp.cnt + 1;
            //console.log(next[0] + " " + next[1] + " " + next[2]);

            if (!range(next.x, next.y) || newMaps[next.y][next.x] == 0 || visitedMaps[next.y][next.x] == 0) {
                continue;
            }
            unVisited.push({ next.x, next.y, next.cnt });
            visitedMaps[next.y][next.x] = 0;
        }
    }
    return -1;
}

int solution(vector<vector<int> > maps)
{
    int answer = 0;
    newMaps = maps;

    height = maps.size();
    width = maps[0].size();

    for (int i = 0; i < height; i++) {
        for (int j = 0; j < width; j++) {
            visitedMaps[i][j] = 1;
        }
    }

    answer = BFS();

    return answer;
}