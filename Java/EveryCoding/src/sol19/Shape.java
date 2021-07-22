package sol19;

import sol18.Point;

public abstract class Shape {
    Point point;

    public Shape(Point point) {
        this.point = point;
    }
    public abstract Point getPoint();
    public abstract void setPoint(Point point);
    public abstract int getArea();
    public abstract int getRound();
}
