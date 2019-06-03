const {src, dest, watch} = require('gulp');

function copyLocalizedResources() {
    return src('../spfx/src/webparts/**/loc/*.d.ts')
    .pipe(dest('./src/webparts'));
}

function triggerTargetWebPartReload() {
    return src('../spfx/src/index.ts')
    .pipe(dest('../spfx/src/'))
}

exports['copy-loc'] = copyLocalizedResources;

exports.watch = function() {
    watch('../spfx/src/webparts/**/loc/*.d.ts', {
        ignoreInitial: false
    }, copyLocalizedResources);

    watch('./dist/*.js', triggerTargetWebPartReload);
}