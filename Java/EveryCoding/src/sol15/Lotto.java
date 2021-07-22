package sol15;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;

public class Lotto extends NumberSetting{
    private static sol15.Lotto lotto = null;
    private int[] rewordMoneys;
    private String[] times = new String[3];//발행일, 추첨일, 추천시간
    private Lotto(){

    }
    public void auto(){
        setLottoNums(play());
    }
    public static sol15.Lotto getInstance() {
        if(lotto == null) {
            lotto = new sol15.Lotto();
        }
        return lotto;
    }
    public void initReword(int n){
        rewordMoneys = new int[n];
    }

    public int[] getRewordMoneys() {
        return rewordMoneys;
    }

    public void setRewordMoneys(int gameNum, int rewordMoneys) {
        this.rewordMoneys[gameNum] = rewordMoneys;
    }

    public void setTimes(){
        Calendar time = Calendar.getInstance();
        SimpleDateFormat format0 = new SimpleDateFormat ( "yyyy/MM/dd일 (E) HH:mm:ss");
        int nowDay = time.get(Calendar.DATE);
        int nowYear = time.get(Calendar.YEAR);
        int subDay = 0;
        times[0] = format0.format(time.getTime());


        subDay = 7-time.get(Calendar.DAY_OF_WEEK);
        time.set(Calendar.DATE, nowDay + subDay);
        time.set(Calendar.HOUR, 21);
        time.set(Calendar.MINUTE, 0);
        time.set(Calendar.SECOND, 0);
        times[1] = format0.format(time.getTime());


        nowDay = time.get(Calendar.DATE);
        time.set(Calendar.YEAR, nowYear + 1);
        time.set(Calendar.DATE, nowDay + 1);
        times[2] = format0.format(time.getTime());
    }

    public String[] getTimes() {
        return times;
    }
}

