package com.trybe.acc.java.caixaeletronico;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("Testes para a classe Banco")
class BancoTest {

  @Test
  @DisplayName("20 - Testa o gerador de número único para nova conta.")
  void gerarNumeroNovaContaTest() {
    Banco banco = new Banco();

    String numeroConta = banco.gerarNumeroNovaConta();

    assertNotNull(numeroConta);
    assertEquals(10, numeroConta.length());
  }

  @Test
  @DisplayName("21 - Testa o método adicionar pessoa cliente retorna o objeto pessoa cliente.")
  void adicionarPessoaClienteTest() {
    Banco banco = new Banco();
    PessoaCliente pessoaCliente = banco.adicionarPessoaCliente("Pedro Henrique", "836.173.103-56", "123");

    assertEquals("836.173.103-56", pessoaCliente.getCpf());
    assertTrue(pessoaCliente.validarSenha("123"));
    assertTrue(banco.getPessoasClientes().stream()
        .anyMatch(c -> "836.173.103-56".equals(c.getCpf()) && c.validarSenha("123")));
  }

  @Test
  @DisplayName("22 - Testa o método login da pessoa cliente retorna o objeto pessoa cliente corretamente.")
  void pessoaClienteLoginTest() {
    Banco banco = new Banco();

    banco.adicionarPessoaCliente("Pedro Henrique", "836.173.103-56", "123");

    PessoaCliente pessoaCliente = banco.pessoaClienteLogin("836.173.103-56", "123");
    PessoaCliente naoPessoaCliente = banco.pessoaClienteLogin("836.173.103-56", "1234");

    assertNotNull(pessoaCliente);
    assertNull(naoPessoaCliente);
  }

  @Test
  @DisplayName("23 - Testa se o método transferir fundos está transferindo corretamente.")
  void depositarTestTransferirFundosTestmostrarExtratoTest() {
    Banco banco = new Banco();

    PessoaCliente pessoaCliente = banco.adicionarPessoaCliente("Pedro Henrique", "836.173.103-56", "123");

    banco.adicionarConta("Corrente", pessoaCliente);
    banco.adicionarConta("Poupança", pessoaCliente);

    banco.depositar(pessoaCliente, 0, 700.0);
    assertEquals(700.0, pessoaCliente.retornarSaldoContaEspecifica(0));

    banco.transferirFundos(pessoaCliente, 0, 1, 400.0);
    assertEquals(300, pessoaCliente.retornarSaldoContaEspecifica(0));
    assertEquals(400, pessoaCliente.retornarSaldoContaEspecifica(1));
  }

  @Test
  @DisplayName("24 - Testa se o método sacar está funcionando corretamente.")
  void depositarTestSacarTestMostrarExtratoTest() {
    Banco banco = new Banco();

    PessoaCliente pessoaCliente = banco.adicionarPessoaCliente("Pedro Henrique", "836.173.103-56", "123");

    banco.adicionarConta("Corrente", pessoaCliente);

    banco.depositar(pessoaCliente, 0, 1200.0);

    banco.sacar(pessoaCliente, 0, 500.0);
    assertEquals(700, pessoaCliente.retornarSaldoContaEspecifica(0));
  }
}
