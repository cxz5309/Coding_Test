package sol5;

public class Solution {
	
	public static boolean[] visited;
	
	public static void DFS(int[][] computers, int prev, int now, int depth, int length) {
		if(depth>=length)
			return;
		for(int i=0;i<length;i++) {
			int next = i;
			//System.out.println(next);
			if(now == next) continue;
			if(visited[next]) continue;
			if(computers[now][i]==0) continue;
			
			visited[next] = true;
			DFS(computers, now, next, depth+1, length);
			//visited[next] = false;
		}
	}
	
    public static int solution(int n, int[][] computers) {
        int answer = 0;
        visited = new boolean[n];
        for(int i=0;i<n;i++) {
        	if(visited[i]) continue;
        	visited[i] = true;
        	DFS(computers, -1, i, 0, n);
        	//visited[i] = false;
        	answer++;
        }
        return answer;
    }
    
	public static void main(String[] args) {
		int n = 3;
		int[][] computers = {{1, 1, 0}, {1, 1, 1}, {0, 1, 1}};
        System.out.println(solution(n, computers));
	}

}
