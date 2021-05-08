const { Command } = require('commander');
const { pipeline } = require('./src/pipeline');

const program = new Command();

program
  .option('-s, --shift <number>', 'shift')
  .option('-a, --action <string>', 'action')
  .option('-i, --input <type>', 'input')
  .option('-o, --output <type>', 'output')
  .action(pipeline)
  .parse();