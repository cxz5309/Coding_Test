package sol7;

import java.util.*;

class Solution {
    public static int[] solution(int[] array, int[][] commands) {
        int[] answer = {};
        int[] newArray;
        int len = commands.length;
        answer = new int[len];
        
        for(int i=0;i<len;i++) {
        	newArray = Arrays.copyOfRange(array, commands[i][0]-1, commands[i][1]);
        	Arrays.sort(newArray);
        	System.out.println(Arrays.toString(newArray));
        	answer[i] = newArray[commands[i][2]-1];
        }
        return answer;
    }
    
    
    
    public static void main(String[] args) {
		int[] array = {1, 5, 2, 6, 3, 7, 4};
		int[][] commands = {{2, 5, 3}, {4, 4, 1}, {1, 7, 3}};
		System.out.println(Arrays.toString(solution(array, commands)));
	}
}
