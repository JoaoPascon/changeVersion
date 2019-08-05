export const files = [
    { 
        name: 'packageJson',
        path:'./files/package.json',
        brands: ['ciranda', 'sync'],
        regexForReplace: (version) => '\"version\":' + '\"' + version + '\"'
    },
    { 
        name: 'applicationYml',
        path: './files/application.yml',
        brands: ['ciranda', 'sync', 'iscoolapp'],
        regexForReplace: (version) => 'version: ' + version   
    },
    { 
        name: 'gulpJs',
        path: './files/gulp.js',
        brands: ['sync'],
        regexForReplace: (version) => '\'VERSION\', ' + '\"' + version + '\"',
    },
    { 
        name: 'constantsJava',
        path:'./files/constants.java',
        brands: ['sync'],
        regexForReplace: (version) => 'SYNC_VERSION = ' + '\"' + version + '\"'
    },
    {
        name: 'pomXml',
        path: './files/pom.xml',
        brands: ['ciranda', 'sync', 'iscoolapp'],
        regexForReplace: (version) => '<version>' + version + '</version>'
    },
    {
        name: 'bower.json',
        path: './files/bower.json',
        brands: ['sync', 'iscoolapp'],
        regexForReplace: (version) => '\"version\":' + '\"' + version + '\"'
    }
]