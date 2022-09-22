const { encode, decode } = require("./encodeDecode");

it("Verifica se encode e decode são funções", () => {
  expect(() => {
    encode();
  }).toThrow();
  expect(() => {
    decode();
  }).toThrow();
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


