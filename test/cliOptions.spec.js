const path = require('path');
const cliOptions = require('../lib/cliOptions');
const data = require('./dataObj');

describe('Function cliOptions', () => {
  it('Debería imprimir 5 propiedades "PATH", "LINK", "TEXT", "STATUS", "STATUS_MESSAGE" al ingresar la opción --validate', (done) => {
    cliOptions(path.join(process.cwd(), 'test', 'test_container'), '--validate').then((elem) => {
      expect(elem).toBe(data.printValidateOutput);
      done();
    });
  });
});
