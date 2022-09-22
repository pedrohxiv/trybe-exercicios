const sum = require("./sum");

it("Retorno de sum(4, 5) é 9", () => expect(sum(4, 5)).toBe(9));

it("Retorno de sum(0, 0) é 0", () => expect(sum(0, 0)).toBe(0));

it("Lança erro quando um dos paramentros é string", () =>
  expect(() => sum(4, "5")).toThrow(Error));

it("Mensagem de error “parameters must be numbers” quando tenta somar string", () =>
  expect(() => sum(4, "5")).toThrow("parameters must be numbers"));
