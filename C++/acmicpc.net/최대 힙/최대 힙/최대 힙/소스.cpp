#include <cstdio>
#include <iostream>

#define MAX_SIZE 100001

using namespace std;

void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

typedef struct priorityQueue {
    int heap[MAX_SIZE];
    int count;
}priorityQueue;

void push(priorityQueue* pq, int data) {
    if (pq->count >= MAX_SIZE) return;
    pq->heap[pq->count] = data; //���� ����Ʈ���� ������ ���ҿ� ������ ����
    int now = pq->count; //���Ե� �����Ϳ� �ش��ϴ� ����� �ε���
    int parent = (pq->count - 1) / 2; //���Ե� ����� �θ���
    while (now > 0 && pq->heap[now] > pq->heap[parent]) {
        swap(&pq->heap[now], &pq->heap[parent]); //�θ���� ���Ե� ��� ��ü
        now = parent;
        parent = (parent - 1) / 2;
    }
    pq->count++;
}

int pop(priorityQueue* pq) {
    if (pq->count <= 0) return 0;
    int res = pq->heap[0];
    pq->count--;
    pq->heap[0] = pq->heap[pq->count];
    int now = 0, leftChild = 1, rightChild = 2;
    int target = now;

    //���Ұ� ������ �� ������ �ݺ�
    while (leftChild < pq->count) {
        if (pq->heap[target] < pq->heap[leftChild]) target = leftChild;
        if (pq->heap[target] < pq->heap[rightChild] && rightChild < pq->count) target = rightChild;
        if (target == now) break;
        else {
            swap(&pq->heap[now], &pq->heap[target]);
            now = target;
            leftChild = now * 2 + 1;
            rightChild = now * 2 + 2;
        }
    }
    return res;
}

int main(void) {

    int n, data;
    cin >> n;
    priorityQueue pq;
    pq.count = 0;
    for (int i = 0; i < n; i++) {
        cin>>data;
        if (data == 0) {
            cout << pop(&pq);
        }
        push(&pq, data);
    }

    return 0;
}