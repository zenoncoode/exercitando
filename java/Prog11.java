import javax.swing.*;

public class Prog11{
    public static void main(String args[]){

        int diasemana = 0;
        String msg = " ";
        do{
            diasemana = Integer.parseInt( 
                JOptionPane.showInputDialog(null, "Digite:\n 0 -> Domingo\n 1 -> Segunda\n 2 -> Terca\n 3 -> Quarta\n 4 -> Quinta\n 5 -> Sexta\n 6 -> Sabado\n\n -1 -> Exit")
            );

            switch (diasemana) {
                case -1:
                msg = "Adeus =)";
                break;

                case 0:
                    msg = "Domingo";
                    break;

                    case 1:
                    msg = "Segunda";
                    break;

                    case 2:
                    msg = "Terca";
                    break;

                    case 3:
                    msg = "Quarta";
                    break;
            
                    case 4:
                    msg = "Quinta";
                    break;

                    case 5:
                    msg = "Sexta";
                    break;

                    case 6:
                    msg = "Sabado";
                    break;

                default:
                    msg = "Valor invalido";
                    break;
            }

            
            if(diasemana >=-1){
                JOptionPane.showMessageDialog(null, msg);
            }
        }
        while (diasemana >= 0);
    }
}