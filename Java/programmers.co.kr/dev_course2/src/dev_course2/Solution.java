package dev_course2;

import java.util.*;

class Solution {
    public static int[] solution(int[] deposit) {
        int[] answer = {};
        Stack<Integer> stack = new Stack<Integer>();
        for(int val : deposit) {
//        	System.out.println("val: " + val);
        	if(val>0) {
        		stack.push(val);
        	}
        	else {
        		int tmp;
        		while(val<0) {
        			tmp = stack.pop();
//                	System.out.println(tmp);
        			val+=tmp;
        		}
        		if(val!=0)
        			stack.push(val);
        	}
//        	System.out.println(stack.peek());
//        	System.out.println("--");
        }
        int len = stack.size();
        answer = new int[len];

        for(int i=0;i<len;i++) {
        	answer[len-1-i] = stack.pop();
        }
        return answer;
    }

	public static void main(String[] args) {
		int[] deposit = {500, 1000, -300, 200, -400, 100, -100};
		System.out.println(Arrays.toString(solution(deposit)));
	}
}