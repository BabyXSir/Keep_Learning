import java.io.*;

public class First {

  public static int[] array = new int[] { 1, 2, 3 };

  public static void printArr(int[] array) {
    // for(int item:array) {
    //   System.out.println(item);
    // }
  }

  public static void main(String[] args) throws IOException {
    // static int toNumber (int a) {
    //   return a;
    // };

    // System.out.println(toNumber(2));

    char c;

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    System.out.println("qaq");
    // 读取字符
    do {
      c = (char) br.read();
      System.out.println(c);
    } while (c != 'q');
  }
}
