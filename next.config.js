const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

const config = {
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  target: 'serverless'
};

module.exports = withPlugins(
  [
    [withMDX, {
      pageExtensions: ['js', 'jsx', 'md', 'mdx']
    }],
    // other configs
  ],
  config
);