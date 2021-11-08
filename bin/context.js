'use strict';

class Args {

  constructor(argv) {
    this.argv = argv;
  }
  /** Gets an option value (--long-flag or -s)
   * @param option {string} - name of option. Dash prefixes optional. snake or camel case
   **/
  getOption(option) {
  }
}

export class Context {
  constructor({print, argv, command}) {
    this.print = print;
    this.argv = new Args(argv);
    this.command = command;
  }
}
