import javax.swing.*;

class Prog20{

    public static String Skip(int pula){
        String msg = " ";
        for(int i=0; i<pula; i++){
            msg += "\n";
        }
        return (msg);
    }

    public static void main(String args[]){
        String msg="";

        msg += "abc";

        JOptionPane.showMessageDialog(null, msg + Skip(5) + "abc");
    }

}