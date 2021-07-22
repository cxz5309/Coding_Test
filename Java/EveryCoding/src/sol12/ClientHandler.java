package sol12;

import java.util.Scanner;

public class ClientHandler{
    static Scanner newScanner;
    Bank nowBank;
    final String startMenu = "===\n" +
            "1. 계좌등록\n" +
            "2. 입금\n" +
            "3. 출금\n" +
            "4. 계좌조회\n" +
            "5. 계좌목록\n" +
            "6. 종료\n" +
            "===\n" +
            "입력>>";
    final String[] createMenu = {
            "계좌번호>>",
            "예금주>>",
            "최초예금액>>",
            "비밀번호>>",
            "'%s'님의 계좌가 계설되었습니다.",
    };
    final String[] depositMenu = {"===입금===",
            "계좌번호>>", "입금액>>",
            "'%s'님에게 임금하는게 맞으십니까?",
            "1. 예", "2. 아니오", "입력>>",
            "'%s'님의 계좌에 '%d' 원이 입금되었습니다."
    };
    final String[] withdrawMenu ={"===출금===",
            "계좌번호>>", "비밀번호>>", "출금액>>",
            "비밀번호가 다릅니다!",
            "‘%s‘ 님의 계좌에 %d 원이 출금되었습니다."};
    final String[] inquiryMenu = {"===계좌조회===",
            "계좌번호>>", "비밀번호>>",
            "‘%s’ 님의 계좌잔액은 %d 원 입니다."
    };
    final String[] listMenu = {"관리자 비밀번호>>",
            "===계좌목록===",
    };
    final String[] exitMenu = {
            "시스템을 종료합니다"
    };

    public Account findBank(String accNum){
        Account thisAcc = null;
        for(int i=0;i<nowBank.accountSize;i++){
            if(nowBank.accountList[i].getAccountNumber().equals(accNum)){
                thisAcc = nowBank.accountList[i];
            }
        }
        return thisAcc;
    }

    public void m1(){
        String accNum, accHol, psw;
        int bal;
        newScanner = new Scanner(System.in);
        System.out.print(createMenu[0]);
        accNum = newScanner.next();
        System.out.print(createMenu[1]);
        accHol = newScanner.next();
        System.out.print(createMenu[2]);
        bal = newScanner.nextInt();
        System.out.print(createMenu[3]);
        psw = newScanner.next();

        Account newAccount = new Account(accNum, accHol, bal);
        newAccount.setPassword(psw);
        System.out.print(String.format(createMenu[4], accHol));

        nowBank.accountList[nowBank.accountSize++] = newAccount;
    }
    public void m2(){
        Account thisAcc = null;
        String accNum, accHolder;
        int bal, yno;
        newScanner = new Scanner(System.in);

        System.out.println(depositMenu[0]);
        System.out.print(depositMenu[1]);
        accNum=newScanner.next();

        thisAcc = findBank(accNum);
        accHolder = thisAcc.getAccountholder();

        System.out.print(depositMenu[2]);
        bal = newScanner.nextInt();
        System.out.println(String.format(depositMenu[3], accHolder));

        System.out.println(depositMenu[4]);
        System.out.println(depositMenu[5]);
        System.out.print(depositMenu[6]);
        yno = newScanner.nextInt();

        if(yno == 1) {
            System.out.print(String.format(depositMenu[7], accHolder, bal));
            thisAcc.setBalance(thisAcc.getBalance() + bal);
        }
    }

    public void m3(){
        Account thisAcc = null;
        String accNum, psw;
        int bal, yno;
        newScanner = new Scanner(System.in);

        System.out.println(withdrawMenu[0]);
        System.out.print(withdrawMenu[1]);
        accNum = newScanner.next();
        System.out.print(withdrawMenu[2]);
        psw = newScanner.next();

        thisAcc = findBank(accNum);

        if(!thisAcc.getPassword().equals(psw)){
            System.out.println(withdrawMenu[4]);
        }
        else{
            System.out.print(withdrawMenu[3]);
            bal = newScanner.nextInt();

            System.out.print(String.format(withdrawMenu[5], thisAcc.getAccountholder(), bal));
            thisAcc.setBalance(thisAcc.getBalance() - bal);
        }
    }

    public void m4(){
        Account thisAcc = null;
        String accNum, psw;
        int bal, yno;
        newScanner = new Scanner(System.in);

        System.out.println(inquiryMenu[0]);
        System.out.print(inquiryMenu[1]);
        accNum = newScanner.next();
        System.out.print(inquiryMenu[2]);
        psw = newScanner.next();

        thisAcc = findBank(accNum);

        if(thisAcc.getPassword().equals(psw)){
            System.out.print(String.format(
                    inquiryMenu[3], thisAcc.getAccountholder(), thisAcc.getBalance()));
        }
    }

    public void m5(){
        Account thisAcc = null;
        String accNum, adminPsw;
        int bal, yno;
        newScanner = new Scanner(System.in);

        System.out.print(listMenu[0]);
        adminPsw = newScanner.next();
        if(nowBank.adminPassword.equals(adminPsw)){
            for(int i=0;i<nowBank.accountSize;i++){
                thisAcc = nowBank.accountList[i];
                System.out.println(thisAcc.getAccountholder() + " " + thisAcc.getAccountNumber() + " " + thisAcc.getBalance());
            }
            System.out.println();
        }
    }
    public void m6(){
        System.out.print(exitMenu[0]);
    }

    public void client(Bank nowBank){
        this.nowBank = nowBank;
        while(true){
            System.out.print(startMenu);
            newScanner = new Scanner(System.in);
            int n = newScanner.nextInt();

            switch (n){
                case 1:
                    m1();
                    break;
                case 2:
                    m2();
                    break;
                case 3:
                    m3();
                    break;
                case 4:
                    m4();
                    break;
                case 5:
                    m5();
                    break;
                case 6:
                    m6();
                    return;
                default : return;
            }
        }
    }
}
