import java.util.Arrays;
import java.util.PriorityQueue;

public class Main {


    public int product3Largest(int[] list){
        if(list.length < 3){
            System.out.println("List does not contain 3 numbers");
            return -1;
        }else{
            PriorityQueue<Integer> heap = new PriorityQueue<>((a,b) -> (b-a));
            Arrays.stream(list).forEach(integer -> heap.add(integer));
            return heap.poll() * heap.poll() * heap.poll();
        }
    }


    public static void main(String[] args) {
        Main main = new Main();
        int[] array = {1, 10, 2, 6, 5, 3};

        System.out.println(main.product3Largest(array));
    }
}
