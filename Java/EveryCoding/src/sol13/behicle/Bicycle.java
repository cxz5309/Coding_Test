package sol13.behicle;

public class Bicycle  extends DeliveryType{
    public Bicycle() {
        super("자전거");
    }

    public Bicycle(String name) {
        super(name);
    }

    @Override
    public int work(){
        return 100;
    }
}
