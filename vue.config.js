const { config } = require("npm")

// 这里的webpack配置会和公共的webpack.config.js进行合并
module.exports = {
    // 执行 npm run build 统一配置文件路径（本地访问dist/index.html需'./'）
    // NODE_ENV：Node.js 暴露给执行脚本的系统环境变量。通常用于确定在开发环境还是生产环境
    // publicPath: '/',
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    outputDir: 'dist', // 输出文件目录
    // assetsDir: 'static', // 放置静态资源
    // indexPath: 'index.html', // 可以不设置一般会默认
    // filenameHashing:true, // 文件命名
    lintOnSave: false, //设置是否在开发环境下每次保存代码时都启用 eslint验证
    // runtimeCompiler: false, // 是否使用带有浏览器内编译器的完整构建版本
    configureWebpack: { // 别名配置
        resolve: {
            extensions: ['.js', '.json', '.vue'],
            alias: {
                //'src': '@', 默认已配置
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'api': '@/api',
                'views': '@/views',
                'plugins': '@/plugins',
                'utils': '@/utils',
            }
        }
        // 使用前面可加~
    },
    productionSourceMap: false, //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    css: { // css相关配置
        // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中，生产环境下是 true，开发环境下是 false
        extract: process.env.NODE_ENV === "production",
        // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
        sourceMap: false,
        // 启用 CSS modules for all css / pre-processor files.(预加载)
        requireModuleExtension: true,
        loaderOptions: {
            sass: {
                prependData: `@import "./src/styles/main.scss";`
            }
        }
    },
    devServer: {
        port: 8080, // 设置端口号
        host: '127.0.0.1', // ip
        disableHostCheck: true, //是否关闭用于 DNS 重绑定的 HTTP 请求的 HOST 检查
        hotOnly: false, // 热更新
        https: false, // https:{type:Boolean}配置前缀
        open: false, //配置自动启动浏览器
        proxy: null, //设置代理
        // proxy: {
        //   '/api': { //代理标识
        //     target: 'http://localhost:2022/', //指向的实际地址
        //     changeOrigin: true, //是否跨域
        //     ws: true, //如果要代理 websockets，配置这个参数
        //     secure: false, // 如果是https接口，需要配置这个参数
        //     // 标识替换
        //     // 原请求地址为 /api/getData 将'/api'替换''时，
        //     // 代理后的请求地址为： http://xxx.xxx.xxx/getData
        //     // 若替换为'/other',则代理后的请求地址为 http://xxx.xxx.xxx/other/getData 
        //     pathRewrite: { // 标识替换
        //       '^/api': '/api/mock'
        //     }
        //   }
        // }
    },
    // 这个插件中添加的service worker只在生产环境中启用(例如，只有当你运行npm run build或yarn build时)。
    // 不推荐在开发模式中启用service worker，因为它会导致使用以前缓存的资产而不包括最新的本地更改的情况。
    pwa: {
        // serviceWorker:false,
        // 允许您从一个现有的service worker文件开始，并创建一个该文件的副本，并将“预缓存清单”注入其中。
        // workboxPluginMode:'InjectManifest',
        // workboxOptions: {
        //   //swSrc: './app/sw.js', /* Empty file. */
        // },
        iconPaths: {
            favicon32: "favicon.ico",
            favicon16: "favicon.ico",
            appleTouchIcon: "favicon.ico",
            maskIcon: "favicon.ico",
            msTileImage: "favicon.ico"
        }
    }
};