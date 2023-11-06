package com.trybe.acc.java.caixaeletronico;

import java.util.ArrayList;

public class PessoaCliente {
  private String nomeCompleto;
  private String cpf;
  private String senha;
  private ArrayList<Conta> contas;

  /**
   * Constructor.
   */
  public PessoaCliente(String nomeCompleto, String cpf, String senha) {
    this.nomeCompleto = nomeCompleto;
    this.cpf = cpf;
    this.senha = senha;
    this.contas = new ArrayList<Conta>();

    System.out.println("Nova pessoa cliente "
        + this.nomeCompleto + " com CPF: "
        + this.cpf + " criada!\n");
  }

  public void adicionarConta(Conta conta) {
    this.contas.add(conta);
  }

  public int retornaNumeroDeContas() {
    return this.contas.size();
  }

  public double retornarSaldoContaEspecifica(int indice) {
    return this.contas.get(indice).retornarSaldo();
  }

  public String retornarIdContaEspecifica(int indice) {
    return this.contas.get(indice).getIdConta();
  }

  public void retornarExtratoContaEspecifica(int indice) {
    this.contas.get(indice).retornarExtrato();
  }

  /**
   * Método adicionarTransacaoContaEspecifica.
   */
  public void adicionarTransacaoContaEspecifica(int indice, double quantia, String descricao) {
    this.contas.get(indice).adicionarTransacao(quantia, descricao);
  }

  /**
   * Método validarSenha.
   */
  public boolean validarSenha(String senha) {
    if (this.senha.equals(senha)) {
      return true;
    }
    return false;
  }

  /**
   * Método retornarResumoContas.
   */
  public void retornarResumoContas() {
    System.out.println("\n\nResumo das Contas da pessoa " + this.nomeCompleto + ":\n");
    for (int a = 0; a < this.contas.size(); a++) {
      System.out.println((a + 1) + ") " + this.contas.get(a).retornarResumoConta() + "\n");
    }
    System.out.println();
  }

  public String getCpf() {
    return this.cpf;
  }
}
