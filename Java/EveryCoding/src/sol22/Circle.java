package sol22;

import sol18.Point;
import sol19.Shape;

public class Circle extends Shape{
    int radius;

    public Circle(Point point) {
        super(point);
    }

    @Override
    public Point getPoint() {
        return this.point;
    }

    @Override
    public void setPoint(Point point) {
        this.point = point;
    }

    public int getRadius() {
        return radius;
    }

    public void setRadius(int radius) {
        this.radius = radius;
    }

    @Override
    public double getArea() {
        return Math.PI * getPoint().r* getPoint().r;
    }

    @Override
    public double getRound() {
        return Math.PI * getPoint().r * 2;
    }

    @Override
    public String toString() {
        return "Circle{" +
                "point=" + point +
                ", radius=" + radius +
                '}';
    }
}
