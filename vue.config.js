/*// vue-loader是 webpack 的加载器，允许你以单文件组件的格式编写 Vue 组件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// webpack 内置插件，用于创建在编译时可以配置的全局常量
const { DefinePlugin } = require('webpack');

// 用于强制所有模块的完整路径必需与磁盘上实际路径的确切大小写相匹配
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');


// 将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 用于在 webpack 构建期间优化、最小化 CSS文件
const OptimizeCssnanoPlugin = require('optimize-css-assets-webpack-plugin');

// webpack 内置插件，用于根据模块的相对路径生成 hash 作为模块 id, 一般用于生产环境
const { HashedModuleIdsPlugin } = require('webpack');

// 用于根据模板或使用加载器生成 HTML 文件
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 用于在使用 html-webpack-plugin 生成的 html 中添加 <link rel ='preload'> 或 <link rel ='prefetch'>，有助于异步加载
const PreloadPlugin = require('preload-webpack-plugin');

// 用于将单个文件或整个目录复制到构建目录
const CopyWebpackPlugin = require('copy-webpack-plugin');*/


module.exports = {

    //根地址
    //publicPath : 'vue',

    //输出目录
    outputDir: 'output',


    //该配置项用于设置是否为生产环境构建生成 source map，一般在生产环境下为了快速定位错误信息
    productionSourceMap: true,

    // //以上操作我们可以成功修改 webpack 中 module 项里配置 rules 规则为图片下的 url-loader 值,将其 limit 限制改为 5M
    // rules: [
    //     {
    //         /* config.module.rule('images') */
    //         test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
    //         use: [
    //             /* config.module.rule('images').use('url-loader') */
    //             {
    //                 loader: 'url-loader',
    //                 options: {
    //                     limit: 5120,
    //                     name: 'img/[name].[hash:8].[ext]'
    //                 }
    //             }
    //         ]
    //     }
    // ],


    // plugins: [
    //     /* config.plugin('vue-loader') */
    //     new VueLoaderPlugin(),
    //
    //     /* config.plugin('define') */
    //     new DefinePlugin(),
    //
    //     /* config.plugin('case-sensitive-paths') */
    //     new CaseSensitivePathsPlugin(),
    //
    //     /* config.plugin('extract-css') */
    //     new MiniCssExtractPlugin(),
    //
    //     /* config.plugin('optimize-css') */
    //     new OptimizeCssnanoPlugin(),
    //
    //     /* config.plugin('hash-module-ids') */
    //     new HashedModuleIdsPlugin(),
    //
    //     /* config.plugin('html') */
    //     new HtmlWebpackPlugin(),
    //
    //     /* config.plugin('preload') */
    //     new PreloadPlugin(),
    //
    //     /* config.plugin('copy') */
    //     new CopyWebpackPlugin()
    // ]
}