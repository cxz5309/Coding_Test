package sol13.drink;

public class Coffee extends Drink{
    public Coffee() {
        super("커피");
    }

    public Coffee(String name) {
        super(name);
    }

    @Override
    public int getPower() {
        return 50;
    }
}
