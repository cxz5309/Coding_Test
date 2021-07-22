package sol13.behicle;

public class KickBoard  extends DeliveryType{
    public KickBoard() {
        super("킥보드");
    }

    public KickBoard(String name) {
        super(name);
    }

    @Override
    public int work(){
        return 200;
    }
}
