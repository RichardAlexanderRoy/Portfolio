public class ChessTestHelper {
    

    public static void printBoard(ChessModel c) {
        System.out.println("------------------------");
        for(int row = 0; row < 8; row++) {
            for(int col = 0; col < 8; col++) {
                if(c.pieceAt(row, col) != null) {
                    System.out.print(c.pieceAt(row, col).type() + "\t");
                } else {
                    System.out.print("Null\t");
                }
            }
            System.out.println();
        }
    }
}
