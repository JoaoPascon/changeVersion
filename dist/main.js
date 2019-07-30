"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fatorial_1 = require("./fatorial");
const yargv = require("yargs");
const yargs = yargv
    .alias('n', 'num')
    .demandOption('num').argv;
console.log("Gerado automaticamente");
console.log(fatorial_1.fatorial(yargs.num));
console.log(fatorial_1.sum(yargs.num, yargs.num));
//# sourceMappingURL=main.js.map