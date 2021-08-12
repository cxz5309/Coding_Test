package com.company;

class Solution {
    public static int solution(int[][] triangle) {
        int answer = 0;

        for(int i=1;i<triangle.length;i++){
            for(int j=0;j<triangle[i].length;j++){
                int fir = j != 0 ? triangle[i-1][j-1] : -1;
                int sec = j != triangle[i].length - 1 ? triangle[i-1][j] : -1;

                int _max = Math.max(fir, sec);

                triangle[i][j] += _max;
            }
        }
        for(int i=0;i<triangle[triangle.length-1].length;i++){
            //System.out.println(triangle[triangle.length-1][i]);
            answer = Math.max(answer, triangle[triangle.length-1][i]);
        }
        return answer;
    }

    public static void main(String[] args) {
        int[][] triangle = {{7}, {3, 8}, {8, 1, 0}, {2, 7, 4, 4}, {4, 5, 2, 6, 5}};
        System.out.println(solution(triangle));
    }
}