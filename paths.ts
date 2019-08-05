export const files = [
    { 
        name: 'packageJson',
        path:'./files/package.json',
        brands: ['cr', 'sy'],
        regexForReplace: (version) => '\"version\":' + '\"' + version + '\"'
    },
    { 
        name: 'applicationYml',
        path: './files/application.yml',
        brands: ['cr', 'sy', 'is'],
        regexForReplace: (version) => 'version: ' + version   
    },
    { 
        name: 'gulpJs',
        path: './files/gulp.js',
        brands: ['sy'],
        regexForReplace: (version) => '\'VERSION\', ' + '\"' + version + '\"',
    },
    { 
        name: 'constantsJava',
        path:'./files/constants.java',
        brands: ['sy'],
        regexForReplace: (version) => 'SYNC_VERSION = ' + '\"' + version + '\"'
    },
    {
        name: 'pomXml',
        path: './files/pom.xml',
        brands: ['cr', 'sy', 'is'],
        regexForReplace: (version) => '<version>' + version + '</version>'
    },
    {
        name: 'bower.json',
        path: './files/bower.json',
        brands: ['sy', 'is'],
        regexForReplace: (version) => '\"version\":' + '\"' + version + '\"'
    }
]