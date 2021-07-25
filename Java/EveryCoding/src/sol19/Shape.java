package sol19;

import sol18.Point;

public abstract class Shape {
    protected Point point;

    public Shape(Point point) {
        this.point = point;
    }
    public abstract Point getPoint();
    public abstract void setPoint(Point point);
    public abstract double getArea();
    public abstract double getRound();
}
