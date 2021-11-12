import { Command } from 'commander';
const program = new Command();
import fs from "fs";
import path from "path";

console.log(path.resolve(__dirname, '../', 'generator-config.json'));




async function fileExists(filename: string) {
    try {
        await fs.promises.stat(filename);
        return true;
    } catch (error: Error) {
      if (error instanceof Error || error?.code === 'ENOENT') {
        return false;
      }
      else {
          throw error;
      }
    }
}

function getGeneratorConfig(path: string|null):  {
  if (!path) {
    throw new Error("Generator Config file path is missing");
  }
}

// const commands = fs.readFileSync();
// program
//   .option('-d, --debug', 'output extra debugging')
//   .option('-s, --small', 'small pizza size')
//   .option('-p, --pizza-type <type>', 'flavour of pizza');

// program.parse(process.argv);

// const options = program.opts();
// if (options['debug']) console.log(options);
// console.log('pizza details:');
// if (options['small']) console.log('- small pizza size');
// if (options['pizzaType']) console.log(`- ${options['pizzaType']}`);

program.command('greet <firstName> <lastName>').action((firstName:string, lastName:string) => {
  console.log(`Hello ${firstName} ${lastName}`)
});

program.parse(process.argv);