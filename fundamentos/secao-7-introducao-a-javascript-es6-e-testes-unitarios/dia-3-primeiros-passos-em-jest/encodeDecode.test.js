const { encode, decode } = require("./encodeDecode");

it("Verifica se encode e decode são funções", () => {
  expect(typeof encode).toBe("function");
  expect(typeof decode).toBe("function");
});

it("Verifica se encode converte em numero", () => {
  expect(encode("a")).toMatch(/1/);
  expect(encode("e")).toMatch(/2/);
  expect(encode("i")).toMatch(/3/);
  expect(encode("o")).toMatch(/4/);
  expect(encode("u")).toMatch(/5/);
});

it("Verifica se decode converte em vogais", () => {
  expect(decode("1")).toMatch(/a/);
  expect(decode("2")).toMatch(/e/);
  expect(decode("3")).toMatch(/i/);
  expect(decode("4")).toMatch(/o/);
  expect(decode("5")).toMatch(/u/);
});

it("Verifica se as demais letras/números não são convertidos para cada caso", () => {
  expect(encode("b")).not.toMatch(/6/);
  expect(encode("c")).not.toMatch(/7/);
  expect(encode("d")).not.toMatch(/8/);
  expect(decode("6")).not.toMatch(/b/);
  expect(decode("7")).not.toMatch(/c/);
  expect(decode("8")).not.toMatch(/d/);
});

it("Verifica se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro", () => {
  expect(Object.values(encode("casa")).length).toBe(4);
  expect(Object.values(encode("porta")).length).toBe(5);
  expect(Object.values(encode("m2s1")).length).toBe(4);
  expect(Object.values(encode("c4mp5t1d4r")).length).toBe(10);
});
