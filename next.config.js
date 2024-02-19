/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      'd1csarkz8obe9u.cloudfront.net',
      'img.freepik.com',
      'scontent.fiev13-1.fna.fbcdn.net',
      'www.neuromed.ua',
      'medilux.ua',
      'www.salutem.ua',
      'medok.vn.ua',
      'upload.wikimedia.org',
      'spinex.ua',
      'gormonia.com',
      'imeda.vn.ua',
      'kardiomed-plus.vn.ua',
    ],
  },
  async redirects() {
    return [
      {
        source: '/account',
        destination: '/account/profile',
        permanent: true,
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts',
);

module.exports = withNextIntl(nextConfig);
