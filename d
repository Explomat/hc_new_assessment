[1mdiff --git a/dist/stats.json b/dist/stats.json[m
[1mdeleted file mode 100644[m
[1mindex a585154..0000000[m
[1m--- a/dist/stats.json[m
[1m+++ /dev/null[m
[36m@@ -1,162 +0,0 @@[m
[31m-Hash: dd9e9153a2275cf7bb8f[m
[31m-Version: webpack 2.7.0[m
[31m-Time: 14186ms[m
[31m-                                                Asset       Size  Chunks                    Chunk Names[m
[31m- fonts/bb7dd692d58b601c8dce47f2a6df6680.icon-file.eot    33.2 kB          [emitted]         [m
[31m-fonts/3682a480291da6c609a04f3d049bb3c3.icon-file.woff    19.2 kB          [emitted]         [m
[31m- fonts/16725937b098d4d2056e68843c6cc671.icon-file.svg    41.3 kB          [emitted]         [m
[31m- fonts/b77466892c1e5e5a894cf1e0adbf0ab3.icon-file.ttf      33 kB          [emitted]         [m
[31m-                       44564a9ab785b8e40141.bundle.js     704 kB       0  [emitted]  [big]  main[m
[31m-                        dd9e9153a2275cf7bb8f.react.js    42.9 kB       1  [emitted]         react[m
[31m-             style/44564a9ab785b8e40141.style.min.css      56 kB       0  [emitted]         main[m
[31m-                                           index.html  710 bytes          [emitted]         [m
[31m-chunk    {0} 44564a9ab785b8e40141.bundle.js, style/44564a9ab785b8e40141.style.min.css (main) 1.3 MB {1} [initial] [rendered][m
[31m-   [84] ./src/config.js 1.52 kB {0} [built][m
[31m-  [169] ./~/react-dom/index.js 59 bytes {0} [built][m
[31m-  [269] ./src/containers/Root.js 153 bytes {0} [built][m
[31m-  [270] ./src/store/index.js 173 bytes {0} [built][m
[31m-  [271] ./src/styles.js 485 bytes {0} [built][m
[31m-  [272] ./~/babel-polyfill/lib/index.js 833 bytes {0} [built][m
[31m-  [273] ./~/classlist-polyfill/src/index.js 5.7 kB {0} [built][m
[31m-  [274] ./~/console-polyfill/index.js 831 bytes {0} [built][m
[31m-  [500] ./style/competence-block.styl 41 bytes {0} [built][m
[31m-  [501] ./style/half-year.styl 41 bytes {0} [built][m
[31m-  [502] ./style/pa.styl 41 bytes {0} [built][m
[31m-  [503] ./style/quarter.styl 41 bytes {0} [built][m
[31m-  [504] ./style/year.styl 41 bytes {0} [built][m
[31m-  [630] ./~/react-dom/lib/ReactDOM.js 5.17 kB {0} [built][m
[31m-  [708] ./src/index.jsx 2 kB {0} [built][m
[31m-     + 713 hidden modules[m
[31m-chunk    {1} dd9e9153a2275cf7bb8f.react.js (react) 116 kB [entry] [rendered][m
[31m-    [1] ./~/react/react.js 56 bytes {1} [built][m
[31m-    [6] ./~/fbjs/lib/warning.js 2.1 kB {1} [built][m
[31m-   [11] ./~/object-assign/index.js 2.11 kB {1} [built][m
[31m-   [71] ./~/react/lib/React.js 5.08 kB {1} [built][m
[31m-   [72] ./~/react/lib/ReactElement.js 11.2 kB {1} [built][m
[31m-  [261] ./~/react/lib/ReactBaseClasses.js 5.44 kB {1} [built][m
[31m-  [263] ./~/react/lib/ReactElementSymbol.js 622 bytes {1} [built][m
[31m-  [264] ./~/react/lib/ReactNoopUpdateQueue.js 3.36 kB {1} [built][m
[31m-  [732] ./~/react/lib/ReactChildren.js 6.19 kB {1} [built][m
[31m-  [733] ./~/react/lib/ReactDOMFactories.js 5.48 kB {1} [built][m
[31m-  [734] ./~/react/lib/ReactPropTypes.js 500 bytes {1} [built][m
[31m-  [735] ./~/react/lib/ReactVersion.js 350 bytes {1} [built][m
[31m-  [736] ./~/react/lib/createClass.js 688 bytes {1} [built][m
[31m-  [740] ./~/react/lib/onlyChild.js 1.34 kB {1} [built][m
[31m-  [758] multi react 28 bytes {1} [built][m
[31m-     + 16 hidden modules[m
[31m-[m
[31m-WARNING in ./src/components/modules/numeric-input/src/NumericInput.jsx[m
[31m-[m
[31m-[4mc:\repos\hc_new_assessment\src\components\modules\numeric-input\src\NumericInput.jsx[24m[m
[31m-   [2m95:4[22m  [33mwarning[39m  Do not mutate state directly. Use setState()  [2mreact/no-direct-mutation-state[22m[m
[31m-  [2m176:3[22m  [33mwarning[39m  Do not mutate state directly. Use setState()  [2mreact/no-direct-mutation-state[22m[m
[31m-  [2m177:3[22m  [33mwarning[39m  Do not mutate state directly. Use setState()  [2mreact/no-direct-mutation-state[22m[m
[31m-[m
[31m-[33m[1m✖ 3 problems (0 errors, 3 warnings)[m
[31m-[22m[39m[m
[31m- @ ./src/components/modules/numeric-input/index.js 3:17-46[m
[31m- @ ./src/components/modules/input-real/src/InputReal.jsx[m
[31m- @ ./src/components/modules/input-real/index.js[m
[31m- @ ./src/components/Task.jsx[m
[31m- @ ./src/containers/category-data-containers/PaContainer.jsx[m
[31m- @ ./src/containers/category-data-containers/QuarterContainer.jsx[m
[31m- @ ./src/containers/TypeContainer.jsx[m
[31m- @ ./src/containers/PrevAssessmentContainer.jsx[m
[31m- @ ./src/containers/AssessmentContainer.jsx[m
[31m- @ ./src/containers/Root.prod.jsx[m
[31m- @ ./src/containers/Root.js[m
[31m- @ ./src/index.jsx[m
[31m-Child html-webpack-plugin for "index.html":[m
[31m-         Asset    Size  Chunks  Chunk Names[m
[31m-    index.html  545 kB       0  [m
[31m-    chunk    {0} index.html 541 kB [entry] [rendered][m
[31m-        [0] ./~/lodash/lodash.js 540 kB {0} [built][m
[31m-        [1] ./~/html-webpack-plugin/lib/loader.js!./dist/index.html 846 bytes {0} [built][m
[31m-        [2] (webpack)/buildin/global.js 509 bytes {0} [built][m
[31m-        [3] (webpack)/buildin/module.js 517 bytes {0} [built][m
[31m-Child extract-text-webpack-plugin:[m
[31m-    chunk    {0} extract-text-webpack-plugin-output-filename 14.9 kB [entry] [rendered][m
[31m-        [0] ./~/css-loader/lib/css-base.js 2.26 kB {0} [built][m
[31m-        [1] ./~/css-loader!./style/bootstrap-grid.css 12.6 kB {0} [built][m
[31m-Child extract-text-webpack-plugin:[m
[31m-                                                    Asset     Size  Chunks  Chunk Names[m
[31m-     fonts/bb7dd692d58b601c8dce47f2a6df6680.icon-file.eot  33.2 kB          [m
[31m-    fonts/3682a480291da6c609a04f3d049bb3c3.icon-file.woff  19.2 kB          [m
[31m-     fonts/16725937b098d4d2056e68843c6cc671.icon-file.svg  41.3 kB          [m
[31m-     fonts/b77466892c1e5e5a894cf1e0adbf0ab3.icon-file.ttf    33 kB          [m
[31m-    chunk    {0} extract-text-webpack-plugin-output-filename 11.3 kB [entry] [rendered][m
[31m-        [0] ./fonts/icon-file.eot 95 bytes {0} [built][m
[31m-        [1] ./~/css-loader/lib/css-base.js 2.26 kB {0} [built][m
[31m-        [2] ./fonts/icon-file.woff 96 bytes {0} [built][m
[31m-        [3] ./fonts/icon-file.svg 95 bytes {0} [built][m
[31m-        [4] ./fonts/icon-file.ttf 95 bytes {0} [built][m
[31m-        [5] ./~/css-loader!./style/icon-file.css 8.63 kB {0} [built][m
[31m-Child extract-text-webpack-plugin:[m
[31m-    chunk    {0} extract-text-webpack-plugin-output-filename 2.94 kB [entry] [rendered][m
[31m-        [0] ./~/css-loader/lib/css-base.js 2.26 kB {0} [built][m
[31m-        [1] ./~/css-loader!./~/postcss-loader/lib!./~/stylus-loader!./style/year.styl 678 bytes {0} [built][m
[31m-Child extract-text-webpack-plugin:[m
[31m-    chunk    {0} extract-text-webpack-plugin-output-filename 8.25 kB [entry] [rendered][m
[31m-        [0] ./~/css-loader/lib/css-base.js 2.26 kB {0} [built][m
[31m-        [1] ./~/css-loader!./~/postcss-loader/lib!./~/stylus-loader!./style/assessment.styl 5.99 kB {0} [built][m
[31m-Child extract-text-webpack-plugin:[m
[31m-    chunk    {0} extract-text-webpack-plugin-output-filename 4.03 kB [entry] [rendered][m
[31m-        [0] ./~/css-loader/lib/css-base.js 2.26 kB {0} [built][m
[31m-        [1] ./~/css-loader!./~/postcss-loader/lib!./~/stylus-loader!./style/half-year.styl 1.77 kB {0} [built][m
[31m-Child extract-text-webpack-plugin:[m
[31m-    chunk    {0} extract-text-webpack-plugin-output-filename 3.4 kB [entry] [rendered][m
[31m-        [0] ./~/css-loader/lib/css-base.js 2.26 kB {0} [built][m
[31m-        [1] ./~/css-loader!./~/postcss-loader/lib!./~/stylus-loader!./style/pa.styl 1.14 kB {0} [built][m
[31m-Child extract-text-webpack-plugin:[m
[31m-    chunk    {0} extract-text-webpack-plugin-output-filename 3.8 kB [entry] [rendered][m
[31m-        [0] ./~/css-loader/lib/css-base.js 2.26 kB {0} [built][m
[31m-        [1] ./~/css-loader!./~/postcss-loader/lib!./~/stylus-loader!./style/competence-block.styl 1.54 kB