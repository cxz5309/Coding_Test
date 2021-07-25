package sol18;

public class Point {
    public int x,y,r;

    public Point() {
        x=0;
        y=0;
    }

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
    public Point (int r){
        this.r = r;
    }

    @Override
    public String toString() {
        return "Point{" +
                "x=" + x +
                ", y=" + y +
                '}';
    }
}
