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
            //그래프가 포문 하나마다 변경되어 초기화되므로 방문값도 초기화합니다. 
            visited = new boolean[n + 1];
            
            //k번째의 엣지를 제외하고 DFS를 들어갑니다
	        for(int i=0;i<wires.length;i++) {
	        	if(i==k)
	        		continue;
	        	newGraph.put(wires[i][0], wires[i][1]);
	        }

			int prev=-1;//graph[0]은 false이므로 -1부터 시작
			int now=0;
			//모든 그래프가 연결된 트리 형태이므로 DFS는 한번만 돌려도 연결값을 비교할 수 있습니다.
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