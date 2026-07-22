class Calculator {

    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        Calculator obj = new Calculator();

        System.out.println(obj.add(5, 10));      // 15
        System.out.println(obj.add(5, 10, 15));  // 30
    }
}