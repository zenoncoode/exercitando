import javax.swing.*;


public class Prog05{
    public static void main(String args[]){
        String texto = "Programacao Orientada a Objetos";
        String texto2 = texto.replace("Orientada a Objetos", "OO");
        String msg = "";

        msg = "Tamanho: " + texto.length() + "/n" + "Maiusculo: " + texto.toUpperCase() + "\n" + "Nova string: " + texto2;
        
        JOptionPane.showMessageDialog(null, msg.concat("\n\nFim da mensagem"));
    }

}