package sol11;

class Triangle{
    double width;
    double height;
    public Triangle(){}

    public Triangle(double width, double height) {
        this.width = width;
        this.height = height;
    }
    public double getArea(){
        return this.width * this.height / 2;
    }
    public String toString(){
        return "삼각형의 넓이 : " + getArea();
    }
}

class Rectangle{
    double width;
    double height;
    public Rectangle(){}

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }
    public double getArea(){
        return this.width * this.height;
    }
    @Override
    public String toString(){
        return "사각형의 넓이 : " + getArea();
    }
}

class Circle{
    double radius;
    public Circle(){}

    public Circle(double radius) {
        this.radius = radius;
    }
    public double getArea(){
        return Math.PI * this.radius * this.radius;
    }
    public String toString(){
        return "원형의 넓이 : " + getArea();
    }
}

class Trapezoid{
    double top;
    double bottom;
    double height;

    public Trapezoid(){}

    public Trapezoid(double top, double bottom, double height) {
        this.top = top;
        this.bottom = bottom;
        this.height = height;
    }
    public double getArea(){
        return height * (this.bottom + this.top) / 2;
    }
    public String toString(){
        return "사다리꼴의 넓이 : " + getArea();
    }
}

public class Main {
    public static void main(String[] args) {
        Triangle triangle = new Triangle(10, 20);
        Rectangle ractangle = new Rectangle(10, 20);
        Circle circle = new Circle(5);
        Trapezoid trapezoid = new Trapezoid(5, 10, 8);
        System.out.println(triangle.toString());
        System.out.println(ractangle.toString());
        System.out.println(circle.toString());
        System.out.println(trapezoid.toString());
    }
}
