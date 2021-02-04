const path = require('path');
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

    // add root of site directory to use imports like:
    // import thing from 'components/thing';
    config.resolve.modules.push(path.resolve('./'));

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