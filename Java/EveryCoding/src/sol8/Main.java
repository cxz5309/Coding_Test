package sol8;

import java.util.LinkedList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        LinkedList<Integer> list = new LinkedList<>();
        String line = "";
        for(int i=1;i<n*n + 1;){
            for(int j=0;j<n;j++){
                if(((i-1)/n)%2 == 0){
                    list.addLast(i);
                }
                else{
                    list.addFirst(i);
                }
                i++;
            }
            for(int j=0;j<n;j++){
                System.out.print(list.removeFirst() + " " );
            }
            System.out.println();
        }
    }
}
