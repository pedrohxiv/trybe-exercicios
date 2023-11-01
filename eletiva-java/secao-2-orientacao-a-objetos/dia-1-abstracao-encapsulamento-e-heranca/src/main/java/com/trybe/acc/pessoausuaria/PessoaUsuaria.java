package com.trybe.acc.pessoausuaria;

/**
  * Classe que representa uma pessoa usuária.
  */
public class PessoaUsuaria extends Pessoa {

  /**
   * Construtor para a classe Pessoa.
   * 
   * @param nome      String do nome
   * @param sobrenome String do sobrenome
   */
  public PessoaUsuaria(String nome, String sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  /**
   * Método para pegar o nome e sobrenome do usuário.
   *
   */
  public String getPessoaUsuaria() {
    if (nome != null && nome != "" && sobrenome != null && sobrenome != "") {
      return nome + "." + sobrenome;
    } else {
      return "Pessoa usuária inválida";
    }
  }
}
