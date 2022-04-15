
// vue.config.js
const fs = require('fs');
const path = require('path');

// function resolve (dir) {
// 	return path.join(__dirname, dir);
// }

// const CompressionWebpackPlugin = require('compression-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const productionGzipExtensions = ['js', 'css'];
// const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	// 'outputDir': process.env.VUE_APP_DIST,
	// 'lintOnSave': false,
	// // baseUrl: process.env.VUE_APP_CURRENTMODE === 'production'? '/static' : '/',
	// 'assetsDir': 'assets',
	// 'publicPath': '',
	// 'indexPath': 'index.html',
	// // 默认在生成的静态资源文件名中包含hash以控制缓存
	// 'filenameHashing': true,
	// //  将接收ChainableConfig由webpack-chain提供支持的实例的函数。
	// 'chainWebpack': config => {
	// 	config.resolve.alias
	// 		.set('@', resolve('src'))
	// 		.set('assets', resolve('src/assets'))
	// 		.set('components', resolve('src/components'));
	// },
	css: {
		loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/_variables.scss";
        `
      }
    }
	},
	// 'productionSourceMap':false,
	// // 'productionGzip':true,
	// // 'productionGzipExtensions':['js','css'],
	// 'configureWebpack': config => {
	// 	// config.externals = { //用户自己引入需要的库 是手动引入的，webpack每次build都可以跳过这些库，节省不少时间
	// 	// 	'vue': 'Vue',
	// 	// 	'vue-router': 'VueRouter'
	// 	// };
	// 	if (!isProduction) { // 开发环境配置
	// 		config.devtool = 'source-map'
	// 	}
	// 	if (isProduction) {
	// 		// config.plugins.push(
	// 		// 	new UglifyJsPlugin({
	// 		// 		uglifyOptions: {
	// 		// 			compress: {
	// 		// 				drop_debugger: true,
	// 		// 				drop_console: true,  //生产环境自动删除console
	// 		// 			},
	// 		// 			warnings: false,
	// 		// 		},
	// 		// 		sourceMap: false,
	// 		// 		parallel: true,//使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
	// 		// 	}),
	// 		// 	new CompressionWebpackPlugin({
	// 		// 		'algorithm': 'gzip',
	// 		// 		'test': new RegExp(
	// 		// 			'\\.(' + productionGzipExtensions.join('|') + ')$'
	// 		// 		),
	// 		// 		'threshold': 10240,
	// 		// 		'minRatio': 0.8
	// 		// 	})
	// 		// );
	// 	}
	// },
	// 'runtimeCompiler': true, //是否使用包含运行时编译器的Vue内核版本

	// // 反向代理
	// 'devServer': {
  //   port: 8068,
	// 	hot: true
	// 	// overlay: {
	// 	//   warnings: true,
	// 	//   errors: true
	// 	// }
  //   // 'proxy': {
  //   // 	'/api': {
  //   // 		'target': 'http://120.79.151.52:8083',
  //   // 		'secure': false,
  //   // 		'ws': true,
  //   // 		'pathRewrite': {
  //   // 			'^/api': '/'
  //   // 		},
  //   // 		'changeOrigin': true,
  //   // 		'logLevel': 'debug'
  //   // 	}
  //   // }
	// }
};
