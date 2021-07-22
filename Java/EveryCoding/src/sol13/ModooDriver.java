package sol13;

import sol13.behicle.DeliveryType;
import sol13.drink.Drink;

public class ModooDriver {
    int power = 0;

    public ModooDriver(){
        this.power = 0;
    }

    public ModooDriver(int power) {
        this.power = power;
    }

    public void drive(DeliveryType del){
        this.power -= del.work();
        System.out.println(del.getName() +"(으/)로 배달을 수행중입니다.");
        System.out.println("활력 : " + this.power);
    }
    public void drive(DeliveryType del, Drink drink){
        this.power -= del.work();
        this.power += drink.getPower();
        System.out.println(drink.getName() +"(을/)를 마셨습니다.");
        System.out.println(del.getName() +"(으/)로 배달을 수행중입니다.");
        System.out.println("활력 : " + this.power);
    }
    public void powerUp(Drink drink){
        this.power += drink.getPower();
        System.out.println(drink.getName() +"(을/)를 마셨습니다.");
        System.out.println("활력 : " + this.power);
    }
}
