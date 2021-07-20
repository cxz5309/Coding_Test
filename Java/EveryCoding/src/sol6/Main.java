package sol6;

import java.util.Arrays;
import java.util.Scanner;

public class Main {
    static int[] lottoNums = new int[7];

    public static void makeLotto() {
        Boolean[] nChk = new Boolean[46];
        Arrays.fill(nChk,false);
        nChk[0] = true;
        int n;
        for (int i = 0; i < 6; i++) {
            n = 0;
            while (nChk[n]) {
                n = (int) ((Math.random() * 45) + 1);
            }
            nChk[n] = false;
            lottoNums[i] = n;
        }
    }

    public static void main(String[] args) {
        System.out.print("몇 게임?");

        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        for(int i=0;i<N;i++){
            makeLotto();
            System.out.print("[" + (i+1) + "게임] : " +
                    lottoNums[0] + " " +
                    lottoNums[1] + " " +
                    lottoNums[2] + " " +
                    lottoNums[3] + " " +
                    lottoNums[4] + " " +
                    lottoNums[5] + " "
            );
            System.out.println();
        }
    }
}
