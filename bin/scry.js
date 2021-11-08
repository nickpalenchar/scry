#!/usr/bin/env node
const { Command } =  require('commander');
const { version } = require('../package.json');
const { createContext } = require('./argparse');
const fs   = require('fs/promises');
const path = require('path');

const program = new Command();
program.version(version);

async function main(program) {
  program.parse(process.argv);
  const COMMAND_DIR = path.join(__dirname, 'commands');

  const dirs = (await fs.readdir(COMMAND_DIR, { withFileTypes: true }))
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name);

  for (const dir of dirs) {
    if (dir === program.args[0]) {
      const selected = require(path.join(COMMAND_DIR, dir));
      console.log(program);
      // TODO
      selected(createContext(program.args));
    }
  }
}

main(program)
// main(program).then(() => program.parse(process.argv));
// program.parse(process.argv);
