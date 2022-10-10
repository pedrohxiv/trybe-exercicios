const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('Verifica a chamada da função uppercase', (func) => {
  uppercase('casa', (str) => {
    try {
      expect(str).toBe('CASA');
      func();
    } catch (error) {
      func(error);
    }
  });
});
