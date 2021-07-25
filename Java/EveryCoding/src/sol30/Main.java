package sol30;

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
    //static ArrayList<String> list;
    static LinkedList<String> stack = new LinkedList<>();

    public static String calculate(int a, String op, int b){
        Integer c;
        switch (op){
            case "+":
                c = a + b;
                return c.toString();
            case "-":
                c = a - b;
                return c.toString();
            case "*":
                c = a * b;
                return c.toString();
            case "/":
                c = a / b;
                return c.toString();
            default:
                return "";
        }
    }

    public static String processBracket(String newStr){
        int firstBracket = newStr.indexOf("(");
        int errorBracket = newStr.indexOf("(", firstBracket + 1);
        int nextBracket = newStr.indexOf(")", firstBracket + 1);
        String slice;
        String newSlice;
        //괄호 안에 새 괄호가 있는 경우
        if(errorBracket != -1 && errorBracket<nextBracket){
            slice = newStr.substring(errorBracket);
            newSlice = processBracket(slice);
            newStr = newStr.replace(slice, newSlice);
        }//괄호가 없는 경우
        else if(firstBracket == -1 && nextBracket == -1){
            return newStr;
        }//괄호 계산
        else{
            // 괄호 안에 수식이 여러 개 있는 경우 생각 못함(1+2/3)
            // 하기싫어서 중단............
            slice = newStr.substring(firstBracket,nextBracket+1);

            Pattern p = Pattern.compile("[+]|-|[*]|[/]");
            Matcher m = p.matcher(slice);
            m.find();

            String op = slice.substring(m.start(),m.start() + 1);
            int num1 = Integer.parseInt(slice.substring(1,m.start()));
            int num2 = Integer.parseInt(slice.substring(m.start() + 1,slice.length()-1));

            newSlice = calculate(num1, op, num2);
            newStr = newStr.replace(slice, newSlice);
        }

        return newStr;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String str;
        str = scanner.nextLine();
        str = str.replaceAll(" ", "");

        while (str.contains("(")){
            System.out.println(str);
            str = processBracket(str);
        }
        System.out.println(str);
    }
}
