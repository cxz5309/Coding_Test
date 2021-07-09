package sol8;

import java.util.*;
class Solution {
    public static int[] solution(int brown, int yellow) {
        int[] answer = {};
        int x, y;
        //조건 1
//        brown + yellow = x*y;
        //조건 2
//        brown = 2* (x-1) + 2*(y-1);
//        yellow = (x-2)*(y-2);
        for(int i=1;i<brown + yellow + 1;i++) {
        	for(int j=1;j<=i;j++) {
        		if(i*j == brown + yellow 
        				&& 2*(i + j) - 4 == brown 
        				&& (i-2) * (j-2) == yellow) {
        			System.out.println("x:" + i);
        			System.out.println("y:" + j);
        			answer = new int[]{i, j};
        		}
        	}
        }
        return answer;
    }
    
    public static void main(String[] args) {
    	int brown = 24;
    	int yellow = 24;
		System.out.println(Arrays.toString(solution(brown, yellow)));
	}
}