package sol13;

import sol13.behicle.*;
import sol13.drink.Coffee;
import sol13.drink.Drink;
import sol13.drink.EnergyDrink;
import sol13.drink.VitaminDrink;

import java.util.Scanner;

public class Driver {
    static String vehicleStart = "===배달수단===\n1.도보\n2.자전거\n3.킥보드\n4.오토바이\n===\n입력>>";
    static String drinkStart = "===드링크===\n1.비타민음료\n2.커피\n3.에너지드링ㅇ크\n0.안마심\n===\n입력>>";

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ModooDriver nowDriver;
        Drink drink;
        DeliveryType deliveryType;
        int n;

        while(true){
            System.out.print(vehicleStart);
            n = scanner.nextInt();
            nowDriver = new ModooDriver();

            switch (n){
                case 1:
                    deliveryType = new Walker();
                    break;
                case 2:
                    deliveryType = new Bicycle();
                    break;
                case 3:
                    deliveryType = new KickBoard();
                    break;
                case 4:
                    deliveryType = new MotorCycle();
                    break;
                default:
                    return;
            }
            System.out.print(drinkStart);
            n = scanner.nextInt();
            switch (n){
                case 1:
                    drink = new VitaminDrink();
                    nowDriver.drive(deliveryType, drink);
                    break;
                case 2:
                    drink = new Coffee();
                    nowDriver.drive(deliveryType, drink);
                    break;
                case 3:
                    drink = new EnergyDrink();
                    nowDriver.drive(deliveryType, drink);
                    break;
                case 0:
                default:
                    drink = new Drink();
                    nowDriver.drive(deliveryType);
                    break;
            }
        }
    }
}
