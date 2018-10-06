const chalk = require("chalk");
const logSymbols = require("log-symbols");

class Logurt {
  static error(text) {
    console.log(logSymbols.error, chalk.red(JSON.stringify(text)));
  }

  static info(text) {
    console.log(logSymbols.info, chalk.blue(JSON.stringify(text)));
  }

  static success(text) {
    console.log(logSymbols.success, chalk.green(JSON.stringify(text)));
  }

  static warning(text) {
    console.log(logSymbols.warning, chalk.yellow(JSON.stringify(text)));
  }
}

module.exports = Logurt;
