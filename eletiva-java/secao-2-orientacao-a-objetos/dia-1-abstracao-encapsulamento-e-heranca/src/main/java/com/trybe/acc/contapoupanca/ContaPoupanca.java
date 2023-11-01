package com.trybe.acc.contapoupanca;

/**
  * Classe que representa uma conta poupança no sistema de um banco.
  */
public class ContaPoupanca {
  private String titularConta;
  private double saldo;

  /**
   * Construtor para a classe ContaPoupanca.
   * 
   * @param titularConta String do nome do titular da conta
   * @param saldo        double do saldo da conta
   */
  public ContaPoupanca(String titularConta, double saldo) {
    this.saldo = saldo;
    this.titularConta = titularConta;
  }

  /**
   * Método para depositar algum valor na conta.
   * 
   * @param valor double do valor a ser acrescentado
   */
  public void depositar(double valor) {
    this.saldo += valor;
  }

  /**
   * Método para sacar algum valor na conta.
   * 
   * @param valor double do valor a ser retirado
   */
  public void sacar(double valor) {
    this.saldo -= valor;
  }

  /**
   * Método para mostrar o saldo na conta.
   * 
   */
  public double mostrarSaldo() {
    return this.saldo;
  }

  /**
   * Método para mostrar o nom do titular da conta.
   * 
   */
  public String mostrarTitularConta() {
    return this.titularConta;
  }
}
