const printStats = (arrayObjLinks) => {
  const totalLinks = arrayObjLinks.length;
  const allLinks = arrayObjLinks.map((element) => element.href);
  const setUniqueLinks = new Set(allLinks);
  const stats = `
        Total: ${totalLinks}
        Unique: ${setUniqueLinks.size}
    `;
  return stats;
};

const printLinks = (arrayObjLinks) => {
  let objThreeProperty = '';
  if (arrayObjLinks.length > 0) {
    arrayObjLinks.forEach((element) => {
      objThreeProperty += `
        PATH: ${element.file}
        LINK: ${element.href}
        TEXT: ${element.text.substring(0, 50)}
        `;
    });
  }
  if (arrayObjLinks.length === 0) {
    return 'No se encontraron links en esa ruta';
  }
  return objThreeProperty;
};

const printValidate = (arrayObjLinks) => {
  let objFiveProperty = '';
  if (arrayObjLinks.length === 0) {
    return 'No se encontraron links en esa ruta';
  }
  if (arrayObjLinks.length > 0) {
    arrayObjLinks.forEach((element) => {
      objFiveProperty += `
        PATH: ${element.file}
        LINK: ${element.href}
        TEXT: ${element.text.substring(0, 50)}
        STATUS_MESSAGE: ${element.statusMessage}
        STATUS: ${element.status}
        `;
    });
  }
  return objFiveProperty;
};

module.exports = {
  printStats,
  printLinks,
  printValidate,
};