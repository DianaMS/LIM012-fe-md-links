const path = require('path');

const arrayOutput = ['archivo1.txt', 'archivo2.js', 'archivo3.html', 'archivo4.md', 'carpeta1'];

const arrayOutputFilemd = [path.join(process.cwd(), 'test', 'test_container', 'archivo4.md'),
  path.join(process.cwd(), 'test', 'test_container', 'carpeta1', 'archivo5.md'),
  path.join(process.cwd(), 'test', 'test_container', 'carpeta1', 'carpeta2', 'archivo7.md')];

const outputLinks = [
  {
    file: path.join(process.cwd(), 'test', 'test_container', 'archivo4.md'),
    href: 'https://nodejs.org/',
    text: 'Node.js',
  }, {
    file: path.join(process.cwd(), 'test', 'test_container', 'archivo4.md'),
    href: 'https://nodejs.org/pe',
    text: 'Node.js',
  }];

const linksOutput = [
  {
    file: path.join(process.cwd(), 'test', 'test_container', 'archivo4.md'),
    href: 'https://nodejs.org/',
    text: 'Node.js',
    status: 200,
    statusMessage: 'ok',
  }, {
    file: path.join(process.cwd(), 'test', 'test_container', 'archivo4.md'),
    href: 'https://nodejs.org/pe',
    text: 'Node.js',
    status: 404,
    statusMessage: 'fail',
  }];

const printStatsOutput = `
        Total: 2
        Unique: 2
    `;

const printLinksOutput = `
        PATH: ${path.join(process.cwd(), 'test', 'test_container', 'archivo4.md')}
        LINK: https://nodejs.org/
        TEXT: Node.js
        
        PATH: ${path.join(process.cwd(), 'test', 'test_container', 'archivo4.md')}
        LINK: https://nodejs.org/pe
        TEXT: Node.js
        `;

module.exports = {
  arrayOutput,
  arrayOutputFilemd,
  outputLinks,
  linksOutput,
  printStatsOutput,
  printLinksOutput,
};
