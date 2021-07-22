package sol13.behicle;

public class DeliveryType {
    String name;

    public DeliveryType(){
        setName("");
    }

    public DeliveryType(String name) {
        setName(name);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int work(){
        return 0;
    }
}
