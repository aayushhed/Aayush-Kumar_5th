public class Good {
    static int a;
    int b;
    public void show(){
        a=a+1;
        b=b+1;
        System.out.println(a+" "+b);
    }

    public static void main(String[] args){
        Good g1= new Good();
        g1.show();
        Good g2= new Good();
        g2.show();
        Good g3= new Good();
        g3.show();
    }

    
}

//// IN THIS STATIC INT a VALUE CHANGES AS NEW OBJECTS ARE CREATED  AND VALUE OF b REMAINS THE SAME.
/*  OUTPUT IS :1 1
               2 1
               3 1
*/
