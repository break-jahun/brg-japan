const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = 
  withBundleAnalyzer({
    compress: true,
    webpack(config, options) {
      const { dev, isServer } = options;

      if (dev && isServer) {
        config.plugins.push(
          new ForkTsCheckerWebpackPlugin({
            logger: {
              infrastructure: 'console',
            },
            eslint: {
              enabled: true,
              files: './src/**/*.{js,jsx,ts,tsx}',
            },
          })
        );
      }
      return config;
    },
  })

