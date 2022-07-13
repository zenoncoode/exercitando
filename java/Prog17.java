import javax.swing.*;

class Prog17{
    public static void main (String args[]){
        int col = 0;
        String msg = " ";
        String agenda[][] = new String[2][3];
        
        agenda[0][0] = "Carla Duniz";
        agenda[1][0] = "10/05/2013";
        agenda[0][1] = "Peterson Silva";
        agenda[1][1] = "03/08/2013";
        agenda[0][2] = "Sandra Oliver";
        agenda[1][2] = "05/09/2013";

        //agenda outra forma
        String agenda2[][] = {
            {"Carla Duniz", "Peterson Silva", "Sandra Oliver"},
            {"10/05/2013", "03/08/2013", "05/09/2013"}
        };

        //alterando a data de agendamento da Carla
        agenda[1][0] = JOptionPane.showInputDialog(null, "Entre com a nova data ");
        JOptionPane.showMessageDialog(null, agenda[1][0]);

        //listagem
        for(int lin=0; lin < agenda[1].length; lin++){
            msg += agenda[col][lin] + " ";
        }
        msg += "\n";
    }
}