const { src, dest, watch } = require('gulp');

const targetSpfxFolder = "spfx";

function copyLocalizedResources() {
    return src(`../${targetSpfxFolder}/src/webparts/**/loc/*.d.ts`)
        .pipe(dest('./src/webparts'));
}

function triggerTargetWebPartReload() {
    return src(`../${targetSpfxFolder}/src/index.ts`)
        .pipe(dest(`../${targetSpfxFolder}/src/`))
}

exports['copy-loc'] = copyLocalizedResources;

exports.watch = function () {
    watch(`../${targetSpfxFolder}/src/webparts/**/loc/*.d.ts`, {
        ignoreInitial: false
    }, copyLocalizedResources);

    watch('./dist/*.js', triggerTargetWebPartReload);
}