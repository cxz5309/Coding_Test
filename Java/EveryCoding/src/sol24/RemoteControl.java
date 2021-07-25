package sol24;

public interface RemoteControl {
    final int minSpeed = 1;
    final int maxSpeed = 100;

    public void turnON();
    public void turnOFF();
    public void setSpeed(int x);
    public void changeBattery();
}
