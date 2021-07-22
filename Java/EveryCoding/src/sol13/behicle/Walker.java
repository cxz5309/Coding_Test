package sol13.behicle;

public class Walker extends DeliveryType{
    public Walker() {
        super("도보");
    }

    public Walker(String name) {
        super(name);
    }

    @Override
    public int work(){
        return 400;
    }
}
