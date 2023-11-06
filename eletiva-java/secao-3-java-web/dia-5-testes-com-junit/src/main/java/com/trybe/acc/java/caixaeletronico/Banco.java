package com.trybe.acc.java.caixaeletronico;

import java.util.ArrayList;
import java.util.Random;

public class Banco {
  private ArrayList<PessoaCliente> pessoasClientes;
  private ArrayList<Conta> contas;

  public Banco() {
    this.pessoasClientes = new ArrayList<PessoaCliente>();
    this.contas = new ArrayList<Conta>();
  }

  /**
   * Método gerarNumeroNovaConta.
   */
  public String gerarNumeroNovaConta() {
    String idConta = "";
    boolean unico = true;

    do {
      for (int i = 0; i < 10; i++) {
        idConta += String.valueOf(Integer.valueOf(new Random().nextInt(10)));
      }
      for (Conta conta : this.contas) {
        if (idConta.compareTo(conta.getIdConta()) == 0) {
          unico = false;
          break;
        }
      }
    } while (!unico);
    return idConta;
  }

  /**
   * Método adicionarPessoaCliente.
   */
  public PessoaCliente adicionarPessoaCliente(String nome, String cpf, String senha) {
    PessoaCliente pessoaCliente = new PessoaCliente(nome, cpf, senha);
    this.pessoasClientes.add(pessoaCliente);
    return pessoaCliente;
  }

  /**
   * Método adicionarConta.
   */
  public void adicionarConta(String tipo, PessoaCliente pessoaCliente) {
    Conta conta = new Conta(tipo, pessoaCliente, this);
    pessoaCliente.adicionarConta(conta);
    this.contas.add(conta);
  }

  /**
   * Método pessoaClienteLogin.
   */
  public PessoaCliente pessoaClienteLogin(String cpf, String senha) {
    for (PessoaCliente pessoaCliente : this.pessoasClientes) {
      if (pessoaCliente.getCpf().compareTo(cpf) == 0 && pessoaCliente.validarSenha(senha)) {
        return pessoaCliente;
      }
    }
    return null;
  }

  public void transferirFundos(PessoaCliente pessoaCliente, int de, int para, double quantia) {
    pessoaCliente.adicionarTransacaoContaEspecifica(de, -1 * quantia, "Transferência enviada");
    pessoaCliente.adicionarTransacaoContaEspecifica(para, quantia, "Transferência recebida");
  }

  public void depositar(PessoaCliente pessoaCliente, int para, double quantia) {
    pessoaCliente.adicionarTransacaoContaEspecifica(para, quantia, "Depósito recebido");
  }

  public void sacar(PessoaCliente pessoaCliente, int de, double quantia) {
    pessoaCliente.adicionarTransacaoContaEspecifica(de, -1 * quantia, "Saque efetuado");
  }

  public void mostrarExtrato(PessoaCliente pessoaCliente, int conta) {
    pessoaCliente.retornarExtratoContaEspecifica(conta);
  }

  public ArrayList<PessoaCliente> getPessoasClientes() {
    return this.pessoasClientes;
  }
}
