const mdLinks = require('./mdLinks');
const optionsStats = require('./stats');

const optionsCLI = (path, options) => {
  if (options === '--validate') {
    return mdLinks(path, { validate: true })
      .then((links) => optionsStats.printValidate(links));
  }

  if (options === '--stats') {
    return mdLinks(path, { validate: true })
      .then((links) => optionsStats.printStats(links));
  }

  if (options === '--stats --validate' || options === '--validate --stats') {
    return mdLinks(path, { validate: true })
      .then((links) => optionsStats.printNumberLinksBroken(links));
  }
  return mdLinks(path, { validate: false })
    .then((links) => optionsStats.printLinks(links));
};

module.exports = optionsCLI;
