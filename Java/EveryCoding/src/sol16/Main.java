package sol16;

import java.io.*;
import java.util.ArrayList;

class Student{
    int idx;
    String name;
    int score;
    String classes;

    public Student(int idx, String name, int score, String classes) {
        this.idx = idx;
        this.name = name;
        this.score = score;
        this.classes = classes;
    }

    public int getIdx() {
        return idx;
    }

    public String getName() {
        return name;
    }

    public int getScore() {
        return score;
    }

    public String getClasses() {
        return classes;
    }
}

public class Main {
    public static void main(String[] args) {
        String[] tmp;
        ArrayList<Student> students = new ArrayList<>();
        try{
            //파일 객체 생성
            File file = new File("C:\\Users\\cxz53\\OneDrive\\바탕 화면\\tutorial\\Coding_Test\\Java\\EveryCoding\\src\\sol16\\student.txt");
            //입력 스트림 생성
            FileReader filereader = new FileReader(file);
            //입력 버퍼 생성
            BufferedReader bufReader = new BufferedReader(filereader);
            String line = "";
            while((line = bufReader.readLine()) != null){
                tmp = line.split("/");
                students.add(new Student(Integer.parseInt(tmp[0]),tmp[1],Integer.parseInt(tmp[2]),tmp[3]));
            }
            //.readLine()은 끝에 개행문자를 읽지 않는다.
            bufReader.close();
        }catch (FileNotFoundException e) {
            // TODO: handle exception
        }catch(IOException e){
            System.out.println(e);
        }
        students.sort((a, b)->{
            if(a.score == b.score){
                return a.idx - b.idx;
            }
            return b.score - a.score;
        });
        System.out.println("번호 이름 성적 반");
        for(int i=0;i<students.size();i++) {
            String print = "";
            print += students.get(i).getIdx() + " ";
            print += students.get(i).getName() + " ";
            print += students.get(i).getScore() + " ";
            print += students.get(i).getClasses();

            System.out.println(print);
        }
    }
}
