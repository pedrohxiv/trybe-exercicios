package com.trybe.acc.java.caixaeletronico;

import java.util.ArrayList;

public class Conta {
  private String tipoConta;
  private String idConta;
  private PessoaCliente pessoaCliente;
  private ArrayList<Transacao> transacoes;

  /**
   * Constructor.
   */
  public Conta(String tipoConta, PessoaCliente pessoaCliente, Banco banco) {
    this.tipoConta = tipoConta;
    this.idConta = banco.gerarNumeroNovaConta();
    this.pessoaCliente = pessoaCliente;
    this.transacoes = new ArrayList<Transacao>();
  }

  public void adicionarTransacao(double quantia, String descricao) {
    Transacao transacao = new Transacao(quantia, descricao);
    this.transacoes.add(transacao);
  }

  /**
   * Método retornarSaldo.
   */
  public double retornarSaldo() {
    double saldo = 0;

    for (Transacao transacao : this.transacoes) {
      saldo += transacao.getQuantia();
    }

    return saldo;
  }

  /**
   * Método retornarResumoConta.
   */
  public String retornarResumoConta() {
    double saldo = this.retornarSaldo();

    if (saldo >= 0) {
      return String.format("%s : R$%.02f : %s", this.idConta, saldo, this.tipoConta);
    } else {
      return String.format("%s : R$(%.02f) : %s", this.idConta, saldo, this.tipoConta);
    }
  }

  /**
   * Método retornarExtrato.
   */
  public void retornarExtrato() {
    System.out.println("\nExtrato da conta " + this.idConta + "\n");
    for (int i = this.transacoes.size() - 1; i >= 0; i--) {
      System.out.println(this.transacoes.get(i).retornarResumoTransacao());
    }
    System.out.println();
  }

  public String getIdConta() {
    return idConta;
  }

  public PessoaCliente getPessoaCliente() {
    return pessoaCliente;
  }
}
