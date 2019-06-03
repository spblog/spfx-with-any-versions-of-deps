issues: 
- custom webpack build
- externals in webpack
- scss loader and theamable styles
- localization
- reload when source changes

how to add new wp:
1. scaffold in spfx folder
2. copy folder with web part to externals
3. in spfx in webpart's main file remove everything and add re-export of a module
4. update webpack.common - new entry and externals for localization
5. fix fabric import in scss file
6. fix import * as styles in component
7. npm run watch in externals
8. gulp serve in spfx


how to publish
1. in externals - npm run build
2. in spfx - gulp bundle --ship && gulp package-solution --ship