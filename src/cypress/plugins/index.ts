module.exports = (on: any, config: any) => {
  require('@cypress/code-coverage/task')(on, config);
  return config;
}
export { }