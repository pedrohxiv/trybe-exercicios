package com.trybe.acc.java;

/**
 * Classe principal.
 */
public class Carro extends VeiculoBase {

  /**
   * Atributos.
   */
  private int numPassageiros;

  /**
   * Constructor.
   * 
   * @param marca            String
   * @param modelo           String
   * @param ano              int
   * @param tipoCombustivel  String
   * @param capacidadeTanque int
   * @param numPassageiros   int
   */
  public Carro(String marca, String modelo, int ano,
      String tipoCombustivel, int capacidadeTanque,
      int numPassageiros) {
    super(marca, modelo, ano, tipoCombustivel, capacidadeTanque);
    this.numPassageiros = numPassageiros;
  }

  /**
   * Método calcularConsumoCombustivel.
   */
  public double calcularConsumoCombustivel(double distancia) {
    return distancia / 10.0;
  }

  /**
   * Método exibirInformacoes.
   */
  public void exibirInformacoes() {
    System.out.println("Marca: " + getMarca());
    System.out.println("Modelo: " + getModelo());
    System.out.println("Ano: " + getAno());
    System.out.println("Tipo de combustível: " + getTipoCombustivel());
    System.out.println("Capacidade do tanque: " + getCapacidadeTanque() + " litros");
    System.out.println("Número de passageiros: " + getNumPassageiros());
  }

  /**
   * Método get.
   */
  public int getNumPassageiros() {
    return numPassageiros;
  }
}
