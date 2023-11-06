package com.trybe.acc.java.caixaeletronico;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Transacao {
  private double quantia;
  private String instante;
  private String descricao;

  /**
   * Constructor.
   */
  public Transacao(double quantia, String descricao) {
    this.quantia = quantia;
    this.instante = this.retornarInstante();
    this.descricao = descricao;
  }

  public double getQuantia() {
    return quantia;
  }

  /**
   * Método retornarResumoTransacao.
   */
  public String retornarResumoTransacao() {
    if (this.quantia >= 0) {
      return String.format("%s -------- %s: R$ %.02f +", this.instante, this.descricao,
          this.quantia);
    } else {
      return String.format("%s -------- %s: R$ %.02f -", this.instante, this.descricao,
          -this.quantia);
    }
  }

  private String retornarInstante() {
    return DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss").format(LocalDateTime.now());
  }
}