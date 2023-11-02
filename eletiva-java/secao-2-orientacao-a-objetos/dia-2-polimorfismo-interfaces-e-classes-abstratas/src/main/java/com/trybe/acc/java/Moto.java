package com.trybe.acc.java;

/**
 * Classe principal.
 */
public class Moto extends VeiculoBase {

  /**
   * Atributos.
   */
  private String tipoMoto;

  /**
   * Constructor.
   * 
   * @param marca            String
   * @param modelo           String
   * @param ano              int
   * @param tipoCombustivel  String
   * @param capacidadeTanque int
   * @param tipoMoto         String
   */
  public Moto(String marca, String modelo, int ano,
      String tipoCombustivel, int capacidadeTanque,
      String tipoMoto) {
    super(marca, modelo, ano, tipoCombustivel, capacidadeTanque);
    this.tipoMoto = tipoMoto;
  }

  /**
   * Método calcularConsumoCombustivel.
   */
  public double calcularConsumoCombustivel(double distancia) {
    return distancia / 18.0;
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
    System.out.println("Tipo da moto: " + getTipoMoto());
  }

  /**
   * Método get.
   */
  public String getTipoMoto() {
    return tipoMoto;
  }
}
