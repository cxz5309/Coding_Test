package sol17;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class Floor {
    ArrayList<Integer> spaces = new ArrayList<>();
    int floor=0;
    int max = 0;
    int now = 0;

    Floor(int i){
        floor = i;
        switch (i){
            case 1:max = 40;now = 40;
                break;
            case 2:max = 20;now = 20;
                break;
            case 3:max = 30;now = 30;
                break;
            default:
                break;
        }
        spaces = new ArrayList<>(Collections.nCopies(max, 0));
    }

    public boolean isEmpty(int spaceNum){
        return (this.spaces.get(spaceNum-1) == 0);
    }
    public void useSpace(int spaceNum, int idx){
        if(isEmpty(spaceNum)) {
            this.spaces.set(spaceNum-1, idx);
            now--;

            System.out.println(floor + "층 - " + spaceNum + "번 좌석이 배정되었습니다.");
            System.out.println("즐거운 코딩 시간 되세요!");
        }
        else{
            System.out.println("이미 이용중 입니다. 다른 자리를 이용해주세요");
        }
    }
    public void returnSpace(int spaceNum, int idx) {
        if(spaceNum>max)
            return;

        if(this.spaces.get(spaceNum-1) == idx){
            this.spaces.set(spaceNum-1, 0);
            now++;
            System.out.println(floor + "층 - " + spaceNum + "번 좌석이 반납되었습니다.");
            System.out.println("다음에 또 이용해주세요!");
        }
        else{
            System.out.println("이용 회원번호가 일치하지 않습니다.");
        }
    }

    public void printFloor(){
        System.out.println("=== " + floor + "층 ===");
        int width = 0;
        int height = 0;
        switch (floor){
            case 1:
                width = 10;
                height = 4;
                break;
            case 2:
                width = 4;
                height = 5;
                break;
            case 3:
                width = 5;
                height = 6;
                break;
            default:
                break;
        }
        int k= 0;
        for(int i=0;i<height;i++){
            for(int j=0;j<width;j++){
                if(spaces.get(k)==0){
                    System.out.print(String.format("%02d ", k+1));
                }
                else{
                    System.out.print("-- ");
                }
                k++;
            }
            System.out.println();
        }
        System.out.println("=== === ===");
        System.out.println("이용가능 : " + now + "석");
    }
}
