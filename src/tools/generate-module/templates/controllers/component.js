module.exports = (componentName, modelName) => ({
  content: `const ${componentName}Controllers = {
  create${modelName}: require('./create${modelName}'),
  get${modelName}s: require('./get${modelName}s'),
  find${modelName}ById: require('./find${modelName}ById'),
  update${modelName}: require('./update${modelName}'),
  delete${modelName}: require('./delete${modelName}'),
};

module.exports = ${componentName}Controllers;
`,
  name: `index.js`,
});
