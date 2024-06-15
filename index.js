const { Command } = require('commander');
const { name, version } = require('./package.json');
const { GunPowder } = require('./src/index');
const program = new Command();

program
  .name(name)
  .description('A parser/generator of strings/hex color code.')
  .version(version);

program.command('parse')
  .description('Parse a string into a hex code + gunpowder.')
  .argument('<string>', 'string to parse')
  .option('-d, --debug', 'debug')
  .action((s, { debug }) => {
    if (!s) {
      console.error(`Unacceptable empty string on first argument.`);

      return null;
    }

    const p = new GunPowder(s, 'parse', debug);

    console.log(p.result);
  });

program.command('generate')
  .description('Generates a word out of a hex color code string.')
  .argument('<hex>', 'hex string to generate of')
  .option('-d, --debug', 'debug')
  .action((s, { debug }) => {
    let checksum = null;

    for (let i = 0; i < s.length; i++) {
      if (s[i] === 'F') checksum = true;
    }

    if (checksum) {
      console.error(`Unacceptable letter 'F' on hex code first argument.`);

      return null;
    } else if (s.length !== 6) {
      console.error(`Hex code first argument needs to have 6 characters length.`);

      return null;
    }

    const p = new GunPowder(s, 'generate', debug);
  });


program.parse();
