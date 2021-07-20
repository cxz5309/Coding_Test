package sol10;

import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int[] units = {50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1};
        int[] allCnt = new int[units.length];

        for(int i=0;i<4;i++){
            Scanner sc = new Scanner(System.in);
            int n = sc.nextInt();
            int count = 0;
            int left = 0;
            System.out.print(n + " ");
            for(int j=0;j<units.length;j++) {
                count = n/units[j];
                allCnt[j] += count;
                n = n%units[j];
                System.out.print(count + " ");
            }
            System.out.println();
        }
        for(int i=0;i<allCnt.length;i++){
            System.out.print(allCnt[i] + " ");
        }
    }
}
