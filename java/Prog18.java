import javax.swing.*;
import java.text.SimpleDateFormat;
import java.util.*;

class Prog18{

    public static void getData(){
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
        Date agora = new Date();
        JOptionPane.showMessageDialog(null, df.format(agora));
    }

    public static void getHora(){
        SimpleDateFormat df = new SimpleDateFormat("HH:mm:ss");
        Date agora = new Date();
        JOptionPane.showMessageDialog(null, df.format(agora));
    }

    public static void getAgora(String tipoFormato){
        String formato = "";
        Date agora = new Date();
        switch(tipoFormato){
            case "data": formato = "dd/MM/yyyy";break;
            case "hora": formato = "HH:mm:ss";break;
            default: formato = "dd/MM/yyyy HH:mm:ss";break;
        }
        SimpleDateFormat df = new SimpleDateFormat(formato);
        JOptionPane.showMessageDialog(null, df.format(agora));
    }

    public static void getAgora(){
        getAgora("");
    }

    public static void main (String args[]){
        //getData();
        //getHora();
        getAgora();
    }
}