package sol12;

public class Account {
    String accountNumber;
    String accountholder;
    int balance;
    String password;
    final int MIN_BALANCE = 0;
    final int MAX_BALANCE = 1000000;
    final int MIN_TRANSFER = 1000;
    final int MAX_TRANSFER = 0;

    public Account() {
        this.accountNumber = "계좌 없음";
        this.accountholder = "이름 없음";
        this.balance = 0;
    }

    public Account(String accountNumber, String accountholder, int balance) {
        this.setAccountNumber(accountNumber);
        this.setAccountholder(accountholder);
        this.setBalance(balance);
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public String getAccountholder() {
        return accountholder;
    }

    public int getBalance() {
        return balance;
    }

    public String getPassword() {
        return password;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public void setAccountholder(String accountholder) {
        this.accountholder = accountholder;
    }

    public void setBalance(int balance) {
        if (balance <= this.MAX_BALANCE && balance >= this.MIN_BALANCE)
            this.balance = balance;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Account{" +
                "accountNumber='" + accountNumber + '\'' +
                ", accountholder='" + accountholder + '\'' +
                ", balance=" + balance +
                ", password='" + password + '\'' +
                ", MIN_BALANCE=" + MIN_BALANCE +
                ", MAX_BALANCE=" + MAX_BALANCE +
                ", MIN_TRANSFER=" + MIN_TRANSFER +
                ", MAX_TRANSFER=" + MAX_TRANSFER +
                '}';
    }
}
