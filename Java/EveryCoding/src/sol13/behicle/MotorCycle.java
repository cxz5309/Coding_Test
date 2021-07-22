package sol13.behicle;

public class MotorCycle  extends DeliveryType{
    public MotorCycle() {
        super("오토바이");
    }

    public MotorCycle(String name) {
        super(name);
    }

    @Override
    public int work(){
        return 300;
    }
}
