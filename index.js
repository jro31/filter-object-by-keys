const filterObject = (object, keys, throwError = true) => {
  let returnObj = {};

  if (throwError && !keys.every(key => Object.keys(object).includes(key))) {
    throw new Error(`Unrecognised key passed to filter-object-by-keys`);
  }

  keys.map(key => {
    returnObj[key] = object[key];
  });

  return returnObj;
};

module.exports = filterObject;
