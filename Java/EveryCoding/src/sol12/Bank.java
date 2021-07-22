package sol12;

import java.util.Scanner;

public class Bank{
    Account[] accountList;
    int accountSize;
    String adminPassword;

    public Bank() {
        this.adminPassword = "0000";
        this.accountSize = 0;
        this.accountList = new Account[1000];
    }

    public static void main(String[] args) {
        Bank nowBank = new Bank();
        ClientHandler handler = new ClientHandler();
        handler.client(nowBank);
    }
}