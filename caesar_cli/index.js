const { Command } = require('commander');
const { pipeline } = require('./src/pipeline');

const program = new Command();

program
  .option('-s, --shift <number>', 'a shift')
  .option('-a, --action <string>', 'an action encode/decode')
  .option('-i, --input <type>', 'an input file')
  .option('-o, --output <type>', 'an output file')
  .action(pipeline)
  .parse();