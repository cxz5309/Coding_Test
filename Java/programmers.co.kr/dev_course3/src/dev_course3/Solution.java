package dev_course3;

import java.util.*;

class Graph{
	int n;
	int[][] graph;
	public Graph(int n) {
        this.n = n;
        this.graph = new int[this.n+2][this.n+2];
    }
    public void put(int x, int y) {
        this.graph[x][y] = this.graph[y][x] = 1;
    }
}



class Solution {
	public static boolean[] visited;
	public static int min = 0;
	
	public static void DFS(Graph newGraph, int n, int now) {
		visited[now] = true;

		for(int i=1;i<=n;i++) {
			if(newGraph.graph[now][i] != 1 || visited[i]) {
				continue;
			}
			DFS(newGraph, n, i);
		}
	}
	
    public static int solution(int n, int[][] wires) {
        int answer = -1;
        min = 987654321;
        
        for(int k=0;k<wires.length;k++) {
            Graph newGraph = new Graph(n);
            //�׷����� ���� �ϳ����� ����Ǿ� �ʱ�ȭ�ǹǷ� �湮���� �ʱ�ȭ�մϴ�. 
            visited = new boolean[n + 1];
            
            //k��°�� ������ �����ϰ� DFS�� ���ϴ�
	        for(int i=0;i<wires.length;i++) {
	        	if(i==k)
	        		continue;
	        	newGraph.put(wires[i][0], wires[i][1]);
	        }

			int prev=-1;//graph[0]�� false�̹Ƿ� -1���� ����
			int now=0;
			//��� �׷����� ����� Ʈ�� �����̹Ƿ� DFS�� �ѹ��� ������ ���ᰪ�� ���� �� �ֽ��ϴ�.
			DFS(newGraph, n, wires[0][0]);
			for(boolean isVisited : visited) {
				if(isVisited)now++;
				else prev++;
			}
			min = Math.min(min, Math.abs(now-prev));
        }
        answer = min;
        return answer;
    }
	public static void main(String[] args) {
		int n = 9;
		int[][] wires = {{1,3},{2,3},{3,4},{4,5},{4,6},{4,7},{7,8},{7,9}};
		System.out.println(solution(n, wires));
	}
}