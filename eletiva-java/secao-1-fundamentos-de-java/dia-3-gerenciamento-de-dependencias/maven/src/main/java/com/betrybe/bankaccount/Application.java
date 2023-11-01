package com.betrybe.bankaccount;

import java.util.Scanner;
import org.apache.commons.lang3.StringUtils;

/**
 * A class.
 */
public class Application {

  /**
   * A simple get method.
   */
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    String unformattedNumber;

    System.out.println("Informe o número da conta: ");
    unformattedNumber = input.nextLine();

    if (!StringUtils.isNumeric(unformattedNumber)) {
      System.out.println("Número da conta inválido!");
      input.close();
      return;
    }

    AccountNumberFormatter formatter = new AccountNumberFormatter();
    String formattedNumber = formatter.formatAccountNumber(Integer.parseInt(unformattedNumber));
    System.out.println("Número da conta: " + formattedNumber);
    input.close();
  }

}
