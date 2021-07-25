package sol29;

import java.util.HashMap;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        HashMap<String, String> hashMap = new HashMap<>();
        Scanner scanner = new Scanner(System.in);
        int n;
        String han = "", young = "";

        System.out.print("입력한 단어 수:");
        n = scanner.nextInt();

        for(int i=0;i<3;i++){
            System.out.print(">>한글:");
            han = scanner.next();
            System.out.print(">>영어:");
            young = scanner.next();

            hashMap.put(han, young);
        }
        while (true){
            System.out.print("검색할 단어:");
            han = scanner.next();
            switch (han){
                default:
                    System.out.println(">>" + han + "은 영어로 " + hashMap.get(han) + "입니다");
                    break;
                case "0":
                    System.out.println("종료합니다.");
                    return;
            }

        }
    }
}
