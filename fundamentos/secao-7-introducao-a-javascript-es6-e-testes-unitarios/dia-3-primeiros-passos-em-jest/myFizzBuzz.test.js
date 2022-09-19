const myFizzBuzz = require("./myFizzBuzz");

it("Divisivel por 3 e 5", () => expect(myFizzBuzz(15)).toMatch(/fizzbuzz/));

it("Divisivel por 3", () => expect(myFizzBuzz(12)).toMatch(/fizz/));

it("Divisivel por 5", () => expect(myFizzBuzz(10)).toMatch(/buzz/));

it("Não divisivel por 3 e 5", () => expect(myFizzBuzz(16)).toBe(16));

it("Não é um numero", () => expect(myFizzBuzz("a")).toBeFalsy());
