package sol11;

import java.util.*;

class Solution {
	public static int getCnt(PriorityQueue<Integer> pq, int k) {
		int cnt = 0;
		int len = pq.size();
		int mixNum = 0, minNum1 = 0, minNum2 = 0;
		if(pq.size()<2) {
			if(pq.peek()>=k) {
				return 0;
			}
		}
		while(!pq.isEmpty() && pq.size() >= 2) {
			minNum1 = pq.poll();
			minNum2 = pq.poll();
			mixNum = minNum1 + (minNum2*2);
			//System.out.println(num2);
            if(mixNum >= k && minNum1 >=k && minNum2>=k){
                break;
            }
            pq.add(mixNum);
			cnt++;
		}
		if(mixNum < k) {
			return -1;
		}
		return cnt;
	}
	
    public static int solution(int[] scoville, int K) {
        int answer = 0;
        PriorityQueue<Integer> pq = new PriorityQueue<Integer>(); 
        for(int val : scoville) {
        	pq.add(val);
        }
        answer = getCnt(pq, K);
        return answer;
    }
    
	public static void main(String[] args) {
		int[] scoville = {8};
		int K = 7;
		System.out.println(solution(scoville, K));
	}
}