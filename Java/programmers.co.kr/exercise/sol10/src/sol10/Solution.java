package sol10;

import java.util.*;

class Solution {
	public static String changeN(String token1, int n) {
		int remainder = n%3 == 0 ? 3 : n%3;
		int division = (n - remainder)/3;
		System.out.println(division);
		
		String token2 = "";
		switch(remainder) {
			case 0:
			case 3:
				token2 = "4";
				break;
			case 1:
				token2 = "1";
				break;
			case 2:
				token2 = "2";
				break;
		}
		
		if(division == 0) {
			return token2 + token1;
		}
		else {
			return changeN(token2 + token1, division);
		}
	}
	
    public static String solution(int n) {
        String answer = "";
        answer = changeN("", n);
        return answer;
    }
	public static void main(String[] args) {
		int n = 10;
		System.out.println(solution(n));
	}
}