package sol15;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class NumberSetting {
    private ArrayList<Integer> lottoNums = new ArrayList<>();
    private int bonusNum = 0;
    Scanner scanner = new Scanner(System.in);

    public ArrayList play(){
        ArrayList<Integer> lottoNums = new ArrayList<Integer>();
        boolean[] nChk = new boolean[46];
        Integer n;
        Arrays.fill(nChk, false);

        for (int i = 0; i < 7; i++) {
            n = (int) ((Math.random() * 45) + 1);
            while (nChk[n]) {
                n = (int) ((Math.random() * 45) + 1);
            }
            nChk[n] = true;

            if(i<6)lottoNums.add(n);
            else setBonusNum(n);
        }
        return lottoNums;
    }
    public ArrayList<Integer> getLottoNums() {
        return this.lottoNums;
    }

    public void setLottoNums(ArrayList<Integer> lottoNums) {
        this.lottoNums = lottoNums;
    }

    public int getBonusNum() {
        return bonusNum;
    }

    public void setBonusNum(int bonusNum) {
        this.bonusNum = bonusNum;
    }
}
