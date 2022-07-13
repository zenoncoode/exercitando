import javax.swing.*;

public class Prog09{
    public static void main(String args[]){

        int diasemana = 0;
        String msg = " ";
        do{
            diasemana = Integer.parseInt( 
                JOptionPane.showInputDialog(null, "Digite:\n 0 -> Domingo\n 1 -> Segunda\n 2 -> Terça\n 3 -> Quarta\n 4 -> Quinta\n 5 -> Sexta\n 6 -> Sabado\n\n -1 -> Exit")
            );

            if(diasemana == 0){
                msg = "Domingo";
            }

            if(diasemana == 1){
                msg = "Segunda";
            }

            if(diasemana == 2){
                msg = "Terça";
            }
            
            if(diasemana == 3){
                msg = "Quarta";
            }
            
            if(diasemana == 4){
                msg = "Quinta";
            }

            if(diasemana == 5){
                msg = "Sexta";
            }

            if(diasemana == 6){
                msg = "Sabado";
            }

            if(diasemana >= 7){
                msg = "Insira um valor valido";
            }
            
            if(diasemana >=0 && diasemana <= 7){
                JOptionPane.showMessageDialog(null, msg);
            }
        }
        while (diasemana >= 0);
    }
}