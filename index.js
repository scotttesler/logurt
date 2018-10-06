const chalk = require("chalk");
const logSymbols = require("log-symbols");
const stringify = require("json-stable-stringify");

class Logurt {
  static error(text) {
    console.log(logSymbols.error, chalk.red(this.formatPretty(text)));
  }

  static info(text) {
    console.log(logSymbols.info, chalk.blue(this.formatPretty(text)));
  }

  static success(text) {
    console.log(logSymbols.success, chalk.green(this.formatPretty(text)));
  }

  static warning(text) {
    console.log(logSymbols.warning, chalk.yellow(this.formatPretty(text)));
  }

  static formatPretty(text) {
    return JSON.stringify(JSON.parse(stringify(text)), null, 2);
  }
}

module.exports = Logurt;
