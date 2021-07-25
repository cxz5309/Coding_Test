package sol28;

import java.util.Scanner;
import java.util.Vector;

public class Main {
    public static void main(String[] args) {
        Vector<Integer> vector = new Vector<>();
        Scanner scanner = new Scanner(System.in);
        int n, item, itemSum = 0;

        System.out.print("벡터 요소 수 : ");
        n = scanner.nextInt();
        vector = new Vector<>();

        for(int i=0;i<n;i++){
            item = scanner.nextInt();
            itemSum += item;
            vector.add(item);
        }
        System.out.println("요소 수 : " + vector.size());
        System.out.println("벡터 용량 : " + vector.capacity());
        System.out.print("총합 : " + itemSum);
    }
}
