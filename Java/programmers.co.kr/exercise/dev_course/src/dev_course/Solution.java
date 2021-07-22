package dev_course;

import java.util.*;

public class Solution {
	public static int solution(int[] d, int m) {
        int answer = 0;
        int x2 = 1;
        int idx = 0;
        for(int val : d) {
        	System.out.println(val);
        	System.out.println(m);
        	System.out.println(x2);
        	System.out.println("==");

        	if(val>=x2) {
            	m-=x2;
        		x2 *=2;
        	}
        	else {
        		x2 = 1;
        	}
        	idx++;

        	if(m<=0) {
        		return idx;
        	}
        }
        return -1;
	}
	public static void main(String[] args) {
		int[] d = {2,2,4,3};
		int m = 8;
		System.out.println(solution(d,m));
	}
}
