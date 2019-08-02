export const files = [
    { 
        name: 'packageJson',
        path:'./file/package.json',
        regexFn: (version) => 'version: ' + version
    },
    { 
        name: 'applicationYml',
        path: './files/application.yml',
        regexFn: (version) => 'version: ' + version   
    },
    { 
        name: 'gulpJs',
        path: './files/gulp.js',
        regexFn: (version) => '\'VERSION\', ' + '\"' + version + '\"',
    },
    { 
        name: 'constantsJava',
        path:'./files/constants.java',
        regexFn: (version) => 'SYNC_VERSION = ' + '\"' + version + '\"'
    },
    {
        name: 'pomXml',
        path: './files/pom.xml',
        regexFn: (version) => '<version>' + version + '</version>'
    },
    {
        name: 'bower.json',
        path: './files/bower.json',
        regexFn: (version) => 'version: ' + version
    }
]