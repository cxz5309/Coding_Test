package sol20;

import sol18.Point;
import sol19.Shape;

public class Triangle extends Shape{
    int xSave, ySave;

    public Triangle(Point point) {
        super(point);
    }

    @Override
    public Point getPoint() {
        return Point;
    }

    @Override
    public void setPoint(Point point) {

    }

    @Override
    public int getArea() {
        return getPoint().x * getPoint().y/2;
    }

    @Override
    public int getRound() {
        return (getPoint().x * 2)+(getPoint().y * 2);
    }
    @Override
    public String toString() {
        return "Triangle{" +
                "xSave=" + xSave +
                ", ySave=" + ySave +
                '}';
    }

}
