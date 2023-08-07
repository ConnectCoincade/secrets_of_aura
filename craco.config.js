// craco.config.js
module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.resolve.fallback = {
          // ...webpackConfig.resolve.alias = {
          //   ...webpackConfig.resolve.alias,
          //   '@components': path.resolve(__dirname, 'src/components'),
          //   '@utils': path.resolve(__dirname, 'src/utils'),
          // },
          ...webpackConfig.resolve.fallback,
            "child_process": 'empty',
            "stream": require.resolve('stream-browserify'),
            "process": false,
            "crypto": require.resolve("crypto-browserify"),
            "querystring": require.resolve("querystring-es3"),
            "http": require.resolve("stream-http"),
            "path": require.resolve("path-browserify"),
            "zlib": require.resolve("browserify-zlib"),
            "https": require.resolve("https-browserify"),
            "os": require.resolve("os-browserify/browser"),
            "net": false,
            "tls": false,
            "fs": false
          // Add other Node.js core modules as needed...
        };
        return webpackConfig;
      }
    },
  };