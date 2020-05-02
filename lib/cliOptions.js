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
      .then((links) => optionsStats.printStatsandValidate(links));
  }
  const withValidateFalse = mdLinks(path, { validate: false });
  const condition = (links) => optionsStats.printLinks(links);
  return condition(withValidateFalse);
};

module.exports = optionsCLI;
