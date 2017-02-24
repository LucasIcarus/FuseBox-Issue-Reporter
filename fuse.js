const build = require('fuse-box');

const { FuseBox } = build;

const fuseBox = FuseBox.init({
    homeDir: './src',
    sourceMap: {
        bundleReference: "sourcemaps.js.map",
        outFile: "./dist/sourcemaps.js.map",
    },
    outFile: './dist/main-fuse.js',
    plugins: [
        build.BabelPlugin()
    ]
});

fuseBox.bundle('>index.js');
