package sol15;

import java.util.ArrayList;

public class MyLotto extends NumberSetting{
    private int sameCnt = 0;
    private int isAuto = 0;
    private static final String[] numInO = {
            "① : ",
            "② : ",
            "③ : ",
            "④ : ",
            "⑤ : ",
            "⑥ : "};

    public MyLotto(){

    }

    public void auto(){
        setLottoNums(play());
    }

    public void manual(){
        ArrayList<Integer> newLottoNums = new ArrayList<>();
        for(int i=0;i<6;i++){
            System.out.print(this.numInO[i]);
            newLottoNums.add(scanner.nextInt());
        }
        setLottoNums(newLottoNums);
    }
    public void countSame(){
        for(int i=0;i<6;i++){
            if(getLottoNums().contains(Lotto.getInstance().getLottoNums().get(i))){
                setSameCnt(getSameCnt() + 1);
            }
        }
    }
    public int getSameCnt() {
        return sameCnt;
    }

    public void setSameCnt(int sameCnt) {
        this.sameCnt = sameCnt;
    }

    public int cntToMoney(){
        switch (sameCnt){
            case 1:
                return 5000;
            case 2:
                return 10000;
            case 3:
                return 15000;
            case 4:
                return 20000;
            case 5:
                return 25000;
            case 6:
                return 30000;
            case 0:
            default:
                return 0;
        }
    }

    public int getIsAuto() {
        return isAuto;
    }

    public void setIsAuto(int isAuto) {
        this.isAuto = isAuto;
    }

    public void printNums(int nowGame){
        String result = "";
        nowGame += 65;

        result +=(char)nowGame;
        if(isAuto == 1){
            result += " 자 동 ";
        }
        else{
            result += " 수 동 ";
        }
        for(int i=0;i<6;i++){
            result += String.format("%02d", getLottoNums().get(i)) + "\t";
        }
        if(getSameCnt() == 0){
            result += getSameCnt() + "(낙점)";
        }
        else{
            result += "(" + getSameCnt() + "개 당첨)";
        }

        System.out.println(result);
    }
}
