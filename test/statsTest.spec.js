const stats = require('../lib/stats.js');
const data = require('./dataObj.js');

describe('Function printStats()', () => {
  it('Debería imprimir dos propiedades "Total" y "Unique" de los links', () => {
    expect(stats.printStats(data.linksOutput)).toBe(data.printStatsOutput);
  });
});
