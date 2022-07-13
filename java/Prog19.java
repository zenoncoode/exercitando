import javax.swing.*;

class Prog19{

    public static double calcularPotencia(double v1, double v2){
        return (Math.pow(v1, v2));
    }

    public static void main(String args[]){
        double resultado=0;
        double base = Double.parseDouble(JOptionPane.showInputDialog("informe a base"));
        double exp = Double.parseDouble(JOptionPane.showInputDialog("informe o expoente"));

        resultado = calcularPotencia(base, exp);
        resultado +=10;

        JOptionPane.showMessageDialog(null, base + "^" + exp + ": " + resultado);
    }

}