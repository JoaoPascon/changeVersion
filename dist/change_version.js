const allFiles = require('./paths').files;
const fs = require("fs");
const argv = require("yargs");
const arg = argv.alias('newVersion', 'nv')
    .alias('currentVersion', 'cv')
    .demand(['newVersion', 'currentVersion']).argv;
const currentBrand = 'cr';
function newVersionIsCorrect() {
    if (arg.currentVersion > arg.newVersion) {
        throw console.error(`A nova versão é menor que é atual versão, 
       ATUAL VERSÂO : ${arg.currentVersion}, 
       NOVA VERSÃO : ${arg.newVersion}`);
    }
}
function getFile(path) {
    return fs.readFileSync(path, 'utf-8');
}
function writeFile(file) {
    fs.writeFile(file.path, file.dataText, (error) => {
        if (error)
            throw error;
        console.log(`Arquivo atualizado com sucesso, ARQUIVO: ${file.name}`);
    });
}
function findFiles(files) {
    files.forEach(file => {
        file.dataText = getFile(file.path);
    });
    return files;
}
function testFile(text, regexFn) {
    return text.indexOf(regexFn(arg.currentVersion)) >= 0;
}
function replaceFile(file) {
    if (testFile(file.dataText, file.regexForReplace)) {
        file.dataText = file.dataText.replace(file.regexForReplace(arg.currentVersion), file.regexForReplace(arg.newVersion));
    }
    else {
        throw console.error(`A versão do arquivo não foi encontrada, ARQUIVO: ${file.name}`);
    }
}
function getFilesForCurrentBrand(file) {
    return file.brands.indexOf(currentBrand) >= 0;
}
function updateFiles() {
    let filesToBrand = allFiles.filter(getFilesForCurrentBrand);
    let files = findFiles(filesToBrand);
    files.forEach(file => replaceFile(file));
    files.forEach(file => writeFile(file));
}
updateFiles();
//# sourceMappingURL=change_version.js.map