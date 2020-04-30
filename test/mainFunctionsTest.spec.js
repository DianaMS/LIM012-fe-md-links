const section = require('../lib/mainFunctions.js');

describe('Function pathAbsolute()', () => {
  it('Debería retornar false si la ruta es relativa', () => {
    expect(section.pathAbsolute('.')).toBe(false);
  });

  it('Debería retornar true si la ruta es absoluta', () => {
    expect(section.pathAbsolute('/carpeta1/archivo5.md')).toBeTruthy();
  });
});
