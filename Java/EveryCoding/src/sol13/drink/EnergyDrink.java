package sol13.drink;

public class EnergyDrink extends Drink{
    public EnergyDrink() {
        super("에너지드링크");
    }

    public EnergyDrink(String name) {
        super(name);
    }

    @Override
    public int getPower() {
        return 100;
    }
}