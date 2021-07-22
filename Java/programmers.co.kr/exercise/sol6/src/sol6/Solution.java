package sol6;

import java.util.*;

class Num{
	public int num, idx, cnt;
	Num(int x, int i, int n){
		this.num = x;
		this.idx = i;
		this.cnt = n;
	}
}

class Solution {
	public static Integer result = 0;
	public static Integer BFS(int[] numbers, int startIdx, int targetNum) {
		Queue<Num> queue = new LinkedList<Num>();
		Num num1 = new Num(numbers[startIdx], startIdx, 1);
		Num num2 = new Num(numbers[startIdx] * -1, startIdx, 1);
		queue.add(num1);
		queue.add(num2);
		while(!queue.isEmpty()) {
			Num tmp = queue.remove();
//			System.out.println(tmp.num);
//			System.out.println(tmp.cnt);
//			System.out.println('-');

			if(tmp.cnt == numbers.length) {
				if(tmp.num == targetNum) {
					result++;
				}
				continue;
			}
			
			Num next1 = new Num(tmp.num + numbers[tmp.idx + 1], tmp.idx + 1, tmp.cnt+1);
			Num next2 = new Num(tmp.num - numbers[tmp.idx + 1], tmp.idx + 1, tmp.cnt+1);
			queue.add(next1);					
			queue.add(next2);			
		}
		return result;
	}
	
	public static int solution(int[] numbers, int target) {
        int answer = 0;
        answer = BFS(numbers, 0, target);
        return answer;
    }
    
    public static void main(String[] args) {
		int[] numbers = {1,1,1,1,1};
		int target = 3;
        
        System.out.println(solution(numbers, target));
	}
}
