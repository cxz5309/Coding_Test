package sol17;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = 0;
        int selMenu = 0;
        int nowFloor = 0;
        int nowIdx;
        int nowSpace;
        String name;
        final String floorInfo = "(1) 1F - 오픈라운지\n(2) 2F - 미디어실\n(3) 3F - 프로젝트실";
        Floor[] floors = new Floor[3];
        for(int i=0;i<3;i++){
            floors[i] = new Floor(i + 1);
        }

        do{
            System.out.println("***모두의 스터디카페***");
            System.out.println("1. 이용하기");
            System.out.println("2. 반납하기");
            System.out.println("3. 좌석현황");
            System.out.println("0. 종료하기");
            System.out.println("======");
            System.out.print(">>입력 : ");
            selMenu = scanner.nextInt();
            switch (selMenu){
                case 1:
                    System.out.print(">>수강번호 : ");
                    nowIdx = scanner.nextInt();
                    System.out.print(">>이름 : ");
                    name = scanner.next();

                    System.out.println(floorInfo);
                    System.out.print(">>입력 : ");
                    nowFloor = scanner.nextInt();

                    System.out.println("===이용현황===");
                    floors[nowFloor-1].printFloor();

                    System.out.print(">>좌석번호 : ");
                    nowSpace = scanner.nextInt();

                    floors[nowFloor-1].useSpace(nowSpace,nowIdx);
                    break;
                case 2:
                    System.out.println(floorInfo);
                    System.out.print(">>입력 : ");
                    nowFloor = scanner.nextInt();

                    System.out.println("===이용현황===");
                    floors[nowFloor-1].printFloor();

                    System.out.print(">>좌석번호 : ");
                    nowSpace = scanner.nextInt();
                    System.out.print(">>수강번호 : ");
                    nowIdx = scanner.nextInt();

                    floors[nowFloor-1].returnSpace(nowSpace,nowIdx);
                    break;
                case 3:
                    System.out.println("===이용현황===");
                    for(int i=1;i<=3;i++) {
                        floors[i - 1].printFloor();
                    }
                    break;
                case 0:
                default:
                    System.out.println("시스템이 종료되었습니다.");
                    return;
            }
        }
        while(num == 0);
    }
}
