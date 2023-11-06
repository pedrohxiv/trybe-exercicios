package com.trybe.acc.java.caixaeletronico;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertSame;
import static org.junit.jupiter.api.Assertions.assertTrue;
import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("Teste da classe Conta")
class ContaTest {

  @Test
  @DisplayName("5 - Testa o construtor da classe conta.")
  void construtorTest() {
    assertDoesNotThrow(() -> {
      PessoaCliente pessoaCliente = new PessoaCliente("João", "535.492.689-19", "password");
      new Conta("Corrente", pessoaCliente, new Banco());
    });
  }

  @Test
  @DisplayName("6 - Testa o método adicionar transação e retornar saldo da conta.")
  void adicionarTransacaoTestRetornarSaldoTest() {
    PessoaCliente pessoaCliente = new PessoaCliente("João", "535.492.689-19", "password");
    Conta conta = new Conta("Corrente", pessoaCliente, new Banco());

    conta.adicionarTransacao(200.0, "Transação Teste");

    assertEquals(200.0, conta.retornarSaldo());
  }

  @Test
  @DisplayName("7 - Testa o método retornar resumo está retornando uma string com os valores corretamente.")
  void retornarResumoContaTest() {
    PessoaCliente pessoaCliente = new PessoaCliente("João", "535.492.689-19", "password");
    Conta conta = new Conta("Corrente", pessoaCliente, new Banco());

    assertEquals(conta.getIdConta() + " : R$0.00 : Corrente", conta.retornarResumoConta());
  }

  @Test
  @DisplayName("8 - Testa o método retornar extrato está imprimindo os valores corretamente.")
  void retornarExtratoTest() {
    PessoaCliente pessoaCliente = new PessoaCliente("João", "535.492.689-19", "password");
    Conta conta = new Conta("Corrente", pessoaCliente, new Banco());

    conta.adicionarTransacao(200.0, "Transação Teste");

    ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
    PrintStream printStream = new PrintStream(outputStream);
    System.setOut(printStream);

    conta.retornarExtrato();

    String output = outputStream.toString();
    String expectedDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss"));

    assertTrue(output.contains(expectedDate));

    System.setOut(System.out);
  }

  @Test
  @DisplayName("9 - Testa o método Getter do atributo idConta está retornando.")
  void getIdContaTest() {
    PessoaCliente pessoaCliente = new PessoaCliente("João", "535.492.689-19", "password");
    Conta conta = new Conta("Corrente", pessoaCliente, new Banco());

    assertEquals(10, conta.getIdConta().length());
  }

  @Test
  @DisplayName("10 - Testa o método método Getter do atributo pessoaCliente está retornando.")
  void getPessoaClienteTest() {
    PessoaCliente pessoaCliente = new PessoaCliente("João", "535.492.689-19", "password");
    Conta conta = new Conta("Corrente", pessoaCliente, new Banco());

    assertSame(pessoaCliente, conta.getPessoaCliente());
  }
}
