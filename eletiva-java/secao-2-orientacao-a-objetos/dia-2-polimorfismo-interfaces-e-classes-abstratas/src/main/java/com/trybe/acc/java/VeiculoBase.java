package com.trybe.acc.java;

/**
 * Classe principal.
 */
public abstract class VeiculoBase implements Veiculo {

  /**
   * Atributos.
   */
  private String marca;
  private String modelo;
  private int ano;
  private String tipoCombustivel;
  private int capacidadeTanque;

  /**
   * Constructor.
   * 
   * @param marca            String
   * @param modelo           String
   * @param ano              int
   * @param tipoCombustivel  String
   * @param capacidadeTanque int
   */
  public VeiculoBase(String marca, String modelo, int ano,
      String tipoCombustivel, int capacidadeTanque) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.tipoCombustivel = tipoCombustivel;
    this.capacidadeTanque = capacidadeTanque;
  }

  /**
   * Método calcularConsumoCombustivel.
   */
  public abstract double calcularConsumoCombustivel(double distancia);

  /**
   * Método exibirInformacoes.
   */
  public abstract void exibirInformacoes();

  /**
   * Métodos getters e setters.
   */
  public String getMarca() {
    return marca;
  }

  public void setMarca(String marca) {
    this.marca = marca;
  }

  public String getModelo() {
    return modelo;
  }

  public void setModelo(String modelo) {
    this.modelo = modelo;
  }

  public int getAno() {
    return ano;
  }

  public void setAno(int ano) {
    this.ano = ano;
  }

  public String getTipoCombustivel() {
    return tipoCombustivel;
  }

  public void setTipoCombustivel(String tipoCombustivel) {
    this.tipoCombustivel = tipoCombustivel;
  }

  public int getCapacidadeTanque() {
    return capacidadeTanque;
  }

  public void setCapacidadeTanque(int capacidadeTanque) {
    this.capacidadeTanque = capacidadeTanque;
  }
}
