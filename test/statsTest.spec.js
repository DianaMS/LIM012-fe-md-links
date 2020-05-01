const stats = require('../lib/stats.js');
const data = require('./dataObj.js');

describe('Function printStats()', () => {
  it('Debería imprimir dos propiedades "Total" y "Unique" de los links', () => {
    expect(stats.printStats(data.linksOutput)).toBe(data.printStatsOutput);
  });
});

describe('Function printLinks()', () => {
  it('Debería imprimir tres propiedades "PATH", "LINK", "TEXT"', () => {
    expect(stats.printLinks(data.outputLinks)).toBe(data.printLinksOutput);
  });
  it('Debería retornar "No se encontraron links en esa ruta" si no encuentra links', () => {
    expect(stats.printLinks([])).toBe('No se encontraron links en esa ruta');
  });
});

describe('Function printValidate()', () => {
  it('Debería imprimir 5 propiedades "PATH", "LINK", "TEXT", "STATUS", "STATUS_MESSAGE"', () => {
    expect(stats.printValidate(data.linksOutput)).toBe(data.printValidate);
  });
  it('Debería retornar "No se encontraron links en esa ruta" si no encuentra links', () => {
    expect(stats.printLinks([])).toBe('No se encontraron links en esa ruta');
  });
});
