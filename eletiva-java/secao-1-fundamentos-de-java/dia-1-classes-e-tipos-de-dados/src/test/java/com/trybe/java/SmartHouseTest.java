package com.trybe.java;


import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import java.lang.reflect.*;

import static org.junit.jupiter.api.Assertions.*;


public class SmartHouseTest {

  private SmartHouse smartHouse;
  private Residente residente;
  private Class<?> smartHouseClass;
  private Class<?> residentClass;

  @BeforeEach
  public void setUp()
      throws ClassNotFoundException, InvocationTargetException, InstantiationException, IllegalAccessException {
    try {
      this.smartHouseClass = Class.forName("com.trybe.java.SmartHouse");
      Constructor<?> smartHouseConstructor = smartHouseClass.getConstructor();
      this.smartHouse = (SmartHouse) smartHouseConstructor.newInstance();
      this.residentClass = Class.forName("com.trybe.java.Residente");
      Constructor<?> constructor = residentClass.getConstructor(String.class, int.class,
          double.class, double.class);
      this.residente = (Residente) constructor.newInstance("João", 30, 70.0, 1.75);
    } catch (NoSuchMethodException e) {
      System.out.println(e.getMessage());
    }
  }

  @Test
  @DisplayName("1 - Controle da Lâmpada")
  public void testLampada()
      throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
    Method lampadaLigada = smartHouseClass.getDeclaredMethod("isLampadaLigada");
    assertNotNull(lampadaLigada);
    smartHouseClass.getDeclaredMethod("ligarLampada").invoke(smartHouse);
    boolean islampadaLigada = (boolean) smartHouseClass.getDeclaredMethod("isLampadaLigada")
        .invoke(smartHouse);

    assertTrue(islampadaLigada);
    smartHouseClass.getMethod("desligarLampada").invoke(smartHouse);
    islampadaLigada = smartHouseClass.getMethod("isLampadaLigada").invoke(smartHouse).equals(true);
    assertFalse(islampadaLigada);
  }

  @Test
  @DisplayName("2 - Monitoramento do Residente")
  public void testResidente() {
    Field[] fields = residentClass.getDeclaredFields();
    Set<String> expectedAttrs = new HashSet<>();
    expectedAttrs.add("nome");
    expectedAttrs.add("idade");
    expectedAttrs.add("peso");
    expectedAttrs.add("altura");
    assertEquals(expectedAttrs.size(), Arrays.stream(fields).toList().size());

    for (Field field : fields) {
      assertTrue(expectedAttrs.contains(field.getName()));
    }
  }

  @Test
  @DisplayName("3 - Cálculo do IMC")
  public void testImc()
      throws ClassNotFoundException, NoSuchMethodException, InvocationTargetException, IllegalAccessException {
    double imc = (double) residentClass.getMethod("calculaImc").invoke(residente);
    assertEquals(22.86, imc, 0.01);
  }

  @Test
  @DisplayName("4 - Conexão à Internet")
  public void testConexaoInternet() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
    Method conectarMethodWithRate = smartHouseClass.getDeclaredMethod("conectarInternet", double.class);

    boolean isConnectedHighRate = (boolean) conectarMethodWithRate.invoke(smartHouse, 0.8);
    boolean isConnectedLowRate = (boolean) conectarMethodWithRate.invoke(smartHouse, 0.2);

    assertTrue(isConnectedHighRate);
    assertFalse(isConnectedLowRate);
  }
}

