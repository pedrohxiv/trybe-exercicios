package com.trybe.acc.java;

/**
 * Classe principal.
 */
public class Caminhao extends VeiculoBase {

  /**
   * Atributos.
   */
  private double capacidadeCarga;

  /**
   * Constructor.
   * 
   * @param marca            String
   * @param modelo           String
   * @param ano              int
   * @param tipoCombustivel  String
   * @param capacidadeTanque int
   * @param capacidadeCarga  double
   */
  public Caminhao(String marca, String modelo, int ano,
      String tipoCombustivel, int capacidadeTanque,
      double capacidadeCarga) {
    super(marca, modelo, ano, tipoCombustivel, capacidadeTanque);
    this.capacidadeCarga = capacidadeCarga;
  }

  /**
   * Método calcularConsumoCombustivel.
   */
  public double calcularConsumoCombustivel(double distancia) {
    return distancia / 6.0;
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
    System.out.println("Capacidade do carga: " + getCapacidadeCarga());
  }

  /**
   * Método get.
   */
  public double getCapacidadeCarga() {
    return capacidadeCarga;
  }
}
