package sol13.drink;

public class VitaminDrink extends Drink{
    public VitaminDrink() {
        super("비타민음료");
    }

    public VitaminDrink(String name) {
        super(name);
    }

    @Override
    public int getPower() {
        return 150;
    }
}
