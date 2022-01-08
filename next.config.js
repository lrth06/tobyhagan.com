const withPreact = require('next-plugin-preact')
require('@svgr/webpack');
module.exports = withPreact({
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  productionGzip: true,
  productionGzipExtensions: ['js', 'css'],
  images: {
    domains: ['localhost', 'storage.googleapis.com',],
    formats: ['image/avif', 'image/webp'],
    optimizeImages: true,
    minimumCacheTTL: 60 * 24 * 30,
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups.commons.minChunks = 2;
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  swr: {
    cache: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
});
