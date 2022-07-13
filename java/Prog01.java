import java.util.Scanner;
//import javax.swing.JOptionPane;
//import javax.swing.plaf.OptionPaneUI;

public class Prog01{
    public static void main(String[] args){
    System.out.println("Hello World!");
    
    //String nome;
    //nome = JOptionPane.showInputDialog(null, "Digite o nome: ");


    float nota1, nota2, media;
    Scanner entrada = new Scanner(System.in);

    System.out.print("Digite a nota 1: ");
    nota1 = Float.parseFloat(entrada.nextLine());

    System.out.print("Digite a nota 2: ");
    nota2 = Float.parseFloat(entrada.nextLine());

    media = (nota1 + nota2)/2;

    System.out.print("Media: " +media);
    nota1 = Float.parseFloat(entrada.nextLine());
}
}