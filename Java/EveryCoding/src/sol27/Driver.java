package sol27;

import sol24.RemoteControl;
import sol25.RcCar;
import sol26.Drone;

public class Driver {
    RemoteControl remoteControl;

    public void SetRemote(String x){
        switch (x){
            case "RcCar":
                remoteControl = new RcCar();
                break;
            case "Drone":
                remoteControl = new Drone();
                break;
            default:
                break;
        }
    }

    public void turnON(){
        remoteControl.turnON();
    }
    public void turnOFF(){
        remoteControl.turnOFF();
    }
    public void setSpeed(int x){
        remoteControl.setSpeed(x);
    }
    public void changeBattery(){
        remoteControl.changeBattery();
    }
}


