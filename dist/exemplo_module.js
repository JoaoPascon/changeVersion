"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
/*fs.writeFile(process.argv[2], process.argv[3], (error) => {
    if(error) throw error
    console.log(`Arquivo salvo com sucesso ${process.argv[2]}`)
})*/
fs.readFile('./test.xml', 'ascii', (error, data) => {
    if (error)
        error;
    updateFile(data);
});
function updateFile(data) {
    let dataJson = data.
        dataJson.version = '2.0.0';
    fs.writeFile('./package.json', JSON.stringify(dataJson), (err) => {
        if (err)
            throw err;
        console.log('Deu bom');
    });
}
/*fs.open('./goku.png', 'w', 'json', (err, data) => {
    if(err) throw err
    console.log("Deu CERTO")
})*/
/*fs.appendFile('copia.html', 'Coloca no final de algo ai',
(err) => err ? err : console.log('DEU CERTO')) */
/*fs.open('copia.html', 'w', (error, fd) => {
    console.log(fd);
})*/ 
//# sourceMappingURL=exemplo_module.js.map