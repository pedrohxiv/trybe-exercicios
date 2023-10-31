package com.trybe.java.escolainteligente;

import java.util.Scanner;

public class PessoaEstudante {

  /**
   * Método calcularIdadeEmDias.
   */
  public static int calcularIdadeEmDias(int anos, int meses, int dias) {
    return ((anos * 365) + (meses * 30) + dias);
  }

  /**
   * Método coletarInformacoes.
   */
  public static void coletarInformacoes() {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Qual o nome da Pessoa Estudante?");
    String nome = scanner.nextLine();
    System.out.println("Qual a sua idade em anos, meses e dias?");
    System.out.print("Anos: ");
    int anos = scanner.nextInt();
    System.out.print("Meses: ");
    int meses = scanner.nextInt();
    System.out.print("Dias: ");
    int dias = scanner.nextInt();

    System.out.println(
        "A idade de " + nome + " em dias é " + calcularIdadeEmDias(anos, meses, dias) + ".");

    scanner.close();
  }
}