"use strict";
/*(function (exports, require, module, __filename, __dirname) {*/
Object.defineProperty(exports, "__esModule", { value: true });
console.log(module.id);
exports.fatorial = (num) => {
    if (num === 1)
        return num;
    return num * exports.fatorial(num - 1);
};
exports.sum = (num1, num2) => {
    return num1 + num2;
};
/*
module.exports = fatorial;
module.exports = {
    fatorial: fatorial
}
/*exports.fatorial = fatorial;*/
/*});*/ 
//# sourceMappingURL=fatorial.js.map