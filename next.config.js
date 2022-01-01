require('@svgr/webpack');
module.exports = {
  experimental: {
    modern: true,
    suspense: true,
    lazy: true
  },
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
    imageSizes: [200, 400, 800, 1600],
    minimumCacheTTL: 60,
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
};
