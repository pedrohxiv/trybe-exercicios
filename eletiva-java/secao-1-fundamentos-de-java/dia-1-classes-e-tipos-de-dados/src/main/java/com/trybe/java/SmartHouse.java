package com.trybe.java;

/**
 * Classe.
 **/
public class SmartHouse {

  /**
   * Variável que representa o estado da lâmpada (ligada/desligada).
   */
  private boolean lampadaLigada;

  /**
   * Liga a lâmpada na casa.
   */
  public void ligarLampada() {
    lampadaLigada = true;
  }

  /**
   * Desliga a lâmpada na casa.
   */
  public void desligarLampada() {
    lampadaLigada = false;
  }

  /**
   * Verifica se a lâmpada na casa está ligada.
   *
   * @return true se a lâmpada estiver ligada, false caso contrário.
   */
  public boolean isLampadaLigada() {
    return lampadaLigada;
  }

  /**
   * Simula uma tentativa de conexão à internet com base em uma taxa de sucesso fornecida.
   *
   * @return true se a conexão à internet for bem-sucedida, false caso contrário.
   */
  public boolean conectarInternet(double taxaDeSucesso) {
    return Math.random() < taxaDeSucesso;
  }
}
