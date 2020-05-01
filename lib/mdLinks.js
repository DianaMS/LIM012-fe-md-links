const mainFunctions = require('./mainFunctions.js');
const validateLinks = require('./validateLinks.js');

const mdLinks = (path, options) => {
  if (options.validate === true) {
    return validateLinks.isValidate(path);
  }
  return mainFunctions.extractLinks(path);
};

module.exports = mdLinks;
