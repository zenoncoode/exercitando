import javax.swing.*;
import java.text.DecimalFormat;

public class Prog14{
    public static void main(String args[]){

        DecimalFormat df = new DecimalFormat("#.##");

        float valor1 = 0, valor2 = 0, resultado = 0;
        String confirma = "sim";
        
        while(confirma.equals("sim")){
            valor1 = Float.parseFloat( 
                JOptionPane.showInputDialog(null, "Digite o valor 1: ")
            );

            valor2 = Float.parseFloat(
                JOptionPane.showInputDialog(null, "Digite o valor 2: ")
            );

            resultado = valor1 + valor2;

            JOptionPane.showMessageDialog(null, "Soma = " + df.format(resultado));
            
            confirma = JOptionPane.showInputDialog(null, "Deseja continuar?\n");
        };
    }
}