import java.util.Scanner;

public class Co {
    int num;

    Co(int a){                // a is local variable cause any parameterized is used as local
        num=a;
    }
    public static void main(String[] args){
        Co d = new Co(10);
    }
}