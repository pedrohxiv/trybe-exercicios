package com.trybe.java;

/**
 * Classe.
 **/
public class Residente {

  /**
   * Nome do residente.
   */
  public String nome;

  /**
   * Idade do residente.
   */
  public int idade;

  /**
   * Peso do residente em quilogramas (kg).
   */
  public double peso;

  /**
   * Altura do residente em metros (m).
   */
  public double altura;

  /**
   * Construtor da classe Residente.
   *
   * @param nome   Nome do residente.
   * @param idade  Idade do residente.
   * @param peso   Peso do residente em quilogramas (kg).
   * @param altura Altura do residente em metros (m).
   */
  public Residente(String nome, int idade, double peso, double altura) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
  }

  /**
   * Calcula o Índice de Massa Corporal (IMC) do residente.
   *
   * @return O IMC do residente.
   */
  public double calculaImc() {
    return peso / (altura * altura);
  }
}
