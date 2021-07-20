package sol7;

import java.util.Scanner;

public class Main {
    public static void Asc(int[] nums){
        int tmp;
        for(int i=0;i<5;i++){
            for(int j=0;j<i;j++){
                if(nums[i] < nums[j]){
                    tmp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = tmp;
                }
            }
        }
        for(int i=0;i<5;i++){
            System.out.print(nums[i] + " ");
        }
    }
    public static void Des(int[] nums){
        int tmp;
        for(int i=0;i<5;i++){
            for(int j=0;j<i;j++){
                if(nums[i] > nums[j]){
                    tmp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = tmp;
                }
            }
        }
        for(int i=0;i<5;i++){
            System.out.print(nums[i] + " ");
        }
    }

    public static void main(String[] args) {
        int[] numbers = new int[6];
        for(int i=0;i<5;i++){
            Scanner sc = new Scanner(System.in);
            numbers[i] = sc.nextInt();
        }
        Asc(numbers);
        System.out.println();
        Des(numbers);
        System.out.println();
    }
}
