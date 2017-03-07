const { FuseBox } = require('fusebox');

const fsbx = FuseBox.init({
    homeDir: './',
    log: true,
    debug: true,
    outFile: './dist/main-fuse.js',
    cache: false,
    // standalone : false
});

fsbx.bundle('>src/index.js');
