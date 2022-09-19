const myRemove = require("./myRemove");

it("Verifica se retorna array esperado", () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
});

it("Verifica se não retorna array [1, 2, 3, 4]", () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toContain([1, 2, 3, 4]);
});

it('Verifica se retorna array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
})