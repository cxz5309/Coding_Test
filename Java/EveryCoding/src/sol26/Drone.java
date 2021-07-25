package sol26;

import sol24.RemoteControl;

public class Drone implements RemoteControl {
    int battery;
    int speed;

    @Override
    public void turnON() {
        battery-=10;
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
