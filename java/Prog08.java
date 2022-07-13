import javax.swing.*;
import java.text.DecimalFormat;

public class Prog08{
    public static void main(String args[]){

        DecimalFormat df = new DecimalFormat("#.##");

        float nota1 = 0, nota2 = 0, media = 0;
        String msg = "Resultado -\n";

        nota1 = Float.parseFloat(
            JOptionPane.showInputDialog(null, "Informe a nota 1: ")
        );

        nota2 = Float.parseFloat(
            JOptionPane.showInputDialog(null, "Informe a nota 2: ")
        );

        media = (nota1 + nota2)/2;

        if(nota1 >=0 & nota2 >= 0 & nota1 <=10 & nota2 <=10){

            msg += "Media: " + df.format(media);
            msg += (media >= 7) ? "\nAprovado" : "\nReprovado";
        }

        else{
            msg += "Error 404";
        }

        JOptionPane.showMessageDialog(null, msg);
    }
}