const section = require('../lib/mainFunctions.js');

describe('Function pathAbsolute()', () => {
  it('Debería retornar false si la ruta es relativa', () => {
    expect(section.pathAbsolute('.')).toBe(false);
  });

  it('Debería retornar true si la ruta es absoluta', () => {
    expect(section.pathAbsolute('/carpeta1/archivo5.md')).toBeTruthy();
  });
});

describe('Function getAbsolute()', () => {
  it('Debería retornar una ruta absoluta al pasarle una ruta relativa', () => {
    expect(section.getAbsolute('.')).toBe(process.cwd());
  });

  it('Debería retornar una ruta absoluta al pasarle una ruta absoluta', () => {
    expect(section.getAbsolute('/carpeta1/archivo5.md')).toBe('/carpeta1/archivo5.md');
  });
});
