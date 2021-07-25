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
        return this.point;
    }

    @Override
    public void setPoint(Point point) {
        this.point = point;
    }

    public int getxSave() {
        return xSave;
    }

    public void setxSave(int xSave) {
        this.xSave = xSave;
    }

    public int getySave() {
        return ySave;
    }

    public void setySave(int ySave) {
        this.ySave = ySave;
    }

    @Override
    public double getArea() {
        return getPoint().x * getPoint().y/2;
    }

    @Override
    public double getRound() {
        return (getPoint().x * 2)+(getPoint().y * 2);
    }

    @Override
    public String toString() {
        return "Triangle{" +
                "point=" + point +
                ", xSave=" + xSave +
                ", ySave=" + ySave +
                '}';
    }
}
