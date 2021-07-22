package sol13.drink;

public class Drink {
    String name;

    public Drink(){
        setName("");
    }

    public Drink(String name) {
        setName(name);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPower(){
        return 0;
    }
}
