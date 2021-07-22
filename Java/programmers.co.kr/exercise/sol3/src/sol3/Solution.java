package sol3;

import java.util.*;


public class Solution{
	
	private static String solution(Integer[] numbers) {
        String answer = "";
        Arrays.sort(numbers, (a, b)->{
        	String aSt = a.toString();
        	String bSt = b.toString();
        	return (bSt+aSt).compareTo(aSt+bSt);
        });
		System.out.println(Arrays.toString(numbers));
		for(int num : numbers) {
			answer = answer + Integer.toString(num);
		}
		if(numbers[0] == 0) {
			return "0";
		}
		
        return answer;
    }
	
	public static void main(String[] args) {
	
		Integer[] numbers = {412, 41};

	
		System.out.println(solution(numbers));
	}

}
