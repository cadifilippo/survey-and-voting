const toSnakeCase = (string) =>
  string
    .replace(/([A-Z])([A-Z])/g, '$1_$2')
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\s_]+/g, '_')
    .toLowerCase();

module.exports = toSnakeCase;
