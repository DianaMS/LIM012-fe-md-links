const path = require('path');
const section = require('../lib/mainFunctions');

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

describe('Function isFile()', () => {
  it('Debería retornar true si es un archivo', () => {
    expect(section.isFile(path.join(process.cwd(), 'test', 'test_container', 'archivo1.txt'))).toBe(true);
  });

  it('Debería retornar false si es un directorio', () => {
    expect(section.isFile(path.join(process.cwd(), 'test', 'test_container'))).toBe(false);
  });
});