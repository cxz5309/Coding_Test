package sol2;

import java.util.*;
import java.util.Scanner;

class Calculate{
    int oddSum;
    int evenSum;
    List<Integer> divisor;
    List<Integer> odds;
    List<Integer> evens;

    public Calculate(){
        oddSum = 0;
        evenSum = 0;
        divisor = new ArrayList<Integer>();
        odds = new ArrayList<Integer>();
        evens = new ArrayList<Integer>();
    }

    public void calculate(int n){
        for(int i=1;i<=n;i++){
            if(i%2 == 0){
                evens.add(i);
                evenSum += i;
            }
            else{
                odds.add(i);
                oddSum += i;
            }
            if(n%i == 0){
                divisor.add(i);
            }
        }
    }
}

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        Calculate cal = new Calculate();
        cal.calculate(N);

        while(!cal.odds.isEmpty()){
            System.out.print(cal.odds.remove(0));

            if(cal.odds.isEmpty())
                break;
            System.out.print("+");
        }
        System.out.println("=" + cal.oddSum);

        while(!cal.evens.isEmpty()){
            System.out.print(cal.evens.remove(0));

            if(cal.evens.isEmpty())
                break;
            System.out.print("+");
        }
        System.out.println("=" + cal.evenSum);

        while(!cal.divisor.isEmpty()){
            System.out.print(cal.divisor.remove(0) + " ");
        }
    }
}
