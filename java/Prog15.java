import javax.swing.*;

public class Prog15{
    public static void main(String args[]){

        int i = 0;
        String msg = " ";

        String nome[] = new String[7];
        nome[0] = "Domingo";
        nome[1] = "Segunda";
        nome[2] = "Terca";
        nome[3] = "Quarta";
        nome[4] = "Quinta";
        nome[5] = "Sexta";
        nome[6] = "Sabado";
        
        do{
            i = Integer.parseInt ( 
                JOptionPane.showInputDialog(null, "Digite:\n 0 -> Domingo\n 1 -> Segunda\n 2 -> Terca\n 3 -> Quarta\n 4 -> Quinta\n 5 -> Sexta\n 6 -> Sabado\n\n -1 -> Exit")
            );
            if (i<0){
                msg = "Tchau :)";
            }
            else{
            msg = nome[i];
            }
            JOptionPane.showMessageDialog(null, msg);
        }
        while(i>=0 && i<7);
    }
        
}