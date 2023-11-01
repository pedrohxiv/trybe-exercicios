package com.betrybe.bankaccount;

import org.apache.commons.lang3.StringUtils;

/**
 * AccountNumberFormatter.
 */
public class AccountNumberFormatter {

  /**
   * Formata o número da conta.
   *
   * @param literalAccountNumber número da conta
   */
  public String formatAccountNumber(int literalAccountNumber) {
    String accountNumber = String.valueOf(literalAccountNumber);
    if (accountNumber.length() > 6) {
      accountNumber = StringUtils.right(accountNumber, 6);
    } else if (accountNumber.length() < 6) {
      accountNumber = StringUtils.leftPad(accountNumber, 6, '0');
    }

    return accountNumber;
  }

}