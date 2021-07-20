package sol3;

public class Main {
    public static boolean is369(int num){
        return (num == 3 || num == 6 || num == 9);
    }
    public static void main(String[] args) {
        int fir, sec;
        for(int i=1;i<=100;i++){
            fir = i/10;
            sec = i%10;
            if(is369(fir) && is369(sec)){
                System.out.println("**");
            }
            else if(is369(fir) || is369(sec)){
                System.out.println("*");
            }
            else{
                System.out.println(i);
            }
        }
    }
}
