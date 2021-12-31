require('@svgr/webpack');
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  productionGzip: true,
  images: {
    domains: ['localhost', 'storage.googleapis.com', 'avatars.dicebear.com', 'images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  webpack: (config, { dev, isServer }) => {
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
