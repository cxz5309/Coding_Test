package sol14;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    static ArrayList lottoNums;

    public static void makeLotto() {
        lottoNums = new ArrayList();
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
            lottoNums.add(n);
        }
    }

    public static void main(String[] args) {
        System.out.print("몇 게임?");

        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        for(int i=0;i<N;i++){
            makeLotto();
            System.out.print("[" + (i+1) + "게임] : " +
                    lottoNums.get(0) + " " +
                    lottoNums.get(1) + " " +
                    lottoNums.get(2) + " " +
                    lottoNums.get(3) + " " +
                    lottoNums.get(4) + " " +
                    lottoNums.get(5) + " "
            );
            System.out.println();
        }
    }
}
