package sol5;

import java.util.Scanner;

public class Main {
    static String[] menu = new String[3];
    static String print;

    public static String printResult(int N){
        if(N>3 || N<0){
            return "(0~3) 사이의 번호를 입력해주세요.";
        }
        switch (N){
            default : return "";
            case 0: return "exit";
            case 1:
            case 2:
            case 3:
                return String.format("'%s'이/가 주문되었습니다.", menu[N-1]);
        }
    }

    public static void process(){
        int N = 1;
        String result = "exit";
        do {
            System.out.print(print);
            Scanner sc = new Scanner(System.in);
            N = sc.nextInt();
            result = printResult(N);
            if(result == "exit"){
                break;
            }
            System.out.println();
            System.out.println(result);
            System.out.println();
        }
        while(result != "exit");
    }

    public static void main(String[] args) {
        menu[0] = "황금올리브 반반한 치킨";
        menu[1] = "뿌링클 치킨";
        menu[2] = "처갓집에서 호식이가 만든 치킨";
        print = "*** 치킨 메뉴판 ***\n1." + menu[0] +
                "\n2." + menu[1] +
                "\n3." + menu[2] +
                "\n0." + "종료\n****** 번호 : ";
        process();
    }
}
