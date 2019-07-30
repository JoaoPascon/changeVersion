const path = require('./paths').paths;
const fs = require("fs");
const argv = require("yargs");
const arg = argv.demand(['newVersion', 'currentVersion']).argv;
function updatePackageJson() {
    let dataJson = JSON.parse(readFile(path.packageJson));
    writePackageJson(dataJson, arg.newVersion);
}
function writePackageJson(objectJson, newVersion) {
    objectJson.version = newVersion.toString();
    let textJson = JSON.stringify(objectJson);
    fs.writeFile(path.packageJson, textJson, (error) => {
        if (error)
            throw error;
        console.log("Package atualizado com sucesso!");
    });
}
function updatePomXml() {
    let data = readFile(path.pomXml);
    writePomXml(data, arg.newVersion);
}
function writePomXml(pom, newVersion) {
    let pomUpdate = pom.replace('<version>' + arg.currentVersion + '</version>', '<version>' + newVersion + '</version>');
    fs.writeFile(path.pomXml, pomUpdate, (error) => {
        if (error)
            throw error;
        console.log("Pom atualizado com sucesso!");
    });
}
function updateApplicationYml() {
    let data = readFile(path.applicationYml);
    writeApplicationYml(data, arg.newVersion);
}
function writeApplicationYml(yml, newVersion) {
    let updateYml = yml.replace('version: ' + arg.currentVersion, 'version: ' + newVersion);
    fs.writeFile(path.applicationYml, updateYml, (error) => {
        if (error)
            throw error;
        console.log("path.Yml atualizado com sucesso!");
    });
}
function updateGulp() {
    let data = readFile(path.gulpJs);
    writeGulpJs(data, arg.newVersion);
}
function writeGulpJs(gulpText, newVersion) {
    let updatedGulp = gulpText.replace('\'VERSION\', ' + '\"' + arg.currentVersion + '\"', '\'VERSION\', ' + '\"' + newVersion + '\"');
    fs.writeFile(path.gulpJs, updatedGulp, (error) => {
        if (error)
            throw error;
        console.log("Gulp atualizando com sucesso!");
    });
}
function updateConstants() {
    let constantsText = readFile(path.constantsJava);
    writeConstants(constantsText, arg.newVersion);
}
function writeConstants(constantsData, newVersion) {
    let updateConstants = constantsData.replace('SYNC_VERSION = ' + '\"' + arg.currentVersion + '\"', 'SYNC_VERSION = ' + '\"' + newVersion + '\"');
    fs.writeFile('./files/constants.java', updateConstants, (error) => {
        if (error)
            throw error;
        console.log("Constants.java atualizado com sucesso!");
    });
}
//'SYNC_VERSION = ' + '\"' + '1.0.0' + '\"', 'SYNC_VERSION = ' + '\"' + '1.0.1' + '\"')
function readFile(path) {
    return fs.readFileSync(path, 'utf-8');
}
function newVersionIsCorrect() {
    if (arg.currentVersion >= arg.newVersion) {
        console.error("Versão atual é maior que a versão nova fornecida");
        return false;
    }
    return true;
}
function updateFiles() {
    if (!newVersionIsCorrect())
        return;
    updatePackageJson();
    updateGulp();
    updateApplicationYml();
    updatePomXml();
    updateConstants();
}
updateFiles();
//# sourceMappingURL=change_version.js.map