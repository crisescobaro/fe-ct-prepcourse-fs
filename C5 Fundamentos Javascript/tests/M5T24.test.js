const agregarSimboloExclamacion = require('../ejercicios/24');

test("Debe agregar un símbolo de exclamación al final del string y retornarlo", function () {
  expect(agregarSimboloExclamacion('hello world')).toBe('hello world!');
  expect(agregarSimboloExclamacion('Soy Henry')).toBe('Soy Henry!');
});


