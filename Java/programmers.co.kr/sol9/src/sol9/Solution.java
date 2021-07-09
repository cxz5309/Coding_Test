package sol9;

import java.util.*;

class Relation{
	String x, y, op;
	int distance;
	public Relation(String x, String y, String op, int distance) {
		super();
		this.x = x;
		this.y = y;
		this.op = op;
		this.distance = distance;
	}
	
}

class Solution {
    public static int solution(int n, String[] data) {
        int answer = 0;
        String regex = "/|~|=|>|<|/g";
        Relation[] rel = new Relation[data.length];
        for(int i=0;i<data.length; i++) {
        	StringTokenizer token = new StringTokenizer(data[i],regex,true);
        	String[] useToken = new String[5];
        	int j = 0;
        	while( token.hasMoreTokens() ){
        		useToken[j] = token.nextToken();
        		j++;
            }
        	rel[i] = new Relation(useToken[0],useToken[2], useToken[3], Integer.parseInt(useToken[4]));
        }
        return answer;
    }

	public static void main(String[] args) {
		int n = 2;
		String[] data = {"N~F=0", "R~T>2"};
		System.out.println(solution(n, data));
	}
}