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

module.exports = {
  printStats,
};
