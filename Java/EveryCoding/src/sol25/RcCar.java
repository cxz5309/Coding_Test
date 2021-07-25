package sol25;

import sol24.RemoteControl;

public class RcCar implements RemoteControl {
    int battery = 100;
    int speed;
    @Override
    public void turnON() {
        battery -= 50;
    }

    @Override
    public void turnOFF() {

    }

    @Override
    public void setSpeed(int x) {
        this.speed = x;
    }

    @Override
    public void changeBattery() {
        battery = 100;
    }
}
