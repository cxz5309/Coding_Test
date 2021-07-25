package sol23;

import sol18.Point;
import sol19.Shape;
import sol20.Triangle;
import sol21.Rectangle;
import sol22.Circle;

import java.util.ArrayList;
import java.util.Scanner;

public class ShapeMaker {
    public static void main(String[] args) {
        final String start = "1. 삼각형\n2. 사각형\n3. 원형\n그만\n";
        Scanner scanner = new Scanner(System.in);
        int x, y;
        String control;
        Shape shape;
        Point point;
        ArrayList<Shape> shapeList = new ArrayList<>();
        double allArea = 0, allRound = 0;
        double thisArea, thisRound;
        while (true){
            System.out.print(start);
            control = scanner.next();
            switch (control){
                case "1":
                    System.out.print("x : ");
                    x = scanner.nextInt();
                    System.out.print("y : ");
                    y = scanner.nextInt();

                    point = new Point(x,y);
                    shape = new Triangle(point);
                    shapeList.add(shape);
                    break;
                case "2":
                    System.out.print("x : ");
                    x = scanner.nextInt();
                    System.out.print("y : ");
                    y = scanner.nextInt();

                    point = new Point(x,y);
                    shape = new Rectangle(point);
                    shapeList.add(shape);
                    break;
                case "3":
                    System.out.print("r : ");
                    x = scanner.nextInt();

                    point = new Point(x);
                    shape = new Circle(point);
                    shapeList.add(shape);
                    break;
                case "그만":
                    for(int i=0;i<shapeList.size();i++){
                        thisArea = shapeList.get(i).getArea();
                        allArea += thisArea;
                        System.out.print("넓이 : ");
                        System.out.println(thisArea);

                        thisRound = shapeList.get(i).getRound();
                        allRound += thisRound;
                        System.out.print("둘레 : ");
                        System.out.println(thisRound);

                        System.out.print("전체 넓이 : ");
                        System.out.println(allArea);
                        System.out.print("전체 둘레 : ");
                        System.out.println(allRound);
                    }
                    return;
                default:
                    break;
            }
            System.out.println(shapeList);
        }
    }
}
