package sol4;

import java.util.*;

public class Solution {
	public static boolean[] visited = new boolean[7];
    public static ArrayList<Integer> arr = new ArrayList<>();
	public static int solution(String numbers) {
        int answer = 0;
        for(int i = 0; i < numbers.length(); i++){
        	visited[i] = true;
            DFS(numbers, "", numbers.substring(i,i+1), numbers.length());
            visited[i] = false;
        }
        
        for(int val : arr) {
        	if(isSosu(val)) answer++;
        }
        return answer;
    }
	
	public static boolean isSosu(int val) {
		for(int i=2; i<val; i++) {
			if(val%i == 0) {
				return false;
			}
		}
		System.out.println(val);
		return true;
	}
	
	public static void DFS(String nums, String prev, String now, int len) {
		String tmp = prev + now;
        //System.out.println(tmp);

		if(tmp.length()>len) {
			return;
		}

		if(!arr.contains(Integer.parseInt(tmp)) && Integer.parseInt(tmp)>1) {
			arr.add(Integer.parseInt(tmp));
		}
		for(int i=0; i<nums.length();i++) {
			if(visited[i]) continue;
			visited[i] = true;
			DFS(nums, tmp, nums.substring(i, i+1), len);
			visited[i] = false;
		}
	}
	
	public static void main(String[] args) {
		String numbers = "011";
        
        System.out.println(solution(numbers));
	}
}
