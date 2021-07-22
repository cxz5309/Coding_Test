package sol15;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        final String gameNum = "몇 게임?";
        final String gameStart = "[%d 게임] (1.자동 / 2.수동) : ";
        Scanner scanner = new Scanner(System.in);
        int n, isAuto;

        System.out.println(gameNum);
        n = scanner.nextInt();

        //게임 시작
        Lotto.getInstance().auto();

        MyLotto[] myLottos = new MyLotto[n];
        Lotto.getInstance().initReword(n);
        Lotto.getInstance().setTimes();

        for(int i=0;i<n;i++){
            myLottos[i] = new MyLotto();
            System.out.print(String.format(gameStart, i+1));
            myLottos[i].setIsAuto(scanner.nextInt());
            if(myLottos[i].getIsAuto() == 1){
                myLottos[i].auto();
            }
            else{
                myLottos[i].manual();
            }
            myLottos[i].countSame();
            Lotto.getInstance().setRewordMoneys(i, myLottos[i].cntToMoney());
            System.out.println(myLottos[i].getLottoNums());
        }
        int moneySum = 0;
        for(int i=0;i<n;i++){
            moneySum += Lotto.getInstance().getRewordMoneys()[i];
        }
        if(moneySum>0){
            System.out.println("###인생역전###");
            String[] tmp = Lotto.getInstance().getTimes();
            System.out.println("발행일 : " + tmp[0]);
            System.out.println("추첨일 : " + tmp[1]);
            System.out.println("지급기한 : " + tmp[2]);
        }
        else{
            System.out.println("###당첨결과###");
        }

        System.out.println("-----------");
        for(int i=0;i<n;i++){
            myLottos[i].printNums(i);
        }
        System.out.println("-----------");

        System.out.println("금액 : " + moneySum);
        System.out.println("######");

        System.out.println("당첨 번호 : " + Lotto.getInstance().getLottoNums());
        System.out.println("보너스 번호 : " + Lotto.getInstance().getBonusNum());
    }
}
