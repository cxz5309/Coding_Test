#include <iostream>
#include <vector>
#include <queue>

using namespace std;

int solution(vector<int> scoville, int K) {
    int answer = 0;

    priority_queue<int, vector<int>, greater<int> > pq;
    int min, nextMin;
    int cnt = 0;

    for (int i = 0; i < scoville.size(); i++) {
        pq.push(scoville[i]);
    }

    //2개 이상, 가장 작은 지수가 K이상
    while (pq.size() > 1 && pq.top() < K) {
        min = pq.top();
        pq.pop();
        nextMin = pq.top();
        pq.pop();

        pq.push(min + (nextMin * 2));
        cnt++;
    }

    answer = cnt;

    if (pq.top() < K) {
        answer = -1;
    }

    return answer;
}