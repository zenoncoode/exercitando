    import javax.swing.*;

    public class Home4{
        public static void main(String[] args){
        String name = "Sr Anonimo";
        short anoNascimento = 0;
        byte dosesVacina = 0;
        String mensagem = "";

        name = JOptionPane.showInputDialog(null, "Qual o seu nome?");
        mensagem = "Sr(a). " + name;
        anoNascimento = Short.parseShort(JOptionPane.showInputDialog(null, "Informe seu ano de nascimento"));
        dosesVacina = Byte.parseByte(JOptionPane.showInputDialog(null, "Quantas doses de vacina voce tomou?"));

        if (anoNascimento > 2003 | dosesVacina < 3){
            mensagem += ", voce nao esta apto a participar";
            
            if (anoNascimento > 2003) {
                mensagem += "\n\nVoce precisa completar 18 anos";
            }
            else{
                mensagem += "\n\nVolte quando tomar todas as doses"; 
            }

        }
        else {
            mensagem += ", voce pode participar, Aproveite a festa";
        }; 
        
            
        JOptionPane.showMessageDialog(null, mensagem);
    }
    }

